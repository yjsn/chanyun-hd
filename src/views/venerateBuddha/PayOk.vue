<template>
  <div class="other-container">
    <div class="other-main">
      <!--<img src="@/assets/swiper1.jpg" alt="" class="middle-img">-->
      <div class="pay-ok">
        <p>
          <img src="@/assets/payOk.png" alt="">
          <span>支付成功</span>
        </p>
        <p>5秒后将跳转到首页</p>
      </div>
      <div class="other-background">
        <div class="other-content">
          <div class="pay-ok-btn">
            <button @click="gotoHome">返回首页</button>
            <button>查看功德簿</button>
          </div>
        </div>
      </div>
    </div>
    <v-dialog/>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationMsg',
  data() {
    return {
      timer: null
    }
  },
  computed: {
    meritsType() {
      return this.$route.query.meritsType
    },
    meritsTypeName() {
      const name = this.$route.query.meritsType
      if (name === '1') {
        return '请香'
      } else if (name === '2') {
        return '供佛灯'
      } else if (name === '3') {
        return '许愿'
      } else if (name === '4') {
        return '忏悔'
      }
    },
    customerName() {
      return this.$route.query.customerName
    },
    meritsAccount() {
      return this.$route.query.meritsAccount
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.$router.push('/')
    }, 5000)
  },
  methods: {
    gotoHome() {
      clearTimeout(this.timer)
      this.$router.push('/')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .middle-img {
    width: 100%;
    display: block;
  }
  .other-background {
    background: url("../../assets/payokbg.png") no-repeat;
  }
  .other-content {
    width: 1260px;
    height: 450px;
    padding: 0 30px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    margin-top: 100px;
  }
  .pay-ok {
    background: #fff8ec;
    text-align: center;
    height: 180px;
    overflow: hidden;
    p:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      span {
        font-size: 32px;
        color: #A31501;
        margin-left: 20px;
      }
    }
    p:last-of-type {
      color: #2D2D2D;
      font-size: 18px;
      margin-top: 30px;
    }
  }
  .pay-ok-btn {
    margin-top: 100px;
    text-align: center;
    button {
      width: 296px;
      height: 45px;
      font-size: 18px;
      border-radius:5px;
      outline: none;
      margin: 0 50px;
    }
    button:first-of-type {
      border:2px solid rgba(74,30,24,1);
      color: #4A1E18;
      background: #f8e3bd;
    }
    button:last-of-type {
      border:2px solid rgba(74,30,24,1);
      background:rgba(74,30,24,1);
      color: white;
    }
  }
</style>
