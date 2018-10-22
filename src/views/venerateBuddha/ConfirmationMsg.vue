<template>
  <div class="other-container">
    <div class="other-main">
      <img v-if="!image" src="@/assets/swiper1.jpg" alt="" class="middle-img">
      <div v-else class="qc-img">
        <img :src="image" alt="">
      </div>
      <div class="other-background">
        <div class="other-content">
          <div class="text-content">
            <h1>确认信息</h1>
            <p><span>所属项目：</span><span>{{ meritsType }}</span></p>
            <p><span>祈愿人：</span><span>{{ customerName }}</span></p>
            <p><span>功德：</span><span>{{ meritsAccount }}</span></p>
            <p><span>支付金额：</span><span>{{ meritsAccount }}</span></p>
            <p><span>支付方式：</span><span class="pay-text"><img src="@/assets/check.png" alt="">微信支付</span></p>
            <div v-if="hadQc" class="button-css" @click="submit">提交</div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog/>
  </div>
</template>

<script>
import { createOrder, meritsIsSuccess } from '@/api/index'
export default {
  name: 'ConfirmationMsg',
  data() {
    return {
      hadQc: true,
      image: null,
      time: null
    }
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.time)
    this.time = null
    if (!this.time) {
      next()
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
  methods: {
    submit() {
      createOrder({ payType: 'weixin', id: this.$route.query.id }).then(res => {
        this.hadQc = false
        this.image = 'data:image/png;base64,' + res.data.payUrl
        window.scrollTo(0, 0)
        // let time = null
        this.time = setInterval(() => {
          meritsIsSuccess({ meritsNumber: res.data.merits.meritsNumber }).then(res => {
            clearInterval(this.time)
            this.$modal.show('dialog', {
              title: '支付成功!',
              text: '恭喜您支付成功，行善积德善莫大焉',
              buttons: [
                {
                  title: '确定',
                  handler: () => {
                    this.$router.push('/payOk')
                    this.$modal.hide('dialog')
                  }
                }
              ]
            })
          })
        }, 2000)
      })
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
    background: url("../../assets/background1.png");
  }
  .other-content {
    width: 1260px;
    height: 1000px;
    padding: 0 30px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    .text-content {
      display: inline-block;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 500px;
      margin-top: 200px;
      color: #2D2D2D;
      h1 {
        font-size: 32px;
        text-align: center;
        margin-bottom: 80px;
      }
      p {
        margin: 20px 0;
        font-size: 18px;
        overflow: hidden;
        span:first-of-type {
          display: inline-block;
          width: 100px;
          text-align: right;
          margin-right: 15px;
          float: left;
        }
        .pay-text {
          display: flex;
          align-items: center;
          float: left;
          img {
            margin-right: 5px;
          }
        }
      }
      .button-css {
        width: 400px;
        height: 45px;
        color: #FFFFFF;
        font-size: 18px;
        background: #4A1E18;
        border-radius:5px;
        outline: none;
        margin-bottom: 57px;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        margin-top: 50px;
        line-height: 45px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .qc-img {
    width: 100%;
    /*display: block;*/
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff8ec;
    img {
      width: 466px;
      height: 466px;
    }
  }
</style>
