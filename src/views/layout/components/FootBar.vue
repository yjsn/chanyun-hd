<template>
  <div class="footBar">
    <div class="footBar-background">
      <div class="footBar-container">
        <div class="footBar-left">
          <img src="@/assets/logo.png" alt="">
          <ul>
            <li>地址：上海市浦东新区惠南镇城西路118号</li>
            <li>邮箱：xinpiaoyuan@163.com</li>
            <li>电话：</li>
            <li>邮编：210000</li>
          </ul>
        </div>
        <div class="footBar-right">
          <img src="@/assets/weixin.jpg" alt="">
          <ul>
            <li>扫一扫关注</li>
            <li>上海鑫票源商务咨询有限公司</li>
            <li>沪ICP备案：18021097号-1</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootBar'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.footBar {
  background: #563f1e;
  height: 164px;
  width: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  font-weight: 300;
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
    padding: 31px 150px 36px 150px;
    color: white;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    img {
      width: 97px;
      height: 97px;
      float: left;
    }
    ul {
      float: left;
      margin-left: 15px;
      li {
        margin: 6px 0;
      }
    }
    .footBar-right {
      ul {
        margin-top: 10px;
        li:first-of-type {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
