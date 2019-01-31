<template>
  <div class="xfn-main-header">
        <h3 class="xfn-title">{{this.$store.state.globalSettings.appName}}管理后台</h3>
        <div class="xfn-right">
            <span style="padding-right:10px;">登录用户:{{this.$store.state.adminName}}</span>
            <el-button type="primary" @click="signout" size="mini">退出</el-button>
        </div> 
  </div>
</template>
<script>
export default {
    methods:{
        //清除当前用户的登录信息
        //跳转回登录页
        signout(){
            this.$store.commit("setAdminName",'')
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss">
    $header-height:60px;
    .xfn-main-header{
        background: #DCDFE6;
        border-radius: 4px;
        line-height: $header-height;
        height:$header-height;
        padding: 0 20px;
        .xfn-title{
            color:#303133;
            float: left;
            margin:0;
        }
        .xfn-right{
            float:right;
        }
    }
</style>