<template>
  <div class="main-container">
    <div class="user-img">
      <img :src="userImg">
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlessingShare',
  data() {
    return {
      userImg: null
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .main-container {
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 667px;
    background-origin: content-box;
    background: #4a1e18 url("../../assets/chan.png") no-repeat fixed center;
    font-size: 50px;
    color: #facd88;
    padding-top: 70px;
  }
  .user-img {
    width: 40%;
    height: 100px;
  }
</style>
