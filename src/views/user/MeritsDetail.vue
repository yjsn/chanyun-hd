<template>
  <div class="merits-detail-container">
    <div class="deatil-row">
      <span>功德编号：</span>
      <span>{{ meritsDetail.merits.meritsNumber }}</span>
    </div>
    <div class="deatil-row">
      <span>功德项目：</span>
      <span>{{ meritsDetail.merits.meritsName }}</span>
    </div>
    <div class="deatil-row">
      <span>许愿人：</span>
      <span>{{ meritsDetail.merits.customerName }}</span>
    </div>
    <div class="deatil-row">
      <span>寺庙名称：</span>
      <span>{{ meritsDetail.merits.templeName }}</span>
    </div>
    <div class="deatil-row">
      <span>许愿内容：</span>
      <span>{{ meritsDetail.promiseContent }}</span>
    </div>
    <div class="deatil-row" style="height: 220px">
      <span>回执图片：</span>
      <img v-if="meritsDetail.meritsImg1" :src="meritsDetail.meritsImg1">
      <img v-if="meritsDetail.meritsImg1" :src="meritsDetail.meritsImg2">
    </div>
    <div class="deatil-row">
      <span>申请日期：</span>
      <span>{{ meritsDetail.merits.applyTime }}</span>
    </div>
    <div class="deatil-row">
      <span>完成日期：</span>
      <span>{{ meritsDetail.merits.completionTime }}</span>
    </div>
    <div class="deatil-row">
      <span>状态：</span>
      <span>{{ meritsDetail.merits.meritsStatus === 2 ? '进行中' : '完成' }}</span>
    </div>
    <div class="deatil-row">
      <router-link :to="{ path: '/user/index'}" tag="span">
        <div class ="reBut">返回</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getMeritsDetail } from '@/api/user'
export default {
  name: 'MeritsDetail',
  data() {
    return {
      meritsDetail: {
        merits: {
          meritsNumber: null
        },
        meritsImg1: null,
        meritsImg2: null
      }
    }
  },
  created() {
    this.queryNewsInfo()
  },
  methods: {
    queryNewsInfo() {
      getMeritsDetail({ id: this.$route.query.id }).then(res => {
        this.meritsDetail = res.data
        this.meritsDetail.meritsImg1 = this.meritsDetail.meritsImg1 + '/200X200'
        this.meritsDetail.meritsImg2 = this.meritsDetail.meritsImg2 + '/200X200'
      })
    }
  }
}
</script>

<style scoped>
.merits-detail-container {
}
.deatil-row {
  height: 30px;
  width: 500px;
  margin-top: 10px;
}

.reBut {
  width: 200px;
  height: 30px;
  line-height: 30px;
  background-color: #4A1E18;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
</style>
