<template>
  <div class="app-wrapper">
    <div class="main-container">
      <nav-bar />
      <left />
      <app-main/>
      <foot-bar />
    </div>
  </div>
</template>

<script>
import { AppMain, NavBar, FootBar } from './components'
import Left from "./components/Left";

export default {
  name: 'Layout',
  components: {
    Left,
    AppMain,
    NavBar,
    FootBar
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.main-container {
  min-width: 1260px;
}
</style>
