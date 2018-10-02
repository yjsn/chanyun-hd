<template>
  <div class="dashboard-container">
    <swiper :swiperdata="swiperData" />
    <div class="dashboard-main">
      <div class="dashboard-content">

        <div class="dashboard-title">
          <img src="@/assets/cloudLeft.png" alt="">
          <span>禅韵资讯</span>
          <img src="@/assets/cloudRight.png" alt="">
          <span class="line" />
        </div>
        <div class="dashboard-list">
          <div v-for="item in news" :key="item.id" class="dashboard-list-item" >
            <router-link :to="{ path: '/newsInfo', query: { id: item.id } }">
              <img :src="item.newsImg + '/base'" alt="">
              <p>{{ item.newsTitle }}</p>
            </router-link>
          </div>
        </div>

        <div class="dashboard-title">
          <img src="@/assets/cloudLeft.png" alt="">
          <span>法会介绍</span>
          <img src="@/assets/cloudRight.png" alt="">
          <span class="line" />
        </div>
        <div class="dashboard-img">
          <router-link :to="{ path: '/newsInfo', query: { id: ceremonies.id } }">
            <img :src="ceremonies.newsImg + '/base'" alt="">
            <p>{{ ceremonies.newsTitle }}</p>
          </router-link>
        </div>

        <div class="dashboard-title">
          <img src="@/assets/cloudLeft.png" alt="">
          <span>禅韵修心</span>
          <img src="@/assets/cloudRight.png" alt="">
          <span class="line" />
        </div>
        <div class="dashboard-list">
          <div v-for="item in activity" :key="item.id" class="dashboard-list-item">
            <router-link :to="{ path: '/newsInfo', query: { id: item.id } }">
              <img :src="item.newsImg + '/base'" alt="">
              <p>{{ item.newsTitle }}</p>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/Swiper'
import { getBannerList, getHomeNewsList, getHomeCeremonies, getHomeActivity } from '@/api/index'

export default {
  name: 'Dashboard',
  metaInfo: {
    title: '禅韵-首页',
    meta: [
      {
        name: 'keyWords',
        content: '礼佛, 祈愿, 忏悔, 请香'
      },
      {
        name: 'description',
        content: '禅韵与全国多家知名寺庙合作，为全国佛家子弟更好的提供佛家功德项目服务，如在线烧香，祈愿，祈福，忏悔与更多的寺庙活动参与。'
      }
    ]
  },
  components: {
    swiper
  },
  data() {
    return {
      swiperData: [],
      news: [],
      ceremonies: {},
      activity: []
    }
  },
  created() {
    getBannerList().then(res => {
      this.swiperData = res.data
    })
    getHomeNewsList().then(res => {
      this.news = res.data.slice(0, 3)
    })
    getHomeCeremonies().then(res => {
      this.ceremonies = res.data
    })
    getHomeActivity().then(res => {
      this.activity = res.data.slice(0, 3)
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
        padding-right: 21px;
        line-height: 40px;
        overflow: hidden;
      }
    }
  }
  .dashboard-img {
    position: relative;
    img {
      width: 100%;
      display: block;
    }
    p {
      height: 40px;
      color: white;
      background: rgba(0,0,0,0.5);
      font-size: 14px;
      padding-left: 30px;
      line-height: 40px;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
</style>
