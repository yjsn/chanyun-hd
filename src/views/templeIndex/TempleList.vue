<template>
  <div class="other-container">
    <div class="other-main">
      <div class="other-content">
        <h1>明寺古刹</h1>
        <ul class="temple-list">
          <router-link v-for="item in data" :key="item.id" :to="{ path: '/templeindex', query: { id: item.id } }" tag="li">
            <img :src="item.templeLogo + '/base'" alt="">
            <p>{{ item.templeName }}</p>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getTempleLogoList } from '@/api/index'
export default {
  name: 'TempleList',
  data() {
    return {
      data: []
    }
  },
  created() {
    getTempleLogoList().then(res => {
      this.data = res.data.slice(0, 8)
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .other-content {
    width: 1260px;
    padding: 0 30px;
    padding-bottom: 55px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    h1 {
      text-align: center;
      margin: 40px 0 48px 0;
      color: #1D1C1C;
      font-size: 32px;
    }
    .temple-list {
      /*display: flex;*/
      /*justify-content: space-between;*/
      /*flex-wrap: wrap;*/
      overflow: hidden;
      li {
        width: 250px;
        height: 250px;
        position: relative;
        margin: 24px;
        float: left;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
        p {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: rgba(0,0,0,0.5);
          height: 30px;
          line-height: 30px;
          padding-left: 10px;
          color: white;
        }
      }
    }
  }
  .pagination {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
  }
</style>
