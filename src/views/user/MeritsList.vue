<template>
  <div class = "merits-container">
    <div class="merits-type-top">
      <ul>
        <li v-for="(item,index) in meritsTypeList" :key="index" :class="{active:changeClass == index}" @click = "meritsTypeChange(index)">
          <span :title="item.value">{{ item.name }}：{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <div class="merits-list">
      <div class="merits-list-title">
        <div>功德编号</div>
        <div>功德项目</div>
        <div>请香人</div>
        <div>日期</div>
        <div>状态</div>
        <div>操作</div>
      </div>
      <div v-for="(item,index) in meritsList" :key="index" class="merits-list-title">
        <div>{{ item.meritsNumber }}</div>
        <div>{{ item.meritsName }}</div>
        <div>{{ item.customerName }}</div>
        <div>{{ item.applyTime }}</div>
        <div>{{ item.meritsStatus === 2 ? '进行中': '已完成' }}</div>
        <div>
          <router-link :to="{ path: '/user/meritsDetail', query: { id: item.id } }" tag="span">查看详情</router-link>
        </div>
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
import { getTotalData, getMeritsList } from '@/api/user'
export default {
  name: 'MeritsList',
  data() {
    return {
      meritsTypeList: [
        {
          name: '总功德',
          value: this.$store.state.user.meritsAccount ? this.$store.state.user.meritsAccount : 0
        },
        {
          name: '请香',
          value: 0
        },
        {
          name: '许愿',
          value: 0
        },
        {
          name: '供奉佛灯',
          value: 0
        },
        {
          name: '忏悔',
          value: 0
        }
      ],
      meritsList: [],
      changeClass: 0,
      nowPage: 1,
      pageCount: 0
    }
  },
  created() {
    this.setTopData()
    this.searchList()
  },
  methods: {
    meritsTypeChange: function(index) {
      this.changeClass = index
      this.$modal.show('dialog', {
        title: '请确认!',
        text: '是否要退出登陆！',
        buttons: [
          {
            title: '取消',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: '确定',
            handler: () => {
              this.$modal.hide('dialog')
              this.$store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
              })
            }
          }
        ]
      })
    },
    pageChange(pageNum) {
      this.nowPage = pageNum
      this.searchList()
    },
    setTopData() {
      getTotalData().then(res => {
        for (const item in res.data) {
          for (const index in this.meritsTypeList) {
            if (res.data[item].meritsType === 1) {
              if (this.meritsTypeList[index].name === '请香') {
                this.meritsTypeList[index].value = res.data[item].meritsAccount
              }
            } else if (res.data[item].meritsType === 2) {
              if (this.meritsTypeList[index].name === '供奉佛灯') {
                this.meritsTypeList[index].value = res.data[item].meritsAccount
              }
            } else if (res.data[item].meritsType === 3) {
              if (this.meritsTypeList[index].name === '许愿') {
                this.meritsTypeList[index].value = res.data[item].meritsAccount
              }
            } else if (res.data[item].meritsType === 4) {
              if (this.meritsTypeList[index].name === '忏悔') {
                this.meritsTypeList[index].value = res.data[item].meritsAccount
              }
            }
          }
        }
      })
    },
    searchList() {
      getMeritsList({ bean: {}, pageNum: this.nowPage, pageSize: 10 }).then(res => {
        this.meritsList = res.data.list
        this.pageCount = Math.ceil(res.data.total / 10)
      })
    },
    meritsDetail(id) {
      console.log(id)
      this.router.query
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
      span {
        cursor: pointer;
        color: #A31501;
      }
    }
  }
}

.active {
  background-color: white;
  color: #A31501;
}
</style>
