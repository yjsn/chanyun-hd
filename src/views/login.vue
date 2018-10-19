<template>
  <div class="other-container">
    <div class="other-main">
      <div class="other-content">
        <div class="navBar-first-line">
          <div class="navBar-left">
            <span @click="$router.push('/')">首页</span>
            <span>|</span>
            <router-link to="/templeInside" tag="span">寺庙入驻</router-link>
          </div>
          <div class="navBar-right">
            <div class="navBar-search">
              <img src="@/assets/searchBar.png" alt="">
              <input type="text" placeholder="搜索">
              <img src="@/assets/searchIcon.png" alt="">
            </div>
            <div class="navBar-login">
              <router-link to="/login" tag="span">登陆</router-link>
              <span>|</span>
              <router-link to="/register" tag="span">注册</router-link>
            </div>
          </div>
        </div>
        <img src="@/assets/tree.png" alt="" class="tree-img">
        <img src="@/assets/chan2.png" alt="" class="chan-img">
        <div class="login-box">
          <p>施主登陆</p>
          <div class="login-input">
            <img src="@/assets/input.png" alt="">
            <img src="@/assets/user.png" alt="">
            <span class="line" />
            <input v-model="data.userAccount" type="text" placeholder="请输入账号">
          </div>
          <div class="login-input">
            <img src="@/assets/input.png" alt="">
            <img src="@/assets/password.png" alt="">
            <span class="line" />
            <input v-model="data.userPassword" type="password" placeholder="请输入密码">
          </div>
          <div class="button-css" @click="submit">提交</div>
          <p class="bottom-box">
            <span>忘记密码</span>
            <span @click="$router.push('/register')">立即注册</span>
          </p>
        </div>
      </div>
    </div>
    <foot-bar />
    <v-dialog/>
  </div>
</template>

<script>
import { FootBar } from './layout/components'
export default {
  name: 'Login',
  components: {
    FootBar
  },
  data() {
    return {
      data: {
        userAccount: null,
        userPassword: null
      }
    }
  },
  methods: {
    submit() {
      for (const item in this.data) {
        if (!this.data[item]) {
          this.$modal.show('dialog', {
            title: '错误!',
            text: '请完整输入',
            buttons: [
              {
                title: '确定',
                handler: () => {
                  this.$modal.hide('dialog')
                }
              }
            ]
          })
          return
        }
      }
      this.$store.dispatch('Login', this.data).then(() => {
        this.$router.push('/')
      }).catch(() => {
        this.$modal.show('dialog', {
          title: '网络错误!',
          text: '请检查网络',
          buttons: [
            {
              title: '确定',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .other-main {
    background: url("../assets/registerBG.png") no-repeat;
  }
  .other-content {
    width: 1260px;
    min-height: calc(100vh - 164px);
    padding: 0 30px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
  .tree-img {
    position: absolute;
    left: 200px;
    top: 384px;
  }
  .chan-img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .login-box {
    width: 480px;
    height: 400px;
    background: #4A1E18;
    position: absolute;
    right: 0;
    top: 350px;
    border-radius:5px;
    p {
      color: white;
      text-align: center;
      margin: 44px 0;
    }
    .login-input {
      position: relative;
      img:first-of-type {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
      img:last-of-type {
        position: absolute;
        left: 60px;
        top: 10px;
      }
      span {
        width: 1px;
        height: 26px;
        background: #B6B6B6;
        display: inline-block;
        position: absolute;
        left: 90px;
        top: 11px;
      }
      input {
        /*background-color: #f8e3bd;*/
        position: absolute;
        top: 6px;
        width: 300px;
        height: 34px;
        border: 0;
        margin: 0;
        padding: 0;
        left: 110px;
        background-color: rgba(0,0,0,0);
        outline: none;
        color: #A31501;
      }
      input::-webkit-input-placeholder {
        color: #A31501;
        opacity: .7;
      }
    }
    .login-input:first-of-type {
      margin-bottom: 20px;
    }
    .button-css {
      width: 417px;
      height: 42px;
      color: #4A1E18;
      font-size: 18px;
      background: #F8E3BE;
      border-radius:21px;
      outline: none;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 30px;
      text-align: center;
      line-height: 42px;
    }
    .bottom-box {
      font-size: 14px;
      span {
        float: right;
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }

  .navBar {
    height: 254px;
    background-color: #f8e3bd;
    &-background {
      max-width: 1440px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      overflow: hidden;
    }
    &-container {
      width: 1260px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      overflow: hidden;
      padding: 0 30px;
    }
    &-first-line {
      /*margin: 0 30px;*/
      margin-top: 37px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-left {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #A31501;
      font-size: 14px;
      span:nth-of-type(2n-1) {
        cursor: pointer;
      }
    }
    &-right {
      display: flex;
      width: 300px;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #A31501;
      .navBar-login {
        span:nth-of-type(2n-1) {
          cursor: pointer;
        }
      }
      .navBar-search {
        position: relative;
        input {
          /*background-color: #f8e3bd;*/
          position: absolute;
          top: 0;
          width: 160px;
          height: 34px;
          border: 0;
          margin: 0;
          padding: 0;
          left: 10px;
          background-color: rgba(0,0,0,0);
          outline: none;
          color: #A31501;
        }
        input::-webkit-input-placeholder {
          color: #A31501;
          opacity: .7;
        }
        img:last-of-type {
          position: absolute;
          right: 13px;
          top: 9px;
          cursor: pointer;
        }
      }
    }
    &-main {
      /*margin: 0 30px;*/
      height: 149px;
      margin-top: 33px;
      display: flex;
      .line {
        width: 1px;
        height: 89px;
        display: block;
        background: -webkit-linear-gradient(#f8e3bd, rgba(0,0,0,.2), #f8e3bd); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#f8e3bd, rgba(0,0,0,.2), #f8e3bd); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#f8e3bd, rgba(0,0,0,.2), #f8e3bd); /* Firefox 3.6 - 15 */
        background: linear-gradient(#f8e3bd, rgba(0,0,0,.2), #f8e3bd); /* 标准的语法 */
      }
      .itemHover {
        color: white !important;
      }
      .itemChoose {
        color: white !important;
      }
      .ul-first {
        margin-left: 33px;
        width: 280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: #A31501;
        li {
          width: 30px;
          height: 90px;
          text-align: center;
          line-height: 22px;
          position: relative;
          cursor: pointer;
          img {
            position: absolute;
            top: -7px;
            left: -3px;
            z-index: -1;
          }
        }
      }
      .ul-second {
        margin-left: 54px;
        width: 480px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: #A31501;
        li {
          width: 120px;
          /*height: 90px;*/
          text-align: center;
          line-height: 22px;
          position: relative;
          cursor: pointer;
          img {
            position: absolute;
            top: -16px;
            left: 7px;
            z-index: -1;
          }
        }
      }
    }
  }
</style>
