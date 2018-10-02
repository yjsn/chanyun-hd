<template>
  <div class="other-container">
    <div class="other-main">
      <div class="other-content">
        <h1>禅韵资讯</h1>
        <router-link v-for="item in newsList" :key="item.id" :to="{ path: '/newsInfo', query: { id: item.id } }" tag="a">{{ item.newsTitle }}</router-link>
        <paginate
          :click-handler="pageChange"
          :page-count="pageCount"
          :margin-pages="2"
          :page-range="4"
          :container-class="'pagination'"
          :prev-text="'上一页'"
          :next-text="'下一页'"
          :active-class="'page-active'"
          :value="nowPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsList } from '@/api/index'
export default {
  name: 'NewsList',
  metaInfo: {
    title: '禅韵-资讯',
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
  data() {
    return {
      nowPage: 1,
      pageCount: 0,
      newsList: []
    }
  },
  created() {
    this.searchList()
  },
  methods: {
    pageChange(pageNum) {
      this.nowPage = pageNum
      this.searchList()
    },
    searchList() {
      getNewsList({ bean: {}, pageNum: this.nowPage, pageSize: 15 }).then(res => {
        this.newsList = res.data.list
        this.pageCount = Math.ceil(res.data.total / 15)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.other-content {
  padding: 0 400px;
  padding-bottom: 55px;
  color: #5e5a5a;
  line-height:24px;
  font-size: 14px;
  letter-spacing: 2px;
  h1 {
    text-align: center;
    margin: 40px 0 48px 0;
    color: #1D1C1C;
    font-size: 32px;
  }
  a {
    display: block;
    margin: 10px 0;
  }
}
</style>
