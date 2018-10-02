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

        <div class="input-box">
          <form>
            <div class="input-box-row">
              <label>用户名</label>
              <input v-model="data.userAccount" type="text" placeholder="请输入登陆账号">
            </div>
            <div class="input-box-row">
              <label>密码</label>
              <input v-model="data.userPassword" type="password" placeholder="请输入登陆密码">
            </div>
            <div class="input-box-row">
              <label>确认密码</label>
              <input v-model="data.userPassword2" type="password" placeholder="请再次输入密码">
            </div>
            <div class="input-box-row">
              <label>姓名</label>
              <input v-model="data.userName" type="text" placeholder="请输入真实姓名">
            </div>
            <div class="input-box-row">
              <label>电话</label>
              <input v-model="data.userPhone" type="text" placeholder="请填写电话">
            </div>
            <button @click="submit">提交</button>
          </form>
        </div>
      </div>
    </div>
    <foot-bar />
    <v-dialog/>
  </div>
</template>

<script>
import { regist } from '@/api/index'
import { FootBar } from './layout/components'
export default {
  name: 'Register',
  components: {
    FootBar
  },
  data() {
    return {
      data: {
        userAccount: null,
        userName: null,
        userPassword: null,
        userPassword2: null,
        userPhone: null
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
        if (item === 'userPhone' && !this.data[item].match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
          this.$modal.show('dialog', {
            title: '错误!',
            text: '手机号格式不正确！',
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
      if (this.data.userPassword2 !== this.data.userPassword) {
        this.$modal.show('dialog', {
          title: '错误!',
          text: '两次密码输入不一致！',
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
      if (this.data.userPassword2.length < 6 || this.data.userPassword2.length > 24) {
        this.$modal.show('dialog', {
          title: '错误!',
          text: '密码长度请设置6-12位！',
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
      regist(this.data).then(res => {
        this.$modal.show('dialog', {
          title: '注册成功!',
          text: '即将前往登陆页面',
          buttons: [
            {
              title: '确定',
              handler: () => {
                this.$router.push('/login')
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
  .middle-img {
    width: 100%;
    display: block;
  }
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
    .input-box {
      margin-top: 150px;
      padding-top: 70px;
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
