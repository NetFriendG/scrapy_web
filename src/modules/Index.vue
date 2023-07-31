<template>
  <!-- 侧边导航栏 -->
  <el-aside width="200px">
    <NavigationBar></NavigationBar>
  </el-aside>
  <!-- 面包屑 -->
  <div class="right">
    <div class="right-top">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="right-bootom">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/common/components/NavigationBar/Index.vue";
import Breadcrumb from "@/common/components/Breadcrumb/Index.vue";
</script>

<style>
.right {
  width: 100%;
  flex-direction: column;
}
.right-top {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
}
.right-bootom {
  padding: 18px;
}
.el-scrollbar__wrap--hidden-default {
  background-color: #001529;
}
</style>
