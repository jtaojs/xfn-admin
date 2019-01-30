<template>
  <div class="main">
    <el-container>
      <!-- 左侧的菜单栏 -->
      <el-aside width="200px">
        <el-menu default-active="1" active-text-color="#409eff" unique-opened="true" menu-trigge="hover">
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">全局设置</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>桌台管理</span>
            </template>
            <el-menu-item-group> 
              <el-menu-item index="2-1">所有桌台</el-menu-item>
              <el-menu-item index="2-2">添加桌台</el-menu-item>
              <el-menu-item index="2-3">删除桌台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-message"></i>
            <span slot="title">菜品类别</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>菜品管理</span>
            </template>
            <el-menu-item-group> 
              <el-menu-item index="4-1">所有菜品</el-menu-item>
              <el-menu-item index="4-2">添加菜品</el-menu-item>
              <el-menu-item index="4-3">删除菜品</el-menu-item>
              <el-menu-item index="4-4">修改菜品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="5">
            <i class="el-icon-date"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-bell"></i>
            <span slot="title">安全管理</span>
            </el-menu-item>
        </el-menu>     
      </el-aside>
      <el-container>
        <!-- 顶部新西兰 -->
        <el-header height="60px">
          <MainHeader></MainHeader>
        </el-header>
        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'//引入MainHeader组件
export default {
  components:{//MainHeader组件
    MainHeader:MainHeader
  },
  beforeCreate(){
    //组件创建之前先要检查是否已经登录
    if(!this.$store.state.adminName){
      this.$router.push('/login')//未登录跳转到登录页面
    }
  }
}
</script>