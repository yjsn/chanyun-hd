<template>
  <div class="dashboard-container">
    <swiper :swiperdata="swiperData" />
    <div class="dashboard-main">
      <div class="dashboard-content">

        <div class="dashboard-title">
          <img src="@/assets/cloudLeft.png" alt="">
          <span>寺庙僧人</span>
          <img src="@/assets/cloudRight.png" alt="">
          <span class="line" />
        </div>
        <div class="dashboard-list">
          <div v-for="item in monks" :key="item.id" class="dashboard-list-item">
            <img :src="item.templeMonkCoverImg + '/base'" alt="">
            <p>{{ item.templeMonkName }}</p>
          </div>
        </div>

        <div class="dashboard-title">
          <img src="@/assets/cloudLeft.png" alt="">
          <span>寺庙通告</span>
          <img src="@/assets/cloudRight.png" alt="">
          <span class="line" />
        </div>
        <div class="dashboard-textarea">
          <router-link v-for="item in templeHomeNews" :key="item.id" :to="{ path: '/newsInfo', query: { id: item.id } }" tag="a">{{ item.newsTitle }}</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/Swiper'
import { getTempleHomeMonkList, getBannerList, getTempleHomeNews } from '@/api/index'
export default {
  name: 'TempleIndex',
  components: {
    swiper
  },
  data() {
    return {
      swiperData: [],
      monks: [],
      templeHomeNews: []
    }
  },
  created() {
    getBannerList().then(res => {
      this.swiperData = res.data
    })
    getTempleHomeMonkList({ id: this.$route.query.id }).then(res => {
      this.monks = res.data.slice(0, 3)
    })
    getTempleHomeNews({ id: this.$route.query.id }).then(res => {
      this.templeHomeNews = res.data.slice(0, 10)
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
  }
  .dashboard-list {
    display: flex;
    justify-content: space-between;
    &-item {
      width: 350px;
      height: 250px;
      img {
        width: 100%;
        height: 210px;
        display: block;
      }
      p {
        height: 40px;
        background: #ECECEC;
        font-size: 14px;
        color: #202020;
        padding-left: 21px;
        line-height: 40px;
      }
    }
  }
  .dashboard-textarea {
    padding: 0 325px;
    color: #5e5a5a;
    line-height:24px;
    font-size: 14px;
    letter-spacing: 2px;
  }
</style>
