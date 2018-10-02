<template>
  <div class="other-container">
    <div class="other-main">
      <div class="other-content">
        <h1> {{ news.newsTitle }} </h1>
        <div class="source">
          <span> 来源： {{ news.newsSource }} </span>
          <span class="right"> 时间： {{ news.createTime }} </span>
        </div>
        <div v-html="news.newsContent" />
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsInfo } from '@/api/index'
export default {
  name: 'NewsInfo',
  metaInfo() {
    return {
      title: '禅韵-资讯-' + this.news.newsTitle,
      meta: [
        {
          name: 'keyWords',
          content: this.news.newsKeywords
        },
        {
          name: 'description',
          content: this.news.newsDescription
        }
      ]
    }
  },
  data() {
    return {
      news: {}
    }
  },
  created() {
    this.queryNewsInfo()
  },
  methods: {
    queryNewsInfo() {
      console.log(this.$route.query.id)
      getNewsInfo({ id: this.$route.query.id }).then(res => {
        this.news = res.data
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .other-content {
    padding: 0 250px;
    padding-bottom: 55px;
    color: #5e5a5a;
    line-height:24px;
    font-size: 16px;
    letter-spacing: 2px;
    h1 {
      text-align: center;
      margin: 30px 0 48px 0;
      color: #1D1C1C;
      font-size: 28px;
    }
    .source {
      padding-bottom: 55px;
    }
    .right{
      float: right;
    }

  }
</style>
