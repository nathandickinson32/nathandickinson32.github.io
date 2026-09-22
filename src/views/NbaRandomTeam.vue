<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import Peer from 'peerjs';
import rosterData from '../data/nba2k26-play-now.json';

const teams = [
  ['Atlanta Hawks', 'ATL', '#c83b40'], ['Boston Celtics', 'BOS', '#16845b'],
  ['Brooklyn Nets', 'BKN', '#414b5c'], ['Charlotte Hornets', 'CHA', '#278b9c'],
  ['Chicago Bulls', 'CHI', '#bf333d'], ['Cleveland Cavaliers', 'CLE', '#923648'],
  ['Dallas Mavericks', 'DAL', '#2674aa'], ['Denver Nuggets', 'DEN', '#e9b843'],
  ['Detroit Pistons', 'DET', '#bc3b49'], ['Golden State Warriors', 'GSW', '#eac04d'],
  ['Houston Rockets', 'HOU', '#c7464d'], ['Indiana Pacers', 'IND', '#dfab43'],
  ['LA Clippers', 'LAC', '#df574e'], ['Los Angeles Lakers', 'LAL', '#a67ac0'],
  ['Memphis Grizzlies', 'MEM', '#789abe'], ['Miami Heat', 'MIA', '#d8754e'],
  ['Milwaukee Bucks', 'MIL', '#56856d'], ['Minnesota Timberwolves', 'MIN', '#59819b'],
  ['New Orleans Pelicans', 'NOP', '#b28c50'], ['New York Knicks', 'NYK', '#df8243'],
  ['Oklahoma City Thunder', 'OKC', '#4595c4'], ['Orlando Magic', 'ORL', '#4879b7'],
  ['Philadelphia 76ers', 'PHI', '#537dc0'], ['Phoenix Suns', 'PHX', '#a17ac2'],
  ['Portland Trail Blazers', 'POR', '#cd555c'], ['Sacramento Kings', 'SAC', '#906fb7'],
  ['San Antonio Spurs', 'SAS', '#8a9ca8'], ['Toronto Raptors', 'TOR', '#bc5066'],
  ['Utah Jazz', 'UTA', '#8277ab'], ['Washington Wizards', 'WAS', '#6285aa']
];
const eras = ['Current', 'All-Time', 'Past Teams'];
// The visible 2K26 Play Now Online team-select screenshot verifies these 21 teams.
// Remaining teams are left unset until a player checks the current in-game tier.
const verifiedTiers = {
  'Cleveland Cavaliers': 1, 'LA Clippers': 1, 'New York Knicks': 1,
  'Los Angeles Lakers': 1, 'Dallas Mavericks': 1, 'Denver Nuggets': 1,
  'Houston Rockets': 1, 'Philadelphia 76ers': 2, 'Milwaukee Bucks': 2,
  'Boston Celtics': 2, 'Memphis Grizzlies': 2, 'Atlanta Hawks': 2,
  'Sacramento Kings': 2, 'Orlando Magic': 2, 'Chicago Bulls': 3,
  'Miami Heat': 3, 'Charlotte Hornets': 3, 'Utah Jazz': 3,
  'Brooklyn Nets': 3, 'Toronto Raptors': 3, 'Phoenix Suns': 3
};
const rosterByName = Object.fromEntries(rosterData.teams.map(team => [team.name, team]));

const state = reactive({ id: '', players: [{ name: 'Player 1', picks: [], choice: null, forced: null }, { name: 'Player 2', picks: [], choice: null, forced: null }], games: [], keepNext: true, eraNext: null, tierFilter: 0, tierOverrides: {}, revision: 0 });
const selectedTeamIndex = ref(0);
const rosterSearch = ref('');
const activePlayer = ref(0);
const role = ref('');
const status = ref('');
const connected = ref(false);
const participants = ref(0);
const spinning = ref(false);
const wheelAngle = ref(0);
const lastTeam = ref(null);
const copied = ref(false);
const hasSaved = ref(false);
const roomInput = ref('');
const nameInput = ref('');
const editingName = ref(-1);
let peer = null;
let connection = null;
let guests = [];
let frame = 0;
let lastFrame = 0;
let animation = null;
let retryTimer = null;
let pendingResult = null;

const roomUrl = computed(() => state.id ? `${location.origin}/nba2k26-random-team?session=${encodeURIComponent(state.id)}` : '');
const used = computed(() => new Set([
  ...state.players.flatMap(p => p.picks),
  ...state.games.filter(game => game.keep).flatMap(game => game.teams)
]));
const available = computed(() => teams.filter(t =>
  !used.value.has(t[0]) && (!state.tierFilter || teamTier(t[0]) === state.tierFilter)
));
const player = computed(() => state.players[activePlayer.value]);
const bothHaveThree = computed(() => state.players.every(p => p.picks.length >= 3));
const nextKind = computed(() => player.value.forced ? 'done' : player.value.picks.length < 3 ? 'regular' : bothHaveThree.value ? 'forced' : 'waiting');
const canSpin = computed(() => Boolean(state.id) && connected.value && !spinning.value && ['regular', 'forced'].includes(nextKind.value) && available.value.length > 0);
const matchup = computed(() => state.players.map(p => p.choice || p.forced));
const canRecord = computed(() => connected.value && !spinning.value &&
  state.players.every(p => p.picks.length >= 3 && p.choice) && matchup.value[0] !== matchup.value[1] && eras.includes(state.eraNext));
const wheelSlices = computed(() => teams.map((team, i) => ({
  ...{ team, i },
  path: sector(i * 12, (i + 1) * 12),
  label: polar(190, (i + .5) * 12)
})));
const rankedTeams = computed(() => rosterData.teams.map(team => ({
  ...team, topFive: team.players.slice(0, 5).reduce((total, p) => total + p.ovr, 0) / 5
})).sort((a, b) => b.topFive - a.topFive || a.name.localeCompare(b.name)));
const selectedTeam = computed(() => teams[selectedTeamIndex.value]);
const selectedRoster = computed(() => rosterByName[selectedTeam.value[0]]);
const selectedRank = computed(() => rankedTeams.value.findIndex(team => team.name === selectedTeam.value[0]) + 1);
const filteredRoster = computed(() => selectedRoster.value.players.filter(p =>
  p.name.toLowerCase().includes(rosterSearch.value.trim().toLowerCase())
));
function teamTier(name) { return state.tierOverrides[name] || verifiedTiers[name] || null; }
function tierLabel(name) { return teamTier(name) ? `Tier ${teamTier(name)}` : 'Tier unverified'; }
function browseTeam(name) {
  const index = teams.findIndex(team => team[0] === name);
  if (index >= 0) { selectedTeamIndex.value = index; rosterSearch.value = ''; }
}
function browseStep(step) { selectedTeamIndex.value = (selectedTeamIndex.value + step + teams.length) % teams.length; rosterSearch.value = ''; }
watch(lastTeam, name => { if (name) browseTeam(name); });

function polar(radius, deg) {
  const a = (deg - 90) * Math.PI / 180;
  return { x: 300 + radius * Math.cos(a), y: 300 + radius * Math.sin(a) };
}
function sector(start, end) {
  const a = polar(285, start), b = polar(285, end);
  return `M 300 300 L ${a.x} ${a.y} A 285 285 0 0 1 ${b.x} ${b.y} Z`;
}
function secureId() {
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
}
function randomIndex(max) {
  const upper = 0x100000000 - (0x100000000 % max);
  const bytes = new Uint32Array(1);
  do { crypto.getRandomValues(bytes); } while (bytes[0] >= upper);
  return bytes[0] % max;
}
function cleanState(raw) {
  if (!raw || !/^[0-9a-f]{24}$/.test(raw.id) || !Array.isArray(raw.players) || raw.players.length !== 2) return null;
  return {
    id: raw.id, revision: Number.isInteger(raw.revision) ? raw.revision : 0,
    keepNext: typeof raw.keepNext === 'boolean' ? raw.keepNext : true,
    eraNext: eras.includes(raw.eraNext) ? raw.eraNext : null,
    tierFilter: [1, 2, 3].includes(raw.tierFilter) ? raw.tierFilter : 0,
    tierOverrides: Object.fromEntries(Object.entries(raw.tierOverrides || {}).filter(([name, tier]) =>
      teams.some(team => team[0] === name) && [1, 2, 3].includes(tier))),
    games: Array.isArray(raw.games) ? raw.games.filter(game =>
      game && typeof game.id === 'string' && Array.isArray(game.teams) &&
      game.teams.length === 2 && game.teams.every(team => teams.some(t => t[0] === team))
    ).map((game, i) => ({
      id: game.id,
      number: i + 1,
      teams: game.teams,
      names: Array.isArray(game.names) && game.names.length === 2
        ? game.names.map((name, index) => String(name).slice(0, 24) || `Player ${index + 1}`)
        : ['Player 1', 'Player 2'],
      keep: Boolean(game.keep),
      era: eras.includes(game.era) ? game.era : null,
      winner: game.winner === 0 || game.winner === 1 ? game.winner : null,
      playedAt: typeof game.playedAt === 'string' ? game.playedAt : ''
    })) : [],
    players: raw.players.map((p, i) => {
      const picks = Array.isArray(p.picks) ? p.picks.filter((v, j) => teams.some(t => t[0] === v) && p.picks.indexOf(v) === j).slice(0, 4) : [];
      const forced = picks.includes(p.forced) ? p.forced : null;
      return {
        name: typeof p.name === 'string' ? p.name.trim().slice(0, 24) || `Player ${i + 1}` : `Player ${i + 1}`,
        picks, forced,
        choice: forced || (picks.includes(p.choice) ? p.choice : null)
      };
    })
  };
}
function save() {
  if (!state.id) return;
  localStorage.setItem(`nba2k26:${state.id}`, JSON.stringify({ id: state.id, players: state.players, games: state.games, keepNext: state.keepNext, eraNext: state.eraNext, tierFilter: state.tierFilter, tierOverrides: state.tierOverrides, revision: state.revision }));
  localStorage.setItem('nba2k26:last', state.id);
  hasSaved.value = true;
}
function applyState(raw) {
  const next = cleanState(raw);
  if (!next || (state.id && next.id !== state.id) || next.revision < state.revision) return;
  if (next.games.length > state.games.length) { activePlayer.value = 0; lastTeam.value = null; }
  state.id = next.id;
  state.players = next.players;
  state.games = next.games;
  state.keepNext = next.keepNext;
  state.eraNext = next.eraNext;
  state.tierFilter = next.tierFilter;
  state.tierOverrides = next.tierOverrides;
  state.revision = next.revision;
  save();
}
function broadcast(message) {
  guests = guests.filter(c => c.open);
  guests.forEach(c => c.send(message));
}
function updatePresence() {
  if (role.value !== 'host') return;
  guests = guests.filter(c => c.open);
  participants.value = connected.value ? 1 + guests.length : 0;
  if (connected.value) broadcast({ type: 'presence', count: participants.value });
}
function commit(action) {
  if (role.value !== 'host' || spinning.value) return;
  if (!applyAction(action)) return;
  state.revision += 1;
  save();
  broadcast({ type: 'state', state: JSON.parse(JSON.stringify(state)) });
}
function applyAction(action) {
  if (action.type === 'set-tier-filter' && [0, 1, 2, 3].includes(action.tier)) {
    state.tierFilter = action.tier;
    return true;
  }
  if (action.type === 'set-tier' && teams.some(team => team[0] === action.team) && [0, 1, 2, 3].includes(action.tier)) {
    if (action.tier === 0) delete state.tierOverrides[action.team];
    else state.tierOverrides[action.team] = action.tier;
    return true;
  }
  if (action.type === 'set-next-era' && eras.includes(action.era)) {
    state.eraNext = action.era;
    return true;
  }
  if (action.type === 'set-game-era' && (action.era === null || eras.includes(action.era))) {
    const game = state.games.find(item => item.id === action.id);
    if (!game) return false;
    game.era = action.era;
    return true;
  }
  if (action.type === 'keep-next' && typeof action.keep === 'boolean') {
    state.keepNext = action.keep;
    return true;
  }
  if (action.type === 'toggle-keep' && typeof action.keep === 'boolean') {
    const game = state.games.find(item => item.id === action.id);
    if (!game) return false;
    game.keep = action.keep;
    return true;
  }
  if (action.type === 'set-winner' && [0, 1, null].includes(action.winner)) {
    const game = state.games.find(item => item.id === action.id);
    if (!game) return false;
    game.winner = action.winner;
    return true;
  }
  if (action.type === 'save-game') {
    if (!state.players.every(p => p.picks.length >= 3 && p.choice) ||
        state.players[0].choice === state.players[1].choice || !eras.includes(state.eraNext)) return false;
    state.games.push({
      id: secureId(),
      number: state.games.length + 1,
      teams: state.players.map(p => p.choice),
      names: state.players.map(p => p.name),
      keep: state.keepNext,
      era: state.eraNext,
      winner: null,
      playedAt: new Date().toISOString()
    });
    state.players.forEach(p => { p.picks = []; p.choice = null; p.forced = null; });
    state.keepNext = true;
    state.eraNext = null;
    activePlayer.value = 0;
    lastTeam.value = null;
    return true;
  }
  const p = state.players[action.player];
  if (!p || !['name', 'remove', 'choose'].includes(action.type)) return false;
  if (action.type === 'name') {
    const name = String(action.name || '').trim().slice(0, 24);
    if (!name) return false;
    p.name = name;
  } else if (action.type === 'remove') {
    const index = p.picks.indexOf(action.team);
    if (index < 0) return false;
    p.picks.splice(index, 1);
    if (p.forced === action.team) p.forced = null;
    if (p.choice === action.team) p.choice = null;
  } else {
    if (p.picks.length < 3 || !p.picks.includes(action.team) || p.forced) return false;
    p.choice = action.team;
  }
  return true;
}
function request(action) {
  if (role.value === 'host') commit(action);
  else if (connection?.open) connection.send({ type: 'action', action });
}
function setName(index) {
  if (editingName.value === index) {
    request({ type: 'name', player: index, name: nameInput.value });
    editingName.value = -1;
  } else {
    nameInput.value = state.players[index].name;
    editingName.value = index;
  }
}
function remove(index, team) { request({ type: 'remove', player: index, team }); }
function choose(index, team) { request({ type: 'choose', player: index, team }); }
function recordGame() { if (canRecord.value) request({ type: 'save-game' }); }
function gameDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}
function beginSpin() {
  if (!canSpin.value) return;
  if (role.value !== 'host') {
    connection.send({ type: 'spin-request', player: activePlayer.value });
    return;
  }
  startHostSpin(activePlayer.value);
}
function startHostSpin(index) {
  const p = state.players[index];
  if (spinning.value || !connected.value || !p || p.picks.length >= 4 || available.value.length === 0) return;
  if (p.picks.length === 3 && !bothHaveThree.value) return;
  if (p.forced) return;
  const kind = p.picks.length === 3 ? 'forced' : 'regular';
  const chosen = available.value[randomIndex(available.value.length)];
  const message = { type: 'spin', player: index, team: chosen[0], kind, endsAt: Date.now() + 4900 };
  pendingResult = message;
  activePlayer.value = index;
  broadcast(message);
  animateSpin(message, true);
}
function animateSpin(message, isHost = false) {
  if (!teams.some(t => t[0] === message.team)) return;
  activePlayer.value = message.player;
  spinning.value = true;
  lastTeam.value = null;
  const index = teams.findIndex(t => t[0] === message.team);
  const start = wheelAngle.value;
  const targetMod = (360 - (index + .5) * 12) % 360;
  const currentMod = ((start % 360) + 360) % 360;
  const advance = ((targetMod - currentMod + 360) % 360) + 360 * 7;
  animation = { start, end: start + advance, startedAt: Date.now(), endsAt: Math.max(Date.now() + 200, message.endsAt), isHost, message };
}
function completeSpin(message) {
  pendingResult = null;
  const p = state.players[message.player];
  if (!p || p.picks.includes(message.team) || used.value.has(message.team) || p.picks.length >= 4) return;
  if (message.kind === 'forced' && (p.picks.length !== 3 || !bothHaveThree.value)) return;
  p.picks.push(message.team);
  if (message.kind === 'forced') { p.forced = message.team; p.choice = message.team; }
  state.revision += 1;
  lastTeam.value = message.team;
  save();
  broadcast({ type: 'state', state: JSON.parse(JSON.stringify(state)) });
}
function tick(t) {
  const delta = lastFrame ? Math.min(48, t - lastFrame) : 16;
  lastFrame = t;
  if (animation) {
    const progress = Math.min(1, (Date.now() - animation.startedAt) / (animation.endsAt - animation.startedAt));
    wheelAngle.value = animation.start + (animation.end - animation.start) * (1 - (1 - progress) ** 4);
    if (progress === 1) {
      const done = animation;
      animation = null;
      spinning.value = false;
      if (done.isHost) completeSpin(done.message);
      else lastTeam.value = done.message.team;
    }
  } else if (!matchMedia('(prefers-reduced-motion: reduce)').matches) wheelAngle.value += delta * .011;
  frame = requestAnimationFrame(tick);
}
function attachGuest(c) {
  guests.push(c);
  c.on('open', () => {
    c.send({ type: 'state', state: JSON.parse(JSON.stringify(state)) });
    updatePresence();
  });
  c.on('data', data => {
    if (data?.type === 'action') commit(data.action);
    if (data?.type === 'spin-request') startHostSpin(data.player);
  });
  c.on('close', () => { guests = guests.filter(other => other !== c); updatePresence(); });
}
function closePeer() {
  clearTimeout(retryTimer);
  connection?.close();
  peer?.destroy();
  peer = null;
  connection = null;
  guests = [];
  connected.value = false;
  participants.value = 0;
}
function host(id, restore = false) {
  closePeer();
  const saved = restore ? readSaved(id) : null;
  applyState(saved || { id, players: [{ name: 'Player 1', picks: [], choice: null, forced: null }, { name: 'Player 2', picks: [], choice: null, forced: null }], games: [], keepNext: true, eraNext: null, tierFilter: 0, tierOverrides: {}, revision: 0 });
  role.value = 'host';
  status.value = 'Opening session…';
  localStorage.setItem(`nba2k26:host:${id}`, '1');
  history.replaceState(null, '', `/nba2k26-random-team?session=${id}`);
  peer = new Peer(`nba2k26-${id}`);
  peer.on('open', () => { connected.value = true; status.value = 'Session live'; save(); updatePresence(); });
  peer.on('connection', attachGuest);
  peer.on('disconnected', () => { connected.value = false; participants.value = 0; status.value = 'Reconnecting…'; retryTimer = setTimeout(() => peer?.reconnect(), 2500); });
  peer.on('error', err => {
    connected.value = false;
    participants.value = 0;
    status.value = err.type === 'unavailable-id' ? 'This session is already open in another tab. Close that tab, then reload here.' : 'Connection lost. Reload to reconnect.';
  });
}
function readSaved(id) {
  try { return cleanState(JSON.parse(localStorage.getItem(`nba2k26:${id}`) || 'null')); }
  catch { return null; }
}
function join(input) {
  let id = input;
  try { id = new URL(input).searchParams.get('session') || input; } catch { /* code was entered directly */ }
  if (!/^[0-9a-f]{24}$/.test(id)) { status.value = 'That session link is invalid.'; return; }
  closePeer();
  const cached = readSaved(id);
  if (cached) applyState(cached);
  else state.id = id;
  role.value = 'guest';
  status.value = 'Connecting to the session host…';
  history.replaceState(null, '', `/nba2k26-random-team?session=${id}`);
  peer = new Peer();
  peer.on('open', () => connectToHost(id));
  peer.on('disconnected', () => {
    connected.value = false;
    participants.value = 0;
    status.value = 'Connection lost. Reconnecting…';
    retryTimer = setTimeout(() => peer?.reconnect(), 2500);
  });
  peer.on('error', err => {
    if (err.type === 'peer-unavailable') {
      connected.value = false;
      participants.value = 0;
      status.value = 'The host is offline. Ask them to open this link, then retry.';
    } else status.value = 'Could not connect. Try again.';
  });
}
function connectToHost(id) {
  connection = peer.connect(`nba2k26-${id}`, { reliable: true });
  connection.on('open', () => { connected.value = true; status.value = 'Session live'; connection.send({ type: 'hello' }); });
  connection.on('data', data => {
    if (data?.type === 'state') applyState(data.state);
    if (data?.type === 'spin') animateSpin(data);
    if (data?.type === 'presence' && Number.isInteger(data.count) && data.count > 0) participants.value = data.count;
  });
  connection.on('close', () => { connected.value = false; participants.value = 0; status.value = 'Host disconnected. Your picks are saved on this device.'; });
  connection.on('error', () => { connected.value = false; participants.value = 0; status.value = 'Connection lost. Try again.'; });
}
function createSession() { host(secureId()); }
function retry() { if (state.id) join(state.id); }
function resume() {
  const id = localStorage.getItem('nba2k26:last');
  if (id && readSaved(id)) host(id, true);
}
function newSession() {
  closePeer();
  state.id = '';
  state.revision = 0;
  state.players = [{ name: 'Player 1', picks: [], choice: null, forced: null }, { name: 'Player 2', picks: [], choice: null, forced: null }];
  state.games = [];
  state.keepNext = true;
  state.eraNext = null;
  state.tierFilter = 0;
  state.tierOverrides = {};
  role.value = '';
  status.value = '';
  lastTeam.value = null;
  history.replaceState(null, '', '/nba2k26-random-team');
}
async function copyLink() {
  try { await navigator.clipboard.writeText(roomUrl.value); copied.value = true; setTimeout(() => copied.value = false, 2200); }
  catch { status.value = 'Copy unavailable. Select the link to share it.'; }
}
onMounted(() => {
  frame = requestAnimationFrame(tick);
  const id = new URLSearchParams(location.search).get('session');
  hasSaved.value = Boolean(readSaved(localStorage.getItem('nba2k26:last')));
  if (id && /^[0-9a-f]{24}$/.test(id)) {
    if (localStorage.getItem(`nba2k26:host:${id}`) && readSaved(id)) host(id, true);
    else join(id);
  } else if (id) status.value = 'That session link is invalid.';
});
onBeforeUnmount(() => { cancelAnimationFrame(frame); closePeer(); });
</script>

<template>
  <main class="nba-page">
    <header class="page-heading">
      <div><h1>NBA 2K26 Random Teams</h1></div>
      <div v-if="state.id" class="session-actions">
        <span class="connection" :class="{ online: connected }"><i></i>{{ status }}</span>
        <span v-if="connected && participants" class="participant-count" aria-live="polite">{{ participants }} {{ participants === 1 ? 'person' : 'people' }} in session</span>
        <button class="subtle-button" @click="newSession">New session</button>
      </div>
    </header>

    <section v-if="!state.id" class="entry">
      <div class="entry-mark">
        <svg :style="{ transform: `rotate(${wheelAngle}deg)` }" viewBox="0 0 600 600" aria-hidden="true"><path v-for="slice in wheelSlices" :key="slice.team[1]" :d="slice.path" :fill="slice.team[2]" stroke="#101a2a" stroke-width="3" /></svg>
        <span>30 <small>TEAMS</small></span>
      </div>
      <div>
        <h2>Three picks each. One optional fourth.</h2>
        <p>Spin for three teams each, choose a matchup, and record every game. After both players have three teams, either can take an optional fourth spin, but that team must be used.</p>
        <div class="entry-buttons"><button class="primary-button" @click="createSession">Start a session</button><button v-if="hasSaved" class="outline-button" @click="resume">Resume last session</button></div>
        <form class="join-form" @submit.prevent="join(roomInput.trim().toLowerCase())"><label for="room">Have a session link or code?</label><div><input id="room" v-model="roomInput" placeholder="Paste session code" /><button class="outline-button" type="submit">Join</button></div></form>
        <p v-if="status" class="feedback">{{ status }}</p>
      </div>
    </section>

    <template v-else>
      <div class="share-strip">
        <div><strong>Session {{ state.id.slice(0, 6).toUpperCase() }}</strong><span>Share this link to see the same picks live.</span></div>
        <div class="share-controls"><input aria-label="Session link" :value="roomUrl" readonly @focus="$event.target.select()" /><button class="outline-button" @click="copyLink">{{ copied ? 'Copied!' : 'Copy link' }}</button><button v-if="!connected && role === 'guest'" class="outline-button" @click="retry">Retry</button></div>
      </div>

      <div class="game-grid">
        <section class="wheel-panel" aria-label="Team wheel">
          <div class="wheel-top"><span class="eyebrow">THE DRAW</span><span>{{ available.length }} teams in rotation</span></div>
          <div class="tier-filter" aria-label="Filter wheel by team tier">
            <span>Wheel tier</span>
            <button v-for="tier in [0, 1, 2, 3]" :key="tier" :class="{ selected: state.tierFilter === tier }" :disabled="!connected || spinning" :aria-pressed="state.tierFilter === tier" @click="request({ type: 'set-tier-filter', tier })">{{ tier ? `Tier ${tier}` : 'All' }}</button>
          </div>
          <div class="wheel-wrap">
            <div class="pointer" aria-hidden="true"></div>
            <svg class="wheel" :style="{ transform: `rotate(${wheelAngle}deg)` }" viewBox="0 0 600 600" role="img" aria-label="Spinning wheel with all 30 NBA teams">
              <g v-for="slice in wheelSlices" :key="slice.team[1]" :opacity="used.has(slice.team[0]) || (state.tierFilter && teamTier(slice.team[0]) !== state.tierFilter) ? .18 : 1">
                <path :d="slice.path" :fill="slice.team[2]" stroke="#121b2c" stroke-width="2"/>
                <text :x="slice.label.x" :y="slice.label.y" fill="white" text-anchor="middle" dominant-baseline="central" :transform="`rotate(${(slice.i + .5) * 12}, ${slice.label.x}, ${slice.label.y})`">{{ slice.team[1] }}</text>
              </g>
              <circle cx="300" cy="300" r="65" fill="#101a2a" stroke="#f1f3f6" stroke-width="4"/>
            </svg>
            <button class="spin-button" :disabled="!canSpin" @click="beginSpin" :aria-label="`Spin for ${player.name}`"><span>{{ spinning ? 'SPINNING' : 'SPIN' }}</span><small>{{ spinning ? '…' : nextKind === 'forced' ? '4TH PICK' : nextKind === 'waiting' ? 'WAITING' : nextKind === 'done' ? 'DONE' : 'TAP TO DRAW' }}</small></button>
          </div>
          <div class="wheel-footer">
            <div><span class="eyebrow">SPINNING FOR</span><div class="turn-switch"><button v-for="(p, i) in state.players" :key="i" :class="{ selected: activePlayer === i }" @click="activePlayer = i">{{ p.name }}</button></div></div>
            <p v-if="spinning">Drawing a team…</p><p v-else-if="!available.length">No unused teams match this tier. Choose another filter.</p><p v-else-if="nextKind === 'waiting'">Both players need three teams before a fourth spin.</p><p v-else-if="lastTeam"><strong>{{ lastTeam }}</strong><br>{{ tierLabel(lastTeam) }} · <a href="#team-ratings">View ratings ↓</a></p><p v-else-if="nextKind === 'forced'">Fourth spin is locked in automatically.</p><p v-else-if="nextKind === 'done'">This player has all four picks.</p><p v-else>Three picks each, then choose or take a fourth.</p>
          </div>
        </section>

        <section class="players-panel" aria-label="Player selections">
          <div v-for="(p, i) in state.players" :key="i" class="player-card" :class="{ active: activePlayer === i }">
            <div class="player-head">
              <div><span class="eyebrow">PLAYER {{ i + 1 }}</span><div v-if="editingName === i" class="name-edit"><input v-model="nameInput" maxlength="24" :aria-label="`Player ${i + 1} name`" @keyup.enter="setName(i)" /><button @click="setName(i)">Save</button></div><h2 v-else>{{ p.name }} <button class="edit-name" :aria-label="`Edit ${p.name}'s name`" @click="setName(i)">✎</button></h2></div>
              <button class="pick-player" @click="activePlayer = i">Spin for {{ p.name }}</button>
            </div>
            <div class="pick-list">
              <div v-for="slot in 4" :key="slot" class="pick-row" :class="{ empty: !p.picks[slot - 1], forced: slot === 4 }">
                <span class="slot-num">{{ slot < 4 ? `0${slot}` : '04' }}</span>
                <template v-if="p.picks[slot - 1]">
                  <span class="team-name"><button class="team-link" @click="browseTeam(p.picks[slot - 1])">{{ p.picks[slot - 1] }}</button> <em>{{ tierLabel(p.picks[slot - 1]) }}</em> <small v-if="slot === 4">LOCKED</small></span>
                  <button v-if="p.picks.length >= 3 && !p.forced" class="choose-button" :class="{ chosen: p.choice === p.picks[slot - 1] }" :aria-label="`Choose ${p.picks[slot - 1]} for matchup`" @click="choose(i, p.picks[slot - 1])">{{ p.choice === p.picks[slot - 1] ? 'MATCHUP PICK' : 'CHOOSE' }}</button>
                  <button class="remove-button" :aria-label="`Remove ${p.picks[slot - 1]}`" title="Remove team" @click="remove(i, p.picks[slot - 1])">×</button>
                </template>
                <template v-else><span class="team-name">{{ slot === 4 ? 'Optional after both have three — must use if spun' : 'Waiting for a spin' }}</span></template>
              </div>
            </div>
          </div>
          <div class="matchup">
            <span class="eyebrow">GAME {{ state.games.length + 1 }}</span>
            <div class="matchup-teams"><strong>{{ matchup[0] || 'Player 1 pick' }}</strong><span>VS</span><strong>{{ matchup[1] || 'Player 2 pick' }}</strong></div>
            <label class="era-field">Team era <select aria-label="Team era for next game" :value="state.eraNext || ''" :disabled="!connected || spinning" @change="request({ type: 'set-next-era', era: $event.target.value })"><option value="" disabled>Choose an era</option><option v-for="era in eras" :key="era" :value="era">{{ era }}</option></select></label>
            <label class="keep-option"><input type="checkbox" :checked="state.keepNext" :disabled="!connected || spinning" @change="request({ type: 'keep-next', keep: $event.target.checked })" /> Keep both teams off the wheel for future games</label>
            <button class="primary-button record-button" :disabled="!canRecord" @click="recordGame">Record Game {{ state.games.length + 1 }}</button>
            <p v-if="!canRecord" class="record-help">Choose an era and draw at least three teams for each player, then choose one team each.</p>
          </div>
          <p class="rule-note">Current picks and teams marked in game history stay off the wheel. Session picks save on your device; keep the host’s tab open for live sharing.</p>
        </section>
      </div>
      <section class="history-panel" aria-label="Games played">
        <div class="history-heading"><h2>Games played</h2><span>{{ state.games.length }} recorded</span></div>
        <p v-if="!state.games.length" class="history-empty">Your first matchup will appear here after you record it.</p>
        <div v-else class="history-list">
          <article v-for="game in state.games" :key="game.id" class="history-game">
            <div class="history-number"><strong>GAME {{ game.number }}</strong><small>{{ gameDate(game.playedAt) }}</small></div>
            <div class="history-match"><div><small>{{ game.names[0] }}</small><strong>{{ game.teams[0] }}</strong><small>{{ tierLabel(game.teams[0]) }}</small></div><span>VS</span><div><small>{{ game.names[1] }}</small><strong>{{ game.teams[1] }}</strong><small>{{ tierLabel(game.teams[1]) }}</small></div></div>
            <label class="history-era">Team era <select :aria-label="`Team era for Game ${game.number}`" :value="game.era || ''" :disabled="!connected || spinning" @change="request({ type: 'set-game-era', id: game.id, era: $event.target.value || null })"><option value="">Not set</option><option v-for="era in eras" :key="era" :value="era">{{ era }}</option></select></label>
            <div class="winner-row"><span>Winner</span><button v-for="index in [0, 1]" :key="index" class="winner-button" :class="{ selected: game.winner === index }" :disabled="!connected || spinning" :aria-pressed="game.winner === index" @click="request({ type: 'set-winner', id: game.id, winner: game.winner === index ? null : index })">{{ game.names[index] }}{{ game.winner === index ? ' ✓' : '' }}</button><small v-if="game.winner === null">Not marked yet</small></div>
            <label class="keep-option history-keep"><input type="checkbox" :checked="game.keep" :disabled="!connected || spinning" @change="request({ type: 'toggle-keep', id: game.id, keep: $event.target.checked })" /> Keep both off wheel</label>
          </article>
        </div>
      </section>
    </template>
    <section id="team-ratings" class="ratings-panel" aria-label="NBA 2K26 team and player ratings">
      <div class="ratings-heading"><div><span class="eyebrow">NBA 2K26 · PLAY NOW ONLINE</span><h2>Teams & player ratings</h2></div><span>30 current teams · 531 players</span></div>
      <p class="ratings-note">Roster snapshot captured June 26, 2026. Team rank compares the average OVR of each team's five highest rated players. Tiers shown as verified come from a 2K26 team select screenshot; the game may have changed since then. Check your in-game tier and adjust it here for everyone in this session.</p>
      <div class="ratings-layout">
        <div class="ranking-list" aria-label="Team ranking by top five overall rating">
          <button v-for="(team, index) in rankedTeams" :key="team.name" :class="{ selected: selectedTeam[0] === team.name }" @click="browseTeam(team.name)"><b>{{ String(index + 1).padStart(2, '0') }}</b><span>{{ team.name }}<small>{{ tierLabel(team.name) }}</small></span><strong>{{ team.topFive.toFixed(1) }}</strong></button>
        </div>
        <div class="roster-card">
          <div class="roster-navigation"><button aria-label="Previous team" @click="browseStep(-1)">‹</button><label>Team <select :value="selectedTeam[0]" @change="browseTeam($event.target.value)"><option v-for="team in teams" :key="team[1]" :value="team[0]">{{ team[0] }}</option></select></label><button aria-label="Next team" @click="browseStep(1)">›</button></div>
          <div class="roster-hero"><div><span class="eyebrow">#{{ selectedRank }} OF 30 · TOP FIVE RANK</span><h3>{{ selectedTeam[0] }}</h3><span class="roster-abbr" :style="{ background: selectedTeam[2] }">{{ selectedTeam[1] }}</span></div><div class="roster-hero-stat"><strong>{{ rankedTeams[selectedRank - 1]?.topFive.toFixed(1) }}</strong><span>Top five avg OVR</span></div></div>
          <div class="tier-control"><div><strong>{{ tierLabel(selectedTeam[0]) }}</strong><small>{{ state.tierOverrides[selectedTeam[0]] ? 'Set by your session' : verifiedTiers[selectedTeam[0]] ? 'From 2K26 team select screenshot' : 'Not visible in the reference screenshot' }}</small></div><label>In-game tier <select :value="state.tierOverrides[selectedTeam[0]] || 0" :disabled="!state.id || !connected" @change="request({ type: 'set-tier', team: selectedTeam[0], tier: Number($event.target.value) })"><option value="0">{{ verifiedTiers[selectedTeam[0]] ? 'Use reference' : 'Unverified' }}</option><option v-for="tier in [1, 2, 3]" :key="tier" :value="tier">Tier {{ tier }}</option></select></label></div>
          <div class="roster-list-heading"><strong>Player rankings <small>({{ selectedRoster.players.length }})</small></strong><input v-model="rosterSearch" aria-label="Search players on selected team" placeholder="Find a player" /></div>
          <div class="roster-table-wrap"><table><thead><tr><th scope="col">#</th><th scope="col">Player</th><th scope="col">Position</th><th scope="col">OVR</th></tr></thead><tbody><tr v-for="p in filteredRoster" :key="p.name"><td>{{ selectedRoster.players.indexOf(p) + 1 }}</td><td>{{ p.name }}</td><td>{{ p.position }}</td><td><strong>{{ p.ovr }}</strong></td></tr></tbody></table><p v-if="!filteredRoster.length" class="ratings-note">No matching players on this team.</p></div>
          <a :href="selectedRoster.source" target="_blank" rel="noopener noreferrer" class="source-link">View this 2K26 roster source ↗</a>
        </div>
      </div>
      <p class="ratings-source">Ratings: <a :href="rosterData.source" target="_blank" rel="noopener noreferrer">2kAuction's archived NBA 2K26 Play Now Online roster</a>. Reference tiers: <a href="https://www.2kratings.com/teams/dallas-mavericks" target="_blank" rel="noopener noreferrer">2K Ratings game screenshot</a>. Historical and all-time teams use different rosters; these rankings cover the 30 current teams on the wheel.</p>
    </section>
  </main>
</template>

<style scoped>
.nba-page{--ink:#f5f5f2;--muted:#aab7ca;--edge:#324052;--accent:#ffad4b;color:var(--ink);background:#0d1726;text-align:left;border-radius:22px;min-height:78vh;padding:clamp(20px,4vw,48px);box-shadow:0 30px 70px #09102055;font-family:Inter,Arial,sans-serif}
.nba-page *{box-sizing:border-box}.page-heading{display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:28px}.eyebrow{font-size:.76rem;font-weight:800;letter-spacing:.16em;color:var(--accent)}h1{font-size:clamp(2rem,3.7vw,3.4rem);line-height:1.05;letter-spacing:-.045em;margin:11px 0 0}h2{margin:0;font-size:1.45rem;letter-spacing:-.035em}.session-actions{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.connection{font-size:.85rem;color:var(--muted);max-width:260px}.connection i{display:inline-block;width:9px;height:9px;background:#e8956d;border-radius:50%;margin-right:7px}.connection.online i{background:#64cfaa}button{font:inherit;cursor:pointer}.nba-page button:focus-visible,.nba-page input:focus-visible{outline:2px solid var(--accent);outline-offset:3px}.primary-button,.outline-button,.subtle-button{border-radius:9px;padding:11px 17px;font-weight:750}.primary-button{background:var(--accent);color:#172032;border:1px solid var(--accent)}.outline-button{background:#1b2b40;border:1px solid #4b6179;color:white}.subtle-button{background:transparent;border:1px solid var(--edge);color:var(--muted)}button:hover:not(:disabled){filter:brightness(1.13)}button:disabled{cursor:not-allowed}.entry{display:grid;grid-template-columns:200px 1fr;gap:45px;align-items:center;max-width:850px;min-height:390px;margin:auto}.entry-mark{width:195px;height:195px;border:14px solid #ea9e49;border-radius:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:4rem;font-weight:900;line-height:1}.entry-mark small{font-size:.8rem;letter-spacing:.18em}.entry p{font-size:1.04rem;line-height:1.6;color:var(--muted);max-width:510px}.entry-buttons{display:flex;gap:10px;flex-wrap:wrap}.join-form{margin-top:27px}.join-form label{display:block;margin-bottom:8px;color:var(--muted);font-size:.86rem}.join-form>div{display:flex;gap:8px}.nba-page input{background:#162439;border:1px solid #4b6179;border-radius:8px;color:white;padding:10px 12px;min-width:0;font:inherit}.join-form input{width:240px}.feedback{color:#ffc27d!important}.share-strip{background:#19283b;border:1px solid var(--edge);border-radius:13px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;gap:15px;margin-bottom:19px}.share-strip>div:first-child{display:flex;align-items:baseline;gap:16px}.share-strip strong{white-space:nowrap}.share-strip span{color:var(--muted);font-size:.84rem}.share-controls{display:flex;gap:7px;min-width:0}.share-controls input{width:min(27vw,350px);font-size:.78rem}.game-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(350px,.98fr);gap:19px}.wheel-panel,.player-card,.matchup{background:#172438;border:1px solid var(--edge);border-radius:18px}.wheel-panel{padding:23px;display:flex;flex-direction:column}.wheel-top{display:flex;justify-content:space-between;color:var(--muted);font-size:.85rem}.wheel-wrap{width:min(100%,510px);aspect-ratio:1;position:relative;margin:auto}.wheel{width:100%;height:100%;filter:drop-shadow(0 17px 22px #070e1bbd)}.wheel text{font-size:13px;font-weight:900;letter-spacing:.03em;paint-order:stroke;stroke:#14203244;stroke-width:2px}.pointer{position:absolute;z-index:2;top:-1%;left:50%;transform:translateX(-50%);width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-top:33px solid #fff;filter:drop-shadow(0 3px 2px #101a2a)}.spin-button{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border:3px solid #fff;border-radius:50%;width:21%;height:21%;background:#faaf50;color:#142034;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 5px 25px #111a2cd9}.spin-button span{font-weight:950;font-size:clamp(.9rem,2vw,1.42rem)}.spin-button small{font-size:clamp(.43rem,.72vw,.65rem);font-weight:800;letter-spacing:.04em}.spin-button:disabled{background:#a6abb0;color:#263445}.wheel-footer{border-top:1px solid var(--edge);padding-top:20px;display:flex;align-items:end;justify-content:space-between;gap:12px}.wheel-footer p{color:var(--muted);font-size:.84rem;max-width:170px;text-align:right;line-height:1.35;margin:0}.wheel-footer strong{color:var(--ink)}.turn-switch{display:flex;background:#0d192a;padding:4px;border-radius:9px;margin-top:8px;gap:4px}.turn-switch button{border:0;color:var(--muted);background:transparent;padding:8px 13px;border-radius:7px;font-size:.83rem;font-weight:700}.turn-switch button.selected{background:#33475d;color:#fff}.players-panel{display:flex;flex-direction:column;gap:17px}.player-card{padding:19px 20px 14px}.player-card.active{border-color:#db9959}.player-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:15px}.player-head h2{margin:5px 0 0}.edit-name{border:0;background:none;color:var(--muted);font-size:.9rem;vertical-align:middle}.pick-player{border:1px solid var(--edge);background:#26374d;color:white;border-radius:8px;padding:8px;font-size:.76rem;white-space:nowrap}.name-edit{display:flex;gap:6px;margin-top:5px}.name-edit input{width:135px;padding:5px 7px}.name-edit button{background:var(--accent);border:0;border-radius:6px}.pick-list{display:grid;gap:6px}.pick-row{display:flex;align-items:center;gap:10px;min-height:42px;background:#23344a;border-radius:7px;padding:5px 9px}.pick-row.empty{border:1px dashed #455870;background:transparent}.pick-row.forced{background:#433523}.pick-row.forced.empty{background:transparent;border-color:#78644d}.slot-num{font-size:.77rem;color:var(--accent);font-weight:850}.team-name{font-weight:690;flex:1;font-size:.88rem}.empty .team-name{color:#8697ad;font-weight:450}.team-name small{font-size:.62rem;letter-spacing:.08em;background:#fbb65f;color:#162438;padding:3px 5px;border-radius:4px;margin-left:5px}.choose-button{background:transparent;border:1px solid #6e849a;color:#c7d8ea;border-radius:5px;padding:5px 7px;font-size:.63rem;letter-spacing:.05em;font-weight:800}.choose-button.chosen{color:#192b30;background:#7fdbbf;border-color:#7fdbbf}.remove-button{background:transparent;border:0;color:#adc0d1;font-size:1.4rem;line-height:1;padding:2px 5px}.matchup{padding:18px 20px;background:#26384a}.matchup>div{display:flex;align-items:center;gap:10px;margin-top:10px;flex-wrap:wrap}.matchup strong{font-size:.98rem}.matchup div span{background:#faad50;color:#18283a;font-size:.7rem;font-weight:900;border-radius:4px;padding:4px 6px}.rule-note{margin:0 2px;color:var(--muted);font-size:.79rem;line-height:1.45}
@media(max-width:850px){.game-grid{grid-template-columns:1fr}.wheel-wrap{width:min(100%,470px)}.share-strip{align-items:flex-start;flex-direction:column}.share-controls{width:100%}.share-controls input{flex:1;width:auto}.page-heading{align-items:start}}@media(max-width:550px){.nba-page{padding:18px 13px;border-radius:12px;margin:-1rem}.page-heading{display:block}.session-actions{margin-top:12px}.entry{display:block;min-height:0;padding:16px 4px}.entry-mark{width:110px;height:110px;font-size:2.3rem;border-width:8px;margin-bottom:22px}.entry-mark small{font-size:.6rem}.wheel-panel{padding:12px}.wheel-footer{display:block}.wheel-footer p{text-align:left;max-width:none;margin-top:12px}.share-strip>div:first-child{display:block}.share-strip span{display:block;margin-top:4px}.player-card{padding:14px 11px}.pick-player{font-size:.68rem}.team-name{font-size:.79rem}.choose-button{font-size:.57rem;padding:5px}.pick-row{gap:6px}.spin-button span{font-size:1rem}.spin-button small{font-size:.5rem}.matchup strong{font-size:.85rem}}
.entry-mark{border:0;position:relative}
.entry-mark svg{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 12px 13px #060d17)}
.entry-mark span{position:relative;z-index:1;width:49%;height:49%;border-radius:50%;background:#132033;border:3px solid #fff;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:2.1rem}
.entry-mark span small{font-size:.55rem}
.matchup .keep-option{margin-top:18px}
.keep-option{display:flex;align-items:center;gap:9px;color:#d5e0eb;font-size:.84rem;line-height:1.4;cursor:pointer}
.keep-option input{width:17px;height:17px;flex:none;accent-color:#ffad4b;cursor:pointer}
.keep-option input:disabled{cursor:not-allowed}
.record-button{margin-top:16px;width:100%}
.record-button:disabled{opacity:.48}
.record-help{color:var(--muted);font-size:.76rem;margin:8px 0 0;line-height:1.35}
.participant-count{color:#d8f1e6;background:#1e493c;border:1px solid #4a9d7a;border-radius:999px;padding:7px 11px;font-size:.8rem;font-weight:750;white-space:nowrap}
.era-field,.history-era{display:flex;align-items:center;gap:10px;color:#d5e0eb;font-size:.84rem;font-weight:700}.era-field{margin-top:16px}.history-era{grid-column:2;grid-row:2;font-size:.78rem}.era-field select,.history-era select{background:#162439;border:1px solid #65788c;border-radius:7px;color:#fff;padding:7px 9px;font:inherit;min-width:0}.era-field select:disabled,.history-era select:disabled{opacity:.55}.winner-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;grid-column:2;grid-row:3;color:var(--muted);font-size:.8rem}.winner-row>span{font-weight:750;margin-right:4px}.winner-row small{font-size:.72rem}.winner-button{border:1px solid #65788c;background:#23344a;color:#d5e0eb;border-radius:7px;padding:7px 10px;font-weight:700}.winner-button.selected{background:#356a57;color:#fff;border-color:#75cea5}
.era-field select:focus-visible,.history-era select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.history-panel{margin-top:19px;background:#172438;border:1px solid var(--edge);border-radius:18px;padding:22px}
.history-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:15px}
.history-heading span,.history-empty{color:var(--muted);font-size:.84rem}
.history-empty{margin:0}
.history-list{display:grid;gap:9px}
.history-game{display:grid;grid-template-columns:125px minmax(0,1fr) 180px;align-items:center;gap:16px;padding:14px 16px;background:#223349;border-radius:10px}
.history-number{display:flex;flex-direction:column;gap:3px;grid-column:1;grid-row:1 / 4}
.history-number strong{color:var(--accent);font-size:.77rem;letter-spacing:.1em}
.history-number small{color:var(--muted);font-size:.72rem}
.history-match{display:flex;align-items:center;gap:12px;min-width:0;grid-column:2;grid-row:1}
.history-match div{display:flex;flex-direction:column;min-width:0}
.history-match small{color:var(--muted);font-size:.72rem}
.history-match strong{font-size:.94rem;overflow-wrap:anywhere}
.history-match>span{color:var(--accent);font-weight:900;font-size:.73rem}
.history-keep{font-size:.77rem;justify-self:end;grid-column:3;grid-row:1 / 4}
@media(max-width:700px){.history-game{grid-template-columns:1fr;gap:9px}.history-number{flex-direction:row;align-items:center;gap:10px}.history-game>*{grid-column:1;grid-row:auto}.history-keep{justify-self:start}}
@media(max-width:550px){.entry-mark span{font-size:1.2rem;border-width:2px}.entry-mark span small{font-size:.4rem}}
.tier-filter{display:flex;align-items:center;gap:5px;margin-top:13px;flex-wrap:wrap}.tier-filter>span{color:var(--muted);font-size:.72rem;font-weight:750;margin-right:4px}.tier-filter button{border:1px solid #50657c;background:#101d2e;color:#b8c7d8;border-radius:999px;padding:6px 11px;font-size:.72rem;font-weight:800}.tier-filter button.selected{background:var(--accent);border-color:var(--accent);color:#172032}.tier-filter button:disabled{opacity:.55}
@media(prefers-reduced-motion:reduce){.wheel{filter:none}}
.team-link{border:0;background:none;color:inherit;padding:0;text-align:left;text-decoration:underline;text-decoration-color:#7894a8;text-underline-offset:3px;font-weight:inherit}.team-name em{display:block;color:#bcd0dc;font-size:.7rem;font-style:normal;font-weight:500;margin-top:2px}.wheel-footer a{color:#ffbf73}.ratings-panel{margin-top:19px;background:#172438;border:1px solid var(--edge);border-radius:18px;padding:clamp(17px,2.5vw,27px);scroll-margin-top:20px}.ratings-heading{display:flex;justify-content:space-between;align-items:end;gap:15px}.ratings-heading h2{font-size:1.8rem;margin-top:6px}.ratings-heading>span{color:var(--muted);font-size:.82rem}.ratings-note,.ratings-source{color:var(--muted);font-size:.79rem;line-height:1.55}.ratings-note{max-width:900px;margin:11px 0 19px}.ratings-source{margin:17px 0 0}.ratings-panel a{color:#ffbf73}.ratings-layout{display:grid;grid-template-columns:minmax(205px,.55fr) minmax(0,1.45fr);gap:15px;align-items:start}.ranking-list{max-height:690px;overflow-y:auto;border:1px solid var(--edge);border-radius:11px;background:#101d2e}.ranking-list button{width:100%;display:flex;align-items:center;gap:10px;text-align:left;color:#eaf2fa;border:0;border-bottom:1px solid #2a3b50;background:transparent;padding:9px 11px}.ranking-list button.selected{background:#324459;box-shadow:inset 3px 0 #ffad4b}.ranking-list b{font-size:.75rem;color:#ffad4b}.ranking-list span{flex:1;font-size:.8rem;font-weight:700}.ranking-list small{display:block;font-weight:400;color:#a9bbce;margin-top:2px}.ranking-list strong{font-size:.85rem}.roster-card{border:1px solid var(--edge);border-radius:11px;background:#203149;overflow:hidden}.roster-navigation{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#142338}.roster-navigation button{border:1px solid #5b7088;background:#263d56;color:white;border-radius:6px;font-size:1.5rem;line-height:1;padding:3px 13px}.roster-navigation label{display:flex;gap:10px;align-items:center;color:var(--muted);font-size:.78rem}.roster-navigation select,.tier-control select{background:#1b2e45;color:white;border:1px solid #72849b;border-radius:6px;padding:7px;font:inherit;max-width:230px}.roster-hero{display:flex;justify-content:space-between;gap:12px;padding:21px;align-items:center}.roster-hero h3{margin:6px 0 10px;font-size:clamp(1.4rem,2.5vw,2rem);letter-spacing:-.035em}.roster-abbr{display:inline-block;padding:5px 8px;border-radius:5px;font-size:.75rem;font-weight:900;color:white}.roster-hero-stat{text-align:right;white-space:nowrap}.roster-hero-stat strong{display:block;color:#ffbd6c;font-size:2.1rem}.roster-hero-stat span{font-size:.72rem;color:var(--muted)}.tier-control{display:flex;justify-content:space-between;align-items:center;gap:12px;background:#304259;padding:12px 20px}.tier-control strong,.tier-control small{display:block}.tier-control small{color:#b5c5d7;font-size:.71rem;margin-top:3px}.tier-control label{display:flex;align-items:center;gap:8px;color:#dce8f3;font-size:.75rem;white-space:nowrap}.tier-control select:disabled{opacity:.6}.roster-list-heading{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:18px 20px 9px}.roster-list-heading small{color:var(--muted);font-weight:400}.roster-list-heading input{width:min(45%,210px);font-size:.79rem;padding:7px 9px}.roster-table-wrap{max-height:500px;overflow:auto;margin:0 20px}.roster-table-wrap table{width:100%;border-collapse:collapse;font-size:.85rem}.roster-table-wrap th{text-align:left;color:#a8bcd1;font-size:.68rem;letter-spacing:.07em;text-transform:uppercase;position:sticky;top:0;background:#203149}.roster-table-wrap th,.roster-table-wrap td{padding:9px 7px;border-bottom:1px solid #344760}.roster-table-wrap td:first-child{color:#ffbf73;font-weight:700}.roster-table-wrap td:last-child strong{background:#426d65;padding:4px 7px;border-radius:5px}.source-link{display:inline-block;margin:14px 20px 20px;font-size:.78rem}@media(max-width:750px){.ratings-layout{grid-template-columns:1fr}.ranking-list{max-height:215px}.ratings-heading{align-items:start;flex-direction:column}.tier-control{flex-wrap:wrap}}@media(max-width:450px){.roster-navigation select{max-width:190px}.roster-hero{padding:14px}.roster-hero-stat strong{font-size:1.6rem}.roster-list-heading{padding:12px}.roster-table-wrap{margin:0 10px}.tier-control{padding:11px}}
</style>
