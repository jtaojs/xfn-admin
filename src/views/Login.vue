<template>
  <div class="login">
    <el-card class="xfn-login-card">
      <div slot="header">管理员登录</div>
      <div>
        <el-form label-width="80px">

          <el-form-item label="管理员名: ">
            <el-input v-model='formDate.aname' placeholder="请输入管理员账号"></el-input>
          </el-form-item>

          <el-form-item label="登录密码: ">
            <el-input v-model='formDate.apwd' type="password" placeholder="请输入管理员密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="doLogin">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-card>  
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formDate:{aname:'admin',apwd:'123456'}//表单中用户输入的两个数据
      }
    },
    methods:{
      doLogin(){//执行登录
        var url=this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formDate.aname}/${this.formDate.apwd}`
        //console.log(url)
        this.$axios.get(url).then((result)=>{
          //console.log(result.data)
          if(result.data.code==200){//登陆成功
            //把用户名存入Vuex存储仓库
            this.$store.commit('setAdminName',this.formDate.aname)
            //执行跳转
            this.$router.push('/main')
          }else{//登录失败
            this.$alert('用户名或密码有误!','登录失败',{type:'error'}).then(()=>{}).catch(()=>{})
          }
        }).catch((err)=>{
          console.log(err)
        })
      },
      doCancel(){//清楚用户的输入
        this.formDate.aname="";
        this.formDate.apwd=""
      }   
    }
  }
</script>

<style lang="scss">
  .xfn-login-card{
    width:450px;
    margin:0 auto;
    margin-top: 150px;

    .el-card__header{
      text-align: center;
      font-size : 1.2em
    }
  }
  
</style>