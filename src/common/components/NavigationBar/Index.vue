<template>
  <div class="menu">
    <!-- <h5 class="mb-2">爬虫管理系统</h5> -->
    <el-menu
      class="left-menu"
      background-color="#001529"
      text-color="#ffffff"
      default-active="2"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>数据展示</span>
        </template>
        <el-menu-item index="1-1">可视化仪表盘</el-menu-item>
        <el-menu-item index="1-2">任务数据</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="scrapyManage">
        <template #title>
          <el-icon><location /></el-icon>
          <span>任务管理</span>
        </template>
        <el-menu-item index="scrapyManage/task">任务列表</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.mb-2 {
  position: relative;
}


::v-deep .el-menu {
  border: 0;
}
</style>
