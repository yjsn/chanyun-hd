<template>
  <div class="main-container">
    <div class="title">
      为爱祈福
    </div>
    <div class="input-box1">
      <input v-model="name" type="text" placeholder="请输入祈福人姓名" >
      <input v-model="age" type="number" placeholder="请输入祈福人年龄">
      <textarea v-model="blessingContent" placeholder="请输入祈福内容"/>
      <button @click="submitBlessing">祈福</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blessing',
  data() {
    return {
      name: null,
      age: null,
      blessingContent: null
    }
  },
  methods: {
    submitBlessing() {
      if (!this.name || !this.age || !this.blessingContent) {
        console.log('请填写完整信息')
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 667px;
  background-origin: content-box;
  background: #4a1e18 url("../../assets/chan.png") no-repeat fixed center;
  font-size: 50px;
  color: #facd88;
  padding-top: 70px;
}
.title {
  height: 100px;
  width: 100%;
  text-align: center;
  font-size: larger;
}
.input-box1 {
  width: 80%;
  margin-left: 10%;
  padding-top: 20px;
  input {
    width: 100%;
    height: 100px;
    border-radius: 5px;
    outline: none;
    font-size: 38px;
    padding-left: 30px;
    margin-top: 100px;
  }
  textarea {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    outline: none;
    font-size: 38px;
    padding-left: 30px;
    margin-top: 100px;
  }
  button {
    width: 100%;
    height: 80px;
    color: #4A1E18;
    font-size: 48px;
    background: #F8E3BE;
    border-radius:10px;
    outline: none;
    margin-top: 100px;
    text-align: center;
    line-height: 45px;
  }
}
</style>
