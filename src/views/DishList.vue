<template>
  <div class="xfn-dishList">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-tabs type="border-card">
      <el-tab-pane v-for="(c,i) of dishList" :key="i">
        <span slot="label">
          <el-badge :value="c.dishList.length" :max="10">{{c.cname}}</el-badge>
        </span>
        <el-row>
          <el-col v-for="(d,j) of c.dishList" :xs="12" :md="6" :lg="4" :xl="3" :key="j">
            <!-- <xfn-dish :data="d"></xfn-dish> -->
            {{d.title}}
            <img :src="require('../assets/img/dish/'+d.imgUrl)" style="max-width:100%">
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dishList:[] //[{cid:xx,cname:xx,dishList:[]}]
    }
  },
  mounted(){
    var url=this.$store.state.globalSettings.apiUrl+'/admin/dish'
    this.$axios.get(url).then(({data})=>{
      this.dishList=data
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style lang="scss">
  
</style>
