<template>
  <div class="app-wrapper">
    <div class="main-container">
      <nav-bar />
      <app-main/>
      <foot-bar />
    </div>
  </div>
</template>

<script>
import { AppMain, NavBar, FootBar } from './components'

export default {
  name: 'Layout',
  components: {
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
