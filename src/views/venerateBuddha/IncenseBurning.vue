<template>
  <div class="other-container">
    <div class="other-main">
      <img src="@/assets/swiper1.jpg" alt="" class="middle-img">
      <div class="other-background">
        <div class="other-content">
          <div class="input-box">
            <p class="input-box-title">烧香祈福</p>
            <form>
              <div class="input-box-row">
                <label>姓名</label>
                <input v-model="data.customerName" type="text" placeholder="请输入祈福人的真实姓名">
              </div>
              <div class="input-box-row">
                <label>年龄</label>
                <input v-model="data.customerAge" type="text" placeholder="请输入祈福人的真实年龄">
              </div>
              <div class="input-box-row">
                <label>请选择</label>
                <v-distpicker @province="changeProvince" @city="changeCity" @area="changeArea"/>
              </div>
              <div class="input-box-row">
                <label>地址</label>
                <input v-model="data.customerAddress" type="text" placeholder="请填写详细地址">
              </div>
              <div class="input-box-row">
                <label>寺庙</label>
                <select v-model="data.templeId" class="my-select" @change="choosedTemple">
                  <option value="" disabled selected style="display:none;">请选择寺庙</option>
                  <option v-for="item in templeList" :key="item.id" :value="item.id">{{ item.templeName }}</option>
                </select>
              </div>
              <div class="input-box-row">
                <label>菩萨名称</label>
                <select v-model="data.godName" class="my-select">
                  <option value="" disabled selected style="display:none;">请选择菩萨</option>
                  <option v-for="item in bodhisatvvaList" :key="item.id" :value="item.bodhisattvaName">{{ item.bodhisattvaName }}</option>
                </select>
              </div>
              <div class="input-box-row">
                <label>香型</label>
                <select v-model="data.meritsProductId" class="my-select">
                  <option value="" disabled selected style="display:none;">请选择香型</option>
                  <option v-for="item in incenseList" :key="item.id" :value="item.id">{{ item.meritsName }}</option>
                </select>
              </div>
              <div class="button-css" @click="submit">提交</div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <v-dialog/>
  </div>
</template>

<script>
import { addApplyMerits, getBodhisatvvaList, getTempleList, getIncenseList } from '@/api/index'
export default {
  name: 'IncenseBurning',
  data() {
    return {
      data: {
        customerName: null,
        customerAge: null,
        templeId: '',
        godName: '',
        meritsProductId: '',
        customerAddressProvince: null,
        customerAddressCity: null,
        customerAddressArea: null,
        customerAddress: null
      },
      bodhisatvvaList: [
        {
          id: 1,
          bodhisattvaName: '请先选择寺庙'
        }
      ],
      templeList: [],
      incenseList: [
        {
          id: 1,
          meritsName: '请先选择寺庙'
        }
      ]
    }
  },
  created() {
    getTempleList().then(res => {
      this.templeList = res.data
    })
  },
  methods: {
    changeProvince(e) {
      this.data.customerAddressProvince = e.value
    },
    changeCity(e) {
      this.data.customerAddressCity = e.value
    },
    changeArea(e) {
      this.data.customerAddressArea = e.value
    },
    submit() {
      for (const item in this.data) {
        if (!this.data[item]) {
          this.$modal.show('dialog', {
            title: '错误!',
            text: '请完整输入',
            buttons: [
              {
                title: '确定',
                handler: () => {
                  this.$modal.hide('dialog')
                }
              }
            ]
          })
          return
        }
      }
      addApplyMerits(this.data).then(res => {
        this.$modal.show('dialog', {
          title: '提交成功!',
          text: '即将生成支付订单',
          buttons: [
            {
              title: '确定',
              handler: () => {
                this.$router.push({ path: '/confirmationMsg', query: { meritsType: res.data.meritsType, customerName: res.data.customerName, meritsAccount: res.data.meritsAccount, id: res.data.id }})
                this.$modal.hide('dialog')
              }
            }
          ]
        })
      })
    },
    choosedTemple() {
      getBodhisatvvaList({ id: this.data.templeId }).then(res => {
        this.bodhisatvvaList = res.data
      })
      getIncenseList({ id: this.data.templeId }).then(res => {
        this.incenseList = res.data
      })
    }
  }
}
</script>

<style scoped>
.middle-img {
  width: 100%;
  display: block;
}
.other-background {
  background: url("../../assets/background1.png");
}
.other-content {
  width: 1260px;
  height: 1000px;
  padding: 0 30px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.button-css {
  width: 400px;
  height: 45px;
  color: #4A1E18;
  font-size: 18px;
  background: #F8E3BE;
  border-radius: 5px;
  outline: none;
  margin-bottom: 57px;
  margin-left: 215px;
  text-align: center;
  line-height:40px;
}
</style>
