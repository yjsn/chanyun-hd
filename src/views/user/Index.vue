<template>
  <div class="other-container">
    <div class="other-main">
      <div class="other-content">
        <NavBar />
        <div class="user-center">
          <Left />
          <AppMain />
        </div>
      </div>
    </div>
    <FootBar />
  </div>
</template>

<script>
import { AppMain, NavBar, FootBar } from './components'
import Left from './components/Left'

export default {
  name: 'Index',
  components: {
    Left,
    AppMain,
    NavBar,
    FootBar
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .other-main {
    background: url("../../assets/registerBG.png") no-repeat;
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
  .user-center {
    width: 1200px;
    height: 100%;
    background-color: #FFFFFF;
    border-radius:3px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .user-center:after {
    content:"";clear:both;display:block;
  }
</style>
