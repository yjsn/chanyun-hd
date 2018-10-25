<template>
  <div class="left-container">
    <div class="left-user-img">
      <img src="../../../assets/logo.png">
    </div>
    <div class="left-user-name">
      <p>本色</p>
    </div>
    <div class="left-list">
      <ul>
        <li v-for="(item,index) in menuList" :key="index" :class="{ active:changeClass == index}" @click="changeLi(index)">
          <router-link :to="item.url" >
            <a>{{ item.name }}</a>
          </router-link>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Left',
  data() {
    return {
      menuList: [
        {
          name: '功德簿',
          url: '/user/index'
        },
        {
          name: '功德榜',
          url: '/user/index'
        },
        {
          name: '烧香记录',
          url: '/user/index'
        }
      ],
      changeClass: 0
    }
  },
  methods: {
    changeLi: function(index) {
      this.changeClass = index
    }
  }
}
</script>

<style scoped>
.left-container {
  width: 234px;
  height:600px;
  background:#F8F8F8;
  border-radius:3px;
  padding-top: 20px;
  float: left;
}
.left-user-img {
  margin-left: 72px;
  cursor: pointer;
}
.left-user-img img {
  width:92px;
  height: 92px;
}
.left-user-name {
  width: 92px;
  height: 24px;
  text-align: center;
  margin-left: 72px;
}
.left-list {
  width: 100%;
  text-align: center;
  margin-top: 40px;
  height: 100%;
}
.left-list ul li {
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  cursor: pointer;
}
.active {
  background-color: white;
  color: #A31501;
}
</style>
