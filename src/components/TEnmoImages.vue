<template>
  <div class="tenmoImages">

<div class="divImg HomePage"></div>
<div class="divImg RegLog"></div>
<div class="divImg SendMoney"></div>
<div class="divImg Transfer"></div>


</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.HomePage{
  background-image: url('../assets/images/TEnmoHomePage.png');
  object-fit: cover;
  width: 250px;
  
  height: 250px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content:center;
  margin-bottom: 5px;
}
.RegLog{
  background-image: url('../assets/images/TEnmoRegLog.png');
  object-fit: cover;
  width: 350px;
  
  height: 275px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

}
.SendMoney{
  background-image: url('../assets/images/TEnmoSendMoney.png');
  object-fit: cover;
  width: 350px;
  
  height: 440px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;

}
.Transfer{
  background-image: url('../assets/images/TEnmoTransfers.png');
  object-fit: cover;
  width: 300px;
  
  height: 270px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 5px;

}
.tenmoImages {
  display: inline-block;
  justify-content: space-between;
  align-items: center;
}
.divImg{
  display: flex;
 
}
</style>