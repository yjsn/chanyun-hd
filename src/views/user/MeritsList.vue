<template>
  <div class = "merits-container">
    <div class="merits-type-top">
      <ul>
        <li v-for="(item,index) in meritsType" :key="index" :class="{active:changeClass == index}" @click = "meritsTypeChange(index)">
          <span :title="item.value">{{ item.name }}：{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <div class="merits-list">
      <div class="merits-list-title">
        <div>功德编号</div>
        <div>功德项目</div>
        <div>寺庙</div>
        <div>请香人</div>
        <div>状态</div>
        <div>操作</div>
      </div>
    </div>
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
</template>

<script>
export default {
  name: 'MeritsList',
  data() {
    return {
      meritsType: [
        {
          name: '总功德',
          value: 100
        },
        {
          name: '请香',
          value: 80
        },
        {
          name: '许愿',
          value: 10
        },
        {
          name: '供奉佛灯',
          value: 10
        },
        {
          name: '捐助',
          value: 10
        }
      ],
      changeClass: 0,
      nowPage: 1,
      pageCount: 0
    }
  },
  methods: {
    meritsTypeChange: function(index) {
      this.changeClass = index
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.merits-container {
}
.merits-type-top {
  width: 950px;
  height: 50px;
  background-color: #F8F8F8;
  padding-left: 20px;
}
.merits-type-top ul li {
  height: 60px;
  width: 16%;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.merits-list {
  margin-top: 20px;
  height: 100%;
  .merits-list-title {
    height: 30px;
    div {
      width: 15%;
      display: inline-block;
      text-align: center;
    }
  }
}

.active {
  background-color: white;
  color: #A31501;
}
</style>
