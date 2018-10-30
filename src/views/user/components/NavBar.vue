<template>
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
      <div v-if="!didLogin" class="navBar-login">
        <router-link to="/login" tag="span">登陆</router-link>
        <span>|</span>
        <router-link to="/register" tag="span">注册</router-link>
      </div>
      <div v-else class="navBar-login">
        <span>{{ userName }}</span><span class="logout" @click="logout">退出登陆</span>
        <span>|</span>
        <span>{{ userLevel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      itemHoverIndex: null,
      itemHoverIndexTwo: null,
      itemChooseIndex: null,
      itemChooseIndexTwo: null
    }
  },
  computed: {
    didLogin() {
      return this.$store.state.user.token
    },
    userName() {
      return this.$store.state.user.name
    },
    userLevel() {
      return this.$store.state.user.level
    }
  },
  created() {
  },
  methods: {
    logout() {
      console.log(111)
      this.$modal.show('dialog', {
        title: '请确认!',
        text: '是否要退出登陆！',
        buttons: [
          {
            title: '取消',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: '确定',
            handler: () => {
              this.$modal.hide('dialog')
              this.$store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
              })
            }
          }
        ]
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .logout {
    border: 1px solid #A31501;
    padding: 2px;
    margin-left: 10px;
    cursor: pointer;
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
      width: 500px;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #A31501;
      .navBar-login {
        position: relative;
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
