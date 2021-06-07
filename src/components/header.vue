<template>
    <div class="header">
      <div class="headerLeft"></div>
      <div class="headerCn">
        <div class="left" v-show="language=='en'">
          <img src="https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/logo.png" class="logo" />
          <img src="https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/hospitalName.png" class="hospitalNameEn" />
        </div>
        <div class="left" v-show="language=='cn'">
          <img src="https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/logo.png" class="logo" />
          <img src="https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/hospitalName1.png" class="hospitalName" />
          <img src="https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/hospitalName2.png" class="hospitalName" />
        </div>
        <div class="right" >
          <p v-show="showRight && language=='en'">DIAGNOSIS AND SURVIVAL PREDICTION OF GASTRIC CANCER</p>
          <p  v-show="showRight && language=='cn'">胃癌AI诊断及预后预测系统</p>
          <img class="rtImg" src="https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/photo.png" />
        </div>
      </div>
      <div class="headerRight"></div>
    </div>
</template>

<script>
export default {
    name:"v-Header",
    props:{
      showRight:{
        type:Boolean,
        default:true
      },
      language:{
        type:String,
        default:"en"
      }
    },
  data () {
    return {
      
    }
  },
  watch: {
    language(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
  .header{
    width:100%;
    height:93px;
    background:#6ea3d7;
    display:flex;
  }
  .headerLeft{
    flex:1;
    height:93px;
    background:url("https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/header.png");
    background-size:1px 93px;
    background-repeat:repeat-x;
  }
  .headerRight{
    flex:1;
    height:93px;
    background:url("https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/header.png");
    background-size:1px 93px;
    background-repeat:repeat-x;
  }
  .header{
    width:100%;
    height:93px;
    
  }
  .headerCn{
    width:90%;
    min-width:1200px;
    height:93px;
    margin:0 auto;
    background:url("https://ak-web-static.oss-cn-hangzhou.aliyuncs.com/ihs/wdHospital/header.png");
    background-size:100% 100%;
    display:flex;
  }
  .headerCn .left{
    flex:1;
    display:flex;
    align-items:center;
  }
  .headerCn .right{
    font-size:20px;
    color:#fff;
    padding-right:50px;
    line-height:93px;
    position:relative;
  }
   .headerCn .right .rtImg{
     position:absolute;
     right:0;
     top:0;
     height:93px;
     width:auto;
   }
  .logo{
    width:76px;
    height:76px;
  }
  .hospitalName{
    width:200px;
    margin-left:20px;
  }
   .hospitalNameEn{
     width:320px;
     margin-left:20px;
   }
</style>
