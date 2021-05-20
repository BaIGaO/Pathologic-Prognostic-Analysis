<template>
  <div class="main">
    <v-Header :showRight="showRight" :language="language"></v-Header>
    <div class="login">
        <div class="loginCn">
             <p class="title" v-show="language==='en'">DIAGNOSIS AND SURVIVAL PREDICTION OF GASTRIC CANCER</p>
             <p class="title" v-show="language==='cn'">胃癌AI诊断及预后预测系统</p>
             <div class="loginForm">
                 <div class="list flex">
                     <div class="lf flex">
                         <img src="../assets/name.png"/>
                     </div>
                     <div class="rt">
                        <input v-show="language==='en'" type="text" placeholder="user name" v-model="userName">
                        <input v-show="language==='cn'" type="text" placeholder="用户名" v-model="userName">
                     </div>
                 </div>
                 <div class="list flex">
                     <div class="lf flex">
                         <img src="../assets/password.png"/>
                     </div>
                     <div class="rt">
                         <input v-show="language==='en'" type="password" placeholder="password" v-model="password">
                         <input v-show="language==='cn'" type="password" placeholder="密码" v-model="password">
                     </div>
                 </div>
                <div v-show="language==='en'" class="login-btn" @click="login">login</div>
                <div v-show="language==='cn'" class="login-btn" @click="login">登录</div>
             </div>
        </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./header.vue"
export default {
  data () {
    return {
       showRight:false,
       userName:"",
       password:"",
       language:"en"
    }
  },
  components:{
    vHeader
  },
  mounted(){
        this.language=localStorage.getItem('language')
        console.log(this.language);
  },
  methods: {
      login(){
            if(this.userName.trim()==""){
                this.$message.error("Please enter the user name");
                return;
            }
            if(this.password.trim()==""){
                this.$message.error("Please enter your password");
                return;
            }
            if(this.userName.trim()==="admin" && this.password.trim()==="Wuhan2020"){
                this.$message({
                    message: 'Login successful',
                    type: 'success'
                });
                localStorage.setItem('author','isLogin')
                this.$router.push({ path:'/upImg'})
            }else{
                this.$message.error("Incorrect user name or password");
            }
      }
    }
}
</script>
e
<style scoped>
    .flex{
        display:flex;
        align-items:center;
    }
  .login{
    width:100%;
    height:calc(100vh - 93px);
    background:#6ea3d7 url('../assets/login.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    min-width:1200px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .loginCn{
      width:700px;
      padding-bottom:6%;
  }
  .loginCn .title{
      font-size:20px;
      color:#fff;
      text-align:center;
      line-height:50px;
      margin-bottom:20px;
  }
    .loginForm{
        background:#fff;
        border-radius:10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 50px;
        height:calc(100vh - 293px);
        max-height:350px;
        width:500px;
        margin:0 auto;
    }
   .list{
       margin-bottom:30px;
   }
  .list .lf{
      width:40px;
      height:40px;
      justify-content: center;
      background:#1989FA;
  }
  .list .lf img{
      width:16px;
      height:16px;
  }
    .list .rt{
        flex:1;
        height:40px;
        background:#F7F7F7;
    }
    .list .rt input{
        width:100%;
        height:40px;
        border:0;
        background:#F7F7F7;
        text-indent:20px;
        font-size:14px;
    }
    .login-btn{
        height:40px;
         background:#1989FA;
         text-align:center;
         line-height:40px;
         font-size:16px;
         color:#fff;
         cursor:pointer;
    }
</style>
