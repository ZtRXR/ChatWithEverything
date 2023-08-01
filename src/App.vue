<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ASide from './components/Main/ASide.vue'
import Header from './components/Main/Header.vue'
</script>

<template>
  <!-- <div class="common-layout"> -->
  <el-container>
    <el-aside>
      <ASide></ASide>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <el-footer>尾部</el-footer>
    </el-container>
  </el-container>
  <!-- </div> -->
</template>


<style scoped>
.el-main {
  min-height: 1080px;
}

.el-aside {
  /* min-width: 185px; */
  width: auto;
}

.el-main {
  padding-top: 0px;
}
</style>

