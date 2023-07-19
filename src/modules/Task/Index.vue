<template>
  <div>
    <el-table :data="tableData" max-height="800">
      <el-table-column prop="Id" label="ID" width="180" />
      <el-table-column prop="TaskName" label="任务名称" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            class="mt-2"
            inline-prompt
            :loading="buttonloading"
            :active-icon="Check"
            :inactive-icon="Close"
            @change="buttonchange"
          />
        </template>
      </el-table-column>
      <el-table-column prop="createtime" sortable label="创建时间" />
      <el-table-column prop="endtime" sortable label="结束时间" />
      <el-table-column prop="remark" sortable label="备注" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from "element-plus";
import { reactive, ref } from "vue";
import { Check, Close } from "@element-plus/icons-vue";
const buttonloading = ref(false);
interface task {
  Id: string;
  TaskName: string;
  createtime: string;
  endtime: string;
  status: boolean;
  remark: string;
}

interface SpanMethodProps {
  row: task;
  column: TableColumnCtx<task>;
  rowIndex: number;
  columnIndex: number;
}
function buttonchange(data) {
  console.log(data);
}
const tableData: task[] = reactive([
  {
    Id: "1",
    TaskName: "微博",
    createtime: "111",
    endtime: "",
    status: false,
    remark: "111",
  },
  {
    Id: "1",
    TaskName: "微博",
    createtime: "111",
    endtime: "",
    status: true,
    remark: "111",
  },
]);
</script>
