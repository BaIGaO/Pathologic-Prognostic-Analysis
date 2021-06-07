<template>
    <div class="tab flex">
      <div class="tabLeft"></div>
      <div class="tabCn flex">
            <div class="text flex">
              <p class="textCn"  @click="changePage(0)" v-show="language==='en'">Home</p>
                <p class="textCn"  @click="changePage(0)" v-show="language==='cn'">首页</p>
              <span class="icon" v-show="hasPhoto > 0">></span>
              <p class="textCn" @click="changePage(1)" v-show="hasPhoto > 0 && language==='en'">Pathologic Analysis</p>
               <p class="textCn" @click="changePage(1)" v-show="hasPhoto > 0 && language==='cn'">病理分析</p>
              <span class="icon" v-show="hasPhoto > 1">></span>
              <p class="textCn" @click="changePage(2)" v-show="hasPhoto > 1 && language==='en'">Prognostic Analysis</p>
              <p class="textCn" @click="changePage(2)" v-show="hasPhoto > 1 && language==='cn'">预后分析</p>
            </div>
            <div class="tabrt flex">
                <el-menu default-active="1" class="language" mode="horizontal" @select="handleSelect" background-color="#3075B1" text-color="#fff" active-text-color="#fff">
                  <el-submenu index="1">
                    <template slot="title" v-if="language=='en'">ENGLISH</template>
                    <template slot="title" v-if="language=='cn'">简体中文</template>
                    <el-menu-item index="english" @click="changLa(1)">ENGLISH</el-menu-item>
                    <el-menu-item index="chinese"  @click="changLa(2)">简体中文</el-menu-item>
                  </el-submenu>
                </el-menu>
                <el-menu default-active="2" class="user" mode="horizontal" @select="sltLogin" background-color="#3075B1" text-color="#fff" active-text-color="#fff">
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-s-custom" style="color:#fff;"></i>
                      <span>admin</span>
                    </template>
                    <el-menu-item index="exitLogin" v-show="language==='en'" @click="logout">logout</el-menu-item>
                    <el-menu-item index="exitLogin" v-show="language==='cn'" @click="logout">退出登录</el-menu-item>
                  </el-submenu>
                </el-menu>
            </div>
      </div>
      <div class="tabRight"></div>
    </div>
</template>

<script>
export default {
    name:"v-Tab",
    props:{
      hasPhoto:Number,
      language:{
        type:String,
        default:"en"
      }
    },
  data () {
    return {
    }
  },
  methods: {
    handleSelect(key) {
      if(key==="english"){

      }else if(key==="chinese"){
       
      }
    },
    sltLogin(key){
      if(key==="exitLogin"){
        localStorage.setItem('author',null)
      }
    },
    changePage(val){
      this.$emit("changePage",val);
    },
    logout(){//退出登录
      this.$router.push({ path:'/login'})
    },
    changLa(val){//修改语言
      if(val=='1'){
         this.$emit('changeLang','en')
         localStorage.setItem('language','en')
      }else if(val=='2'){
         this.$emit('changeLang','cn')
         localStorage.setItem('language','cn')
      }
    }
  }
}
</script>

<style scoped>
    .flex{
    display:flex;
    align-items:center;
    }
  .tab{
   width:100%;
   height:60px;
   background:#6ea3d7;
  }
  .tabLeft{
    flex:1;
    height:60px;
    background:url("https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/tabLeft.png");
    background-size:1px 60px;
    background-repeat:repeat-x;
  }
  .tabRight{
    flex:1;
    height:60px;
    background:url("https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/tabRight.png");
    background-size:1px 60px;
    background-repeat:repeat-x;
  }
  .tabCn{
    width:90%;
    min-width:1200px;
    height:60px;
    background:url("https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/tab.png");
    background-size:100% 100%;
  }
  .tabCn .text{
      flex:1;
      font-size:20px;
      color:#fff;
      line-height:60px;
  }
  .tabCn .text .textCn{
    cursor:pointer;
  }
  .tabCn .text .icon{
    margin:0 5px;
  }
  .tabCn .language{
      margin-right:24px;
      cursor:pointer;
  }
 .tabCn .language p,.tabCn .user p{
     font-size:18px;
      color:#fff;
      margin:0 4px;
 }
 .tabCn .language img{
     width:15px;
     height:15px;
 }
 .tabCn .user{
   cursor:pointer;
 }
 .tabCn .user .img1{
     width:26px;
     height:26px;
 }
 .tabCn .user .img2{
     width:15px;
     height:15px;
 }
 .tabrt{
     padding-right:50px;
 }
</style>
