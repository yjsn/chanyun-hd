<template>
  <div class="navBar">
    <div class="navBar-background">
      <div class="navBar-container">
        <div class="navBar-first-line">
          <div class="navBar-left">
            <span @click="chooseBtn(0)">首页</span>
            <span>|</span>
            <router-link to="/templeInside" tag="span">寺庙入驻</router-link>
          </div>
          <div :class="{ 'navBar-right-user': didLogin }" class="navBar-right">
            <div class="navBar-search">
              <img src="@/assets/searchBar.png" alt="">
              <input type="text" placeholder="搜索">
              <img src="@/assets/searchIcon.png" alt="">
            </div>
            <div v-if="!didLogin" class="navBar-login">
              <router-link to="/login" tag="span">登陆</router-link>
              <span>|</span>
              <router-link to="/register" tag="span">注册</router-link>
            </div>
            <div v-else class="navBar-login">
              <span>{{ userName }}</span><span class="logout" @click="logout">退出登陆</span>
              <!--<span>我是你大</span><span class="logout" @click="logout">退出登陆</span>-->
              <span>|</span>
              <span>{{ userLevel }}</span>
              <!--<span>大哥又如何</span>-->
            </div>
          </div>
        </div>
        <div class="navBar-main">
          <img src="@/assets/logo.png" alt="" style="margin-left: -8px;display: inline-block">
          <ul class="ul-first">
            <li :class="{itemHover:itemHoverIndex == 0, itemChoose:itemChooseIndex==0}" @mouseout="removeBtn" @mouseover="changeBtn(0)" @click="chooseBtn(0)">
              网站主页
              <img v-show="itemChooseIndex==0 || itemHoverIndex == 0" src="@/assets/choseNav.png" alt="">
            </li>
            <span class="line" />
            <li :class="{itemHover:itemHoverIndex == 1, itemChoose:itemChooseIndex==1}" @mouseout="removeBtn" @mouseover="changeBtn(1)" @click="chooseBtn(1)">
              禅韵资讯
              <img v-show="itemChooseIndex==1 || itemHoverIndex == 1" src="@/assets/choseNav.png" alt="">
            </li>
            <span class="line" />
            <li :class="{itemHover:itemHoverIndex == 2, itemChoose:itemChooseIndex==2}" @mouseout="removeBtn" @mouseover="changeBtn(2)" @click="chooseBtn(2)">
              佛学入门
              <img v-show="itemChooseIndex==2 || itemHoverIndex == 2" src="@/assets/choseNav.png" alt="">
            </li>
            <span class="line" />
            <li :class="{itemHover:itemHoverIndex == 3, itemChoose:itemChooseIndex==3}" @mouseout="removeBtn" @mouseover="changeBtn(3)" @click="chooseBtn(3)">
              政策法规
              <img v-show="itemChooseIndex==3 || itemHoverIndex == 3" src="@/assets/choseNav.png" alt="">
            </li>
            <span class="line" />
            <li :class="{itemHover:itemHoverIndex == 4, itemChoose:itemChooseIndex==4}" @mouseout="removeBtn" @mouseover="changeBtn(4)" @click="chooseBtn(4)">
              佛门动态
              <img v-show="itemChooseIndex==4 || itemHoverIndex == 4" src="@/assets/choseNav.png" alt="">
            </li>
          </ul>
          <ul class="ul-second">
            <li :class="{itemHover:itemHoverIndexTwo == 0, itemChoose:itemChooseIndexTwo==0}" @mouseout="removeBtnTwo" @mouseover="changeBtnTwo(0)" @click="chooseBtnTwo(0)">
              明寺古刹
              <img v-show="itemChooseIndexTwo==0 || itemHoverIndexTwo == 0" src="@/assets/house2.png" alt="">
              <img v-show="itemChooseIndexTwo!=0 && itemHoverIndexTwo != 0" src="@/assets/house1.png" alt="">
            </li>
            <li :class="{itemHover:itemHoverIndexTwo == 1, itemChoose:itemChooseIndexTwo==1}" @mouseout="removeBtnTwo" @mouseover="changeBtnTwo(1)" @click="chooseBtnTwo(1)">
              功德榜
              <img v-show="itemChooseIndexTwo==1 || itemHoverIndexTwo == 1" src="@/assets/house2.png" alt="">
              <img v-show="itemChooseIndexTwo!=1 && itemHoverIndexTwo != 1" src="@/assets/house1.png" alt="">
            </li>
            <li :class="{itemHover:itemHoverIndexTwo == 2, itemChoose:itemChooseIndexTwo==2}" @mouseout="removeBtnTwo" @mouseover="changeBtnTwo(2)" @click="chooseBtnTwo(2)">
              礼佛祈愿
              <img v-show="itemChooseIndexTwo==2 || itemHoverIndexTwo == 2" src="@/assets/house2.png" alt="">
              <img v-show="itemChooseIndexTwo!=2 && itemHoverIndexTwo != 2" src="@/assets/house1.png" alt="">
            </li>
            <li :class="{itemHover:itemHoverIndexTwo == 3, itemChoose:itemChooseIndexTwo==3}" @mouseout="removeBtnTwo" @mouseover="changeBtnTwo(3)" @click="chooseBtnTwo(3)">
              禅韵修心
              <img v-show="itemChooseIndexTwo!=3 && itemHoverIndexTwo != 3" src="@/assets/house1.png" alt="">
              <img v-show="itemChooseIndexTwo==3 || itemHoverIndexTwo == 3" src="@/assets/house2.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <v-dialog/>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {
      itemHoverIndex: null,
      itemHoverIndexTwo: null,
      itemChooseIndex: null,
      itemChooseIndexTwo: null
    }
  },
  computed: {
    didLogin() {
      return this.$store.state.user.token
    },
    userName() {
      return this.$store.state.user.name
    },
    userLevel() {
      return this.$store.state.user.level
    }
  },
  created() {
    console.log(this.$route.name)
    switch (this.$route.name) {
      case 'dashboard': this.itemChooseIndex = 0
        break
      case 'newsList': this.itemChooseIndex = 1
        break
      case 'introduction': this.itemChooseIndex = 2
        break
      case 'rulesList': this.itemChooseIndex = 3
        break
      case 'templeDynamicList': this.itemChooseIndex = 4
        break
      case 'templeList': this.itemChooseIndexTwo = 0
        break
      case 'rankingList': this.itemChooseIndexTwo = 1
        break
      case 'venerateBuddhaHome': this.itemChooseIndexTwo = 2
        break
      default: this.itemChooseIndex = null
        this.itemChooseIndexTwo = null
    }
  },
  methods: {
    logout() {
      console.log(111)
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
    changeBtn(index) {
      this.itemHoverIndex = index
    },
    removeBtn() {
      this.itemHoverIndex = null
    },
    chooseBtn(index) {
      this.itemChooseIndex = index
      this.itemChooseIndexTwo = null
      switch (index) {
        case 0: this.$router.push('/index')
          break
        case 1: this.$router.push('/newsList')
          break
        case 2: this.$router.push('/introduction')
          break
        case 3: this.$router.push('/rulesList')
          break
        case 4: this.$router.push('/templeDynamicList')
          break
      }
    },
    changeBtnTwo(index) {
      this.itemHoverIndexTwo = index
    },
    removeBtnTwo() {
      this.itemHoverIndexTwo = null
    },
    chooseBtnTwo(index) {
      this.itemChooseIndexTwo = index
      this.itemChooseIndex = null
      switch (index) {
        case 0: this.$router.push('/templeList')
          break
        case 1: this.$router.push('/rankingList')
          break
        case 2: this.$router.push('/venerateBuddhaHome')
          break
        case 3: this.$router.push('/rulesList')
          break
        case 4: this.$router.push('/templeDynamicList')
          break
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.logout {
  border: 1px solid #A31501;
  padding: 2px;
  margin-left: 10px;
  cursor: pointer;
}
.navBar {
  height: 254px;
  background-color: #f8e3bd;
  &-background {
    max-width: 1440px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    overflow: hidden;
    background: url("../../../assets/navbar.png") no-repeat;
  }
  &-container {
    width: 1260px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    overflow: hidden;
    padding: 0 30px;
  }
  &-first-line {
    /*margin: 0 30px;*/
    margin-top: 37px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-left {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #A31501;
    font-size: 14px;
    span:nth-of-type(2n-1) {
      cursor: pointer;
    }
  }
  &-right {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #A31501;
  }
  &-right-user {
    width: 500px;
  }
  .navBar-login {
    position: relative;
    span:nth-of-type(2n-1) {
      cursor: pointer;
    }
  }
  .navBar-search {
    position: relative;
    input {
      /*background-color: #f8e3bd;*/
      position: absolute;
      top: 0;
      width: 160px;
      height: 34px;
      border: 0;
      margin: 0;
      padding: 0;
      left: 10px;
      background-color: rgba(0,0,0,0);
      outline: none;
      color: #A31501;
    }
    input::-webkit-input-placeholder {
      color: #A31501;
      opacity: .7;
    }
    img:last-of-type {
      position: absolute;
      right: 13px;
      top: 9px;
      cursor: pointer;
    }
  }
  &-main {
    /*margin: 0 30px;*/
    height: 149px;
    margin-top: 33px;
    display: flex;
    .line {
      width: 1px;
      height: 89px;
      display: block;
      background: -webkit-linear-gradient(#f8e3bd, rgba(0,0,0,.2), #f8e3bd); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(#f8e3bd, rgba(0,0,0,.2), #f8e3bd); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(#f8e3bd, rgba(0,0,0,.2), #f8e3bd); /* Firefox 3.6 - 15 */
      background: linear-gradient(#f8e3bd, rgba(0,0,0,.2), #f8e3bd); /* 标准的语法 */
    }
    .itemHover {
      color: white !important;
    }
    .itemChoose {
      color: white !important;
    }
    .ul-first {
      margin-left: 33px;
      width: 280px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      color: #A31501;
      li {
        width: 30px;
        height: 90px;
        text-align: center;
        line-height: 22px;
        position: relative;
        cursor: pointer;
        img {
          position: absolute;
          top: -7px;
          left: -3px;
          z-index: -1;
        }
      }
    }
    .ul-second {
      margin-left: 54px;
      width: 480px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      color: #A31501;
      li {
        width: 120px;
        /*height: 90px;*/
        text-align: center;
        line-height: 22px;
        position: relative;
        cursor: pointer;
        img {
          position: absolute;
          top: -16px;
          left: 7px;
          z-index: -1;
        }
      }
    }
  }
}
</style>
