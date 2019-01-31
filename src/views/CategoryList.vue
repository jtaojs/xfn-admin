<template>
  <div class="xfn-categoryList">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item>类别列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-button type="primary" @click="addCategory">添加新的菜品类别</el-button>
    <br><br>
    <el-table :data="categoryList" :border="true" :stripe="true">
      <el-table-column label="编号" prop="cid"></el-table-column>
      <el-table-column label="名称" prop="cname"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row,$index}">
          <el-button type="success" size="mini" @click="updateCategory(row,$index)">修改</el-button>
          <el-button type="danger" size="mini" @click="deleteCategory(row,$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
categoryList:[]
    }
  },
  mounted(){
    var url=this.$store.state.globalSettings.apiUrl+'/admin/category'
    this.$axios.get(url).then((result)=>{
      this.categoryList=result.data;
    }).catch((err)=>{
      console.log(err)
    })
  },
  methods:{
    deleteCategory(c,i){
      this.$confirm('此操作不可撤销!您确定吗?',"提示",{type:'warning'}).then(()=>{
        var url=this.$store.state.globalSettings.apiUrl+`/admin/category/${c.cid}`
      this.$axios.delete(url).then((result)=>{
        console.log(result.data)
        if(result.data.code==200){//数据库中已经删除成功
          this.categoryList.splice(i,1)//模型数据中删除
          this.$message.success("菜品类别删除成功! ")
        }else{
          this.$message.error("菜品类别删除失败: "+result.data.msg)
        }
      }).catch((err)=>{
        console.log(err)
      })
      }).catch(()=>{
        //this.$message.success("取消成功")
      })
      //console.log(c,i)
    },
    updateCategory(c,i){
      //console.log(c)
      //console.log(i)
      this.$prompt('请输入您想修改菜品类别名称','提示',{type:'info',inputValue:c.cname}).then(({value})=>{
        var url=this.$store.state.globalSettings.apiUrl+'/admin/category'
        this.$axios.put(url,{cname:value,cid:c.cid}).then((result)=>{
          //数据库修改成功
          if(result.data.code==200){
            this.$message.success("菜品修改类别成功!")
            //模型数据添加新的类别
            this.categoryList.splice(i,1,{cname:value,cid:c.cid})
          }else{
            this.$message.error("菜品类别修改失败"+result.data.msg)
          }
          console.log(result.data)
        }).catch((err)=>{
          console.log(err)
        })
      }).catch(()=>{

      })
    },
    addCategory(){
      this.$prompt('请输入新的菜品类别名称','提示',{type:'info'}).then(({value})=>{
        //获得用户的输入,调用数据api添加到数据库
        var url=this.$store.state.globalSettings.apiUrl+'/admin/category'
        this.$axios.post(url,{cname:value}).then((result)=>{
          if(result.data.code==200){
            //数据库添加成功
            this.$message.success("新的菜品类别添加成功!")
            //模型数据添加新的类别
            this.categoryList.push({cid:result.data.cid,cname:value})
          }else{
            this.$message.error('新的菜品类别添加出错'+result.data.msg)
          }
        }).catch((err)=>{
          console.log(err)
        })
      }).catch(()=>{

      })
    }
  }
}
</script>