<template>
  <div>landingpage</div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'BlessingLandingPage',
  data() {
    return {
      weixinAuthorizeUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
      appId: '',
      code: null
    }
  },
  created() {
    this.weixinAuthorize()
  },
  methods: {
    weixinAuthorize() {
      this.code = this.$route.query.code

    }
  }
}
</script>

<style scoped>

</style>
