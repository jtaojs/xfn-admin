<template>
  <div class="xfn-dishAdd">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加菜品</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <br>
    <el-form label-width="100px">
      <el-form-item label="菜品图片: ">
        <el-upload class="xfn-uploader" :action="uploadAction" :on-success="doUploadSucc" name="dishImg" :show-file-list="false">
         <img v-if="imageUrl" :src="imageUrl" alt="">
         <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      uploadAction:this.$store.state.globalSettings.apiUrl+'/admin/dish/image',//可处理文件上传的api
      imageUrl:'',//要显示的预览图地址
      formData:{
        title:'',
        imgUrl:'',   //菜品图片图片在服务器上的随机文件名称
        price:'',
        detail:'',
        categoryId:''
      }
    }
  },
  methods:{
    doUploadSucc(res,file){//文件上传成功后,客户端得到相应消息之后的处理函数
      //res  服务器段返回的数据
      //file //从input[type=file]中读取的第一个上传文件
      this.formData.imgUrl=res.fileName
      this.imageUrl=URL.createObjectURL(file.raw)//把上传的文件编码为DataUrl字符串
    }
  }
}
</script>

<style lang="scss">
  .xfn-uploader{
    .el-upload{
      border:1px dotted #aaa;
      border-radius: 3px;
      cursor: pointer;
      width:250px;
      height:177px;
      overflow: hidden;
      &:hover{
        border-color:#409eff;
      }
    }
    img{
      max-width: 100%;
    }
  }
  
</style>