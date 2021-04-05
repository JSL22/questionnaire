<template>
  <a-card title="文件夹" style="width: 100%">
    <a slot="extra" href="#">新建文件夹</a>

    <!-- 文件夹搜索 -->
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item label="文件夹名称 :">
        <a-input placeholder="请输入文件夹名" allow-clear> </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" icon="search"> 搜索 </a-button>
      </a-form-item>
    </a-form>
    <a-divider />
    <!-- 文件夹表 -->
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      style="width: 100%"
    >
      <el-table-column prop="fileName" label="文件夹名" width="150">
      </el-table-column>
      <el-table-column prop="createDate" label="创建时间" width="150">
      </el-table-column>
      <el-table-column prop="alterDate" label="修改时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >重命名</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 文件夹分页 -->
    <el-pagination
      align="center"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4, 5]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </a-card>
</template>

<script>
import dataTest from "@/utils/one.js";

export default {
  name: "Folder",

  data() {
    return {
      fileName: "文件",
      pageSize: 4, // 每页行数
      currentPage: 1, // 当前页
      total: 20, // 总行数
      tableData: dataTest,
    };
  },

  methods: {
    // 每页的记录行数
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 当前页码
    handleCurrentChange(val) {
      this.currentPage = val;
    },

    //
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<style>
</style>