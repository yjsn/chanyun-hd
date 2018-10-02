<template>
  <div class="other-container">
    <div class="other-main">
      <img src="@/assets/swiper1.jpg" alt="" class="middle-img">
      <div class="other-background">
        <ul class="gotoform-btn-list">
          <li @click="$router.push('/incenseBurning')">烧香祈福</li>
          <li>自我忏悔</li>
          <li @click="$router.push('/buddhistLamp')">供奉长生灯</li>
          <li @click="$router.push('/buddhistLamp')">供奉平安灯</li>
          <li>许愿</li>
          <li>抄经</li>
          <li>修心</li>
          <li>捐助</li>
        </ul>
        <div class="other-content">
          <div class="venerate-buddha-box">
            <ul class="venerate-buddha-list">
              <li v-for="item in data" :key="item.id">
                <img src="@/assets/logo.png" alt="">
                <div>
                  <p>
                    <span>{{ item.customerName }}</span>
                    <span>{{ item.completionTime }}</span>
                    <span>{{ item.templeName }}</span>
                  </p>
                  <p>{{ item.meritsName }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <v-dialog/>
  </div>
</template>

<script>
import { getMeritsListForProductPage } from '@/api/index'
export default {
  name: 'VenerateBuddhaHome',
  data() {
    return {
      data: []
    }
  },
  created() {
    getMeritsListForProductPage().then(res => {
      this.data = res.data.slice(0, 4)
    })
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .middle-img {
    width: 100%;
    display: block;
  }
  .other-background {
    background: url("../../assets/otherBG.png");
    overflow: hidden;
  }
  .gotoform-btn-list {
    display: flex;
    justify-content: space-around;
    width: 1180px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    margin: 35px 0 25px 0;
    font-size: 18px;
    border: 1px solid #4A1E18;
    color: #4A1E18;
    line-height: 40px;
    li {
      cursor: pointer;
    }
  }
  .other-content {
    /*margin-top: 100px;*/
    width: 1260px;
    height: 744px;
    padding: 0 30px;
    padding-bottom: 55px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: url("../../assets/rankingListBG1.png") no-repeat;
    background-position-x: 40px;
    overflow: hidden;
    .venerate-buddha-box {
      width: 943px;
      height: 486px;
      background: url("../../assets/juanzhou.png") no-repeat;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      padding: 30px 100px;
      .venerate-buddha-list {
        li {
          font-size: 12px;
          color: #4A1E18;
          border-bottom: 1px solid #4A1E18;
          height: 100px;
          img {
            width: 50px;
            height: 50px;
            position: relative;
            left: -40px;
            float: left;
            margin-top: 20px;
          }
          div {
            position: relative;
            left: -30px;
            overflow: hidden;
            p:first-of-type {
              margin-top: 15px;
              line-height: 40px;
            }
            p:last-of-type {
              display: inline-block;
              white-space: nowrap;
              width: 100%;
              overflow: hidden;
              text-overflow:ellipsis;
            }
          }
        }
        li:after {
          display:block; content:"clear"; height:0; clear:both; overflow:hidden; visibility:hidden;
        }
      }
    }
  }
</style>
