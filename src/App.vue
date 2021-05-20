<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;padding:0;
}
input:focus{
  outline: none;
}
.el-upload{
  width:100%;
  text-align:left;
}
.el-upload__input{
   display:none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
  min-width:1200px;
}
.main{
  width:100%;
  height:100%;
  min-width:1200px;
}
.home{
  width:100%;
  height:calc(100% - 153px);
  background:#6ea3d7 url('../src/assets/bg.png');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  min-width:1200px;
  display:flex;
  align-items:center;
  justify-content: center;
}
html,body{
  margin:0;
  padding:0;
   width:100%;
  height:100%;
}
.el-image__error{
  background:transparent;
  color:transparent;
}
.el-menu-item.is-active {
   /* background-color: rgb(231, 235, 240) !important; */
}
.el-submenu__title i{
  color:#fff !important;
}
.el-menu.el-menu--horizontal{
  border:0 !important;
   background:rgba(48, 117, 177, .1) !important;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
   background:rgba(48, 117, 177, .1) !important;
}
.el-loading-spinner .el-loading-text{
  font-size:16px;
  color:#fff;
}
.el-loading-spinner .path{
  stroke:#fff;
}
.el-progress{
  width:126px;		
}
/* 渐变进度条 */
.el-bg-inner-running .el-progress-bar__inner{
  background-color: unset;
  background-image: linear-gradient(to right, #3587d8 , #6855ff);
}
.el-bg-inner-error .el-progress-bar__inner{
  background-image: linear-gradient(to right, #3587d8 , #fb3a7e);
}
.el-bg-inner-done .el-progress-bar__inner{
  background-image: linear-gradient(to right, #3587d8 , #53ff54);
}
.el-progress__text{
  font-size:12px !important;
  color:#fff !important;
}
</style>
