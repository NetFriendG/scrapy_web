<template>
  <!-- 侧边导航栏 -->
  <div class="left">
    <NavigationBar></NavigationBar>
  </div>
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
.left {
  width: 20vh;
  height: 100%;
  background-color: #001529;
}
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
</style>
