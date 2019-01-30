<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted(){
        //当根组件挂载完成后需要一部请求全局配置函数
        var url=this.$store.state.globalSettings.apiUrl+'/admin/settings'
        this.$axios.get(url).then((result)=>{
          this.$store.commit('setGlobalSettings',result.data)
        }).catch((err)=>{
          consoel.log(err)
        })
      }
}
</script>
<style lang="scss">
  #app{
    color:#303133;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
