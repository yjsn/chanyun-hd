<template>
  <div class="other-container">
    <div class="other-main">
      <div class="other-content">
        <h1>佛门动态</h1>
        <router-link v-for="item in dynamicList" :key="item.id" :to="{ path: '/newsInfo', query: { id: item.id } }" tag="a">{{ item.newsTitle }}</router-link>
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
import { getDynamicList } from '@/api/index'
export default {
  name: 'TempleDynamicList',
  data() {
    return {
      nowPage: 1,
      pageCount: 0,
      dynamicList: []
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
      getDynamicList({ bean: {}, pageNum: this.nowPage, pageSize: 15 }).then(res => {
        this.dynamicList = res.data.list
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
