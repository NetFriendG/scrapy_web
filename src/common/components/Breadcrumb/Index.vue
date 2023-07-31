<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">爬虫管理系统</el-breadcrumb-item>
    <el-breadcrumb-item>任务管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style scoped>
.breadcrumb {
  margin-left: 18px;
}
</style>
