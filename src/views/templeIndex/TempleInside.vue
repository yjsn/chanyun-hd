<template>
  <div class="other-container">
    <div class="other-main">
      <img src="@/assets/swiper1.jpg" alt="" class="middle-img">
      <div class="other-background">
        <div class="other-content">
          <div class="input-box">
            <p class="input-box-title">寺庙入驻</p>
            <form>
              <div class="input-box-row">
                <label>寺庙名称</label>
                <input v-model="data.templeName" type="text" placeholder="请填写寺庙名称">
              </div>
              <div class="input-box-row">
                <label>请选择</label>
                <v-distpicker @province="changeProvince" @city="changeCity" @area="changeArea"/>
              </div>
              <div class="input-box-row">
                <label>地址</label>
                <input v-model="data.templeAddress" type="text" placeholder="请填写详细地址">
              </div>
              <div class="input-box-row">
                <label>联系人姓名</label>
                <input v-model="data.templeContactName" type="text" placeholder="请填写联系人姓名">
              </div>
              <div class="input-box-row">
                <label>电话</label>
                <input v-model="data.templeContactTel" type="text" placeholder="请填写电话">
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
import { addTemple } from '@/api/index'
export default {
  name: 'TempleInside',
  data() {
    return {
      data: {
        templeName: null,
        templeProvince: null,
        templeCity: null,
        templeCounty: null,
        templeAddress: null,
        templeContactName: null,
        templeContactTel: null
      }
    }
  },
  methods: {
    changeProvince(e) {
      this.data.templeProvince = e.value
    },
    changeCity(e) {
      this.data.templeCity = e.value
    },
    changeArea(e) {
      this.data.templeCounty = e.value
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
        if (item === 'templeContactTel' && !this.data[item].match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
          this.$modal.show('dialog', {
            title: '错误!',
            text: '手机号格式不正确！',
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
      addTemple(this.data).then(res => {
        this.$modal.show('dialog', {
          title: '提交成功!',
          text: '请等待后台工作人员审核',
          buttons: [
            {
              title: '确定',
              handler: () => {
                this.$router.push('/')
                this.$modal.hide('dialog')
              }
            }
          ]
        })
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
</style>
