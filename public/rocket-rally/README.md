# Rocket Rally · Playtest 21

Play at https://nathandickinson32.github.io/rocket-rally/.

This directory contains the standalone browser build of Rocket Rally v0.21.0: two cars, 1–4 human players with AI filling empty roles, four selectable courses, three AI difficulty levels, team-owned construction and an aerial race replay with Skip Replay / Escape.

Level 1 · Bedroom keeps the original route. Level 2 · Elevated Circuit adds more turns, longer construction sections and a 24m finish. Level 3 · Jump Crossing adds a required airborne checkpoint: ground jump through the yellow gate and land beyond it. Level 4 · Double Jump requires two double-jump crossings with raised gates and extended landings. The separate double-jump exercise starts at a prepared approach for quick retries. Hosts select the course before players ready up; course changes clear readiness.

Use a desktop browser and keyboard. Create a room, share its invite, choose roles and ready up. The host starts the race. Hosting and joining require internet access for peer discovery; keep the host tab open. Cars, building and checkpoints run in the browser.

The existing Pages workflow copies this directory from `public/rocket-rally/` to `dist/rocket-rally/` during the portfolio build. The game includes its scripts and styles in `index.html`, so it works at this subpath without changes to the portfolio router. Third-party library licenses are included alongside it.

To update the deployed game, replace this standalone build with a freshly packaged release and keep the library license files. Commit to the Pages repository's main branch and confirm the existing deployment workflow succeeds. Every player should refresh after an update before creating a new room.

Builders press M to switch Guided / Free placement. F in Free mode places the aimed piece, with normal materials and 12m reach. AI still follows the suggested route. Double-jump training is available under Learn & practice. Fully open-route AI is the next phase in the development plan.
