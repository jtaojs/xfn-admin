<template>
  <div class="xfn-securifty">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>安全管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <h3>修改管理员密码</h3>
      </div>
      <el-form label-width="120px">
        <el-form-item label="旧密码:  ">
          <el-input v-model="value"></el-input>
        </el-form-item>
        <el-form-item label="新密码:  ">
          <el-input v-model="value"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码:  ">
          <el-input v-model="value"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>