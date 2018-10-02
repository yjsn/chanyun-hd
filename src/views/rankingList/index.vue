<template>
  <div class="other-container">
    <div class="other-main">
      <div class="other-content">
        <p class="rankingList-title">
          <span>榜首：{{ data.length&&data[0].meritsAccount }}</span>
          <span>名称：{{ data.length&&data[0].userName }}</span>
          <span>等级：罗汉</span>
        </p>
        <div class="rankingList-box">
          <div class="dashboard-title">
            <img src="@/assets/cloudLeft.png" alt="">
            <span>功德榜</span>
            <img src="@/assets/cloudRight.png" alt="">
            <span class="line" />
          </div>
          <ul class="first-three">
            <li>
              <img src="@/assets/firstBlood.png" alt="">
              <span>{{ data.length&&data[0].userName }}</span>
            </li>
            <li>
              <img src="@/assets/firstBlood.png" alt="">
              <span>{{ data.length&&data[1].userName }}</span>
            </li>
            <li>
              <img src="@/assets/firstBlood.png" alt="">
              <span>{{ data.length&&data[2].userName }}</span>
            </li>
          </ul>
          <ul class="other-names">
            <li v-for="item in data.slice(3,data.length)" :key="item.id">
              {{ item.userName }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addrankingList } from '@/api/index'
export default {
  name: 'RankingList',
  data() {
    return {
      data: []
    }
  },
  created() {
    addrankingList().then(res => {
      this.data = res.data.slice(0, 17)
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .other-content {
    width: 1260px;
    height: 744px;
    padding: 0 30px;
    padding-bottom: 55px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: url("../../assets/rankingListBG1.png") no-repeat;
    background-position: (40px 30px);
    overflow: hidden;
    .rankingList-title {
      width: 600px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-around;
      margin-top: 130px;
      font-size: 14px;
      color:rgba(163,21,1,1);
    }
    .rankingList-box {
      width: 943px;
      height: 486px;
      background: url("../../assets/juanzhou.png") no-repeat;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 190px;
    }
    .dashboard-title {
      margin-top: 50px;
      text-align: center;
      margin-bottom: 20px;
      span {
        color: #A31501;
        font-size: 20px;
        margin: 0 40px;
      }
      .line {
        margin-top: 15px;
        width: 100%;
        height: 1px;
        display: block;
        background: -webkit-linear-gradient(rgba(0,0,0,0), #A31501 , rgba(0,0,0,0)); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(rgba(0,0,0,0), #A31501 , rgba(0,0,0,0)); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(rgba(0,0,0,0), #A31501 , rgba(0,0,0,0)); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, rgba(0,0,0,0) , #A31501, rgba(0,0,0,0));
      }
    };
    .first-three {
      display: flex;
      justify-content: space-around;
      width: 800px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      color: #4A1E18;
      li {
        display: flex;
        align-content: center;
        img {
          width: 50px;
          height: 50px;
        }
        span {
          width: 20px;
          font-size: 16px;
          line-height: 30px;
          margin-left: 15px;
        }
      }
    }
    .other-names {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      width: 800px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      color: #4A1E18;
      li {
        width: 20px;
        font-size: 16px;
        line-height: 30px;
        margin-left: 15px;
      }
    }
  }
</style>
