<template>
<div class="main">
  <v-Header :language="language"></v-Header>
  <v-Tab :hasPhoto="hasPhoto" @changePage="changePage" :language="language" @changeLang="changeLang"></v-Tab>
  <div class="home">
    <!-- 上传图片界面 -->
    <div class="content" v-show="hasPhoto==0">
      <div class="upImg">
        <el-upload
        class=""
        action="http://172.16.131.216:8888/detect"
        name="img"
        list-type="text"
        :show-file-list="false"
        :on-progress="upPro"
        :on-success="handleAvatarSuccess"
        :on-error="upError"
        :on-change="imgPreview"
        :before-upload="beforeAvatarUpload">
        <p v-show="language==='en'">Click to upload pathological image</p>
        <p v-show="language==='cn'">点击上传病理图片</p>
        </el-upload>
      </div>
      <div class="tips" v-show="language==='en'">
        <p>Note:</p>
        <p>1.Please upload digital hematoxylin and eosin stained pathological images(10x magnification)</p>
        <p>2.Supported format: PNG/JPG/JPEG/BMP (suggested file size not to exceed 5mb).</p>
      </div>
      <div class="tips" v-show="language==='cn'">
        <p>提示:</p>
        <p>1.病理图片为数字化HE染色病例图片(图像大小放大倍数为100倍)。</p>
        <p>2.图片文件类型支持PNG\JPG\JPEG\BMP,图片大小建议不超过5M。</p>
      </div>
    </div>

    <!-- 生成热力图的界面 -->
    <div class="photo" v-show="hasPhoto===1">
      <div class="picLeft">
        <p class="tit" v-show="language==='en'">Original Image</p>
        <p class="tit" v-show="language==='cn'">原始图</p>
        <div class="picLeftImg">
          <el-image
          class="elImg"
          :src="imageUrl"
          fit="contain"></el-image>
        </div>
        <div class="bottom">
          <p class="text">{{imageName}}</p>
          <div class="button">
            <el-upload
            class=""
            action="http://172.16.131.216:8888/detect"
            name="img"
            list-type="text"
            :show-file-list="false"
            :on-progress="upPro"
            :on-success="handleAvatarSuccess"
            :on-error="upError"
            :on-change="imgPreview"
            :before-upload="beforeAvatarUpload">
            <p v-show="language==='en'">Upload Image</p>
            <p v-show="language==='cn'">重新上传图片</p>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="picRight">
        <p class="tit" v-show="language==='en'">Heatmap</p>
        <p class="tit" v-show="language==='cn'">热力图</p>
        <div class="picRightImg">
          <el-image
          class="elImg"
          :src="baseUrl"
          fit="contain"></el-image>
        </div>
        <div class="bottom" v-show="baseUrl!=''&&language==='en'">
          <p class="text" :class="result=='Positive'?'red':'green'">Result：<span>{{result}}</span></p>
          <p class="text" v-if="result=='Positive'">Prognosis Risk Level：{{score}}</p>
        </div>
        <div class="bottom" v-show="baseUrl!=''&&language==='cn'">
          <p class="text red" v-if="result=='Positive'" >分析结果：<span>阳性</span></p>
          <p class="text green" v-if="result=='Negative'">分析结果：<span>阴性</span></p>
          <p class="text" v-if="result=='Positive'">预后风险等级：{{score}}</p>
        </div>
      </div>
    </div>

    <!-- 预后分析的界面 analysis-->
    <!-- <div class="photo" v-show="hasPhoto===2">
      <div class="picLeft">
        <p class="tit" v-show="language==='en'">Heatmap</p>
        <p class="tit" v-show="language==='cn'">热力图</p>
        <div class="picLeftImg">
           <el-image
            style="height:500px"
            :src="baseUrl"
            fit="contain"></el-image>
        </div>
        <div class="bottom">
          <p class="text" :class="result=='Positive'?'red':'green'" v-show="language==='en'">Result：<span>{{result}}</span></p>
          <p class="text red" v-if="language==='cn' && result=='Positive'">分析结果：<span>阳性</span></p>
          <p class="text green" v-if="language==='cn' && result=='Negative'">分析结果：<span>阴性</span></p>
        </div>
      </div>
      <div class="analysis">
        <p class="tit"></p>
        <div class="analysis-cn">
          <div class="analysis-list flex">
            <p v-show="language==='en'">Age:</p>
            <p v-show="language==='cn'">年龄:</p>
            <el-select v-model="ageVal" placeholder="" size="small">
              <el-option
                v-for="item in ageList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis-list flex">
            <p v-show="language==='en'">Gender:</p>
            <p v-show="language==='cn'">性别:</p>
            <el-select v-model="genderVal" placeholder="" size="small">
              <el-option
                v-for="item in genderList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis-list flex">
            <p v-show="language==='en'">Tumor Size:</p>
            <p v-show="language==='cn'">肿瘤最大直径:</p>
            <el-select v-model="ldVal" placeholder="" size="small">
              <el-option
                v-for="item in ldList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis-list flex">
            <p v-show="language==='en'">Histologic Grade:</p>
            <p v-show="language==='cn'">肿瘤分化程度:</p>
            <el-select v-model="nhgVal" placeholder="" size="small">
              <el-option
                v-for="item in nhgList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis-list flex">
            <p v-show="language==='en'">Pathologic TNM Stage:</p>
            <p v-show="language==='cn'">TNM分期:</p>
            <el-select v-model="psVal" placeholder="" size="small">
              <el-option
                v-for="item in psList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis-list flex">
            <p v-show="language==='en'">Pathologic T Stage:</p>
            <p v-show="language==='cn'">T分期:</p>
            <el-select v-model="pstVal" placeholder="" size="small">
              <el-option
                v-for="item in pstList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis-list flex">
            <p v-show="language==='en'">Pathologic N Stage:</p>
            <p v-show="language==='cn'">N分期:</p>
            <el-select v-model="psnVal" placeholder="" size="small">
              <el-option
                v-for="item in psnList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis-list flex">
            <p v-show="language==='en'">Pathologic M Stage:</p>
            <p v-show="language==='cn'">M分期:</p>
            <el-select v-model="psmVal" placeholder="" size="small">
              <el-option
                v-for="item in psmList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="analysis-btn" v-show="language==='en'" @click="analysis">Start analyzing</div>
          <div class="analysis-btn" v-show="language==='cn'" @click="analysis">开始评分分析</div>
        </div>
        <div class="analysis-bottom flex" v-show="showbottom">
          <p v-show="language==='en'">Risk Index：{{percentage}}</p>
          <p v-show="language==='cn'">评分结果：{{percentage}}</p>
          <div class="progress-box">
            <el-progress type="dashboard" :percentage="percentage*100" :color="colors" :format="format" ></el-progress>
            <div class="progress-text progress-text1">
              <p>0</p>
              <p>1</p>
            </div>
            <div class="progress-text progress-text2">
              <p v-show="language==='en'">Favorable Prognosis</p>
              <p v-show="language==='cn'">预后良好</p>
              <p v-show="language==='en'">Poor Prognosis</p>
              <p v-show="language==='cn'">预后良好</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>

import vHeader from "./header.vue"
import vTab from "./tab.vue"
import  { Loading }  from 'element-ui';
let loading;
export default {
  data () {
    return {
        imageUrl: '',//原始图片地址
        imageName:'',//原始图片名称
        load:'',
        hasPhoto:0,
        baseUrl:"",
        result:'',
        // ageList:[{value:0,label:">65"},{value:1,label:"<=65"},{value:2,label:"Missing"}],
        // ageVal:0,
        // genderList:[{value:0,label:"Female"},{value:1,label:"Male"},{value:2,label:"Missing"}],
        // genderVal:0,
        // ldList:[{value:0,label:"<=2mm"},{value:1,label:">2mm&&<=5mm"},{value:2,label:">5mm"},{value:3,label:"Missing"}],
        // ldVal:0,
        // nhgList:[{value:0,label:"G1"},{value:1,label:"G2"},{value:2,label:"G3"},{value:3,label:"G4"},{value:4,label:"Missing"}],
        // nhgVal:0,
        // psList:[{value:0,label:"1"},{value:1,label:"2"},{value:2,label:"3"},{value:3,label:"4"},{value:4,label:"Missing"}],
        // psVal:0,
        // pstList:[{value:0,label:"T1"},{value:1,label:"T2"},{value:2,label:"T3"},{value:3,label:"T4"},{value:4,label:"Missing"}],
        // pstVal:0,
        // psnList:[{value:0,label:"N0"},{value:1,label:"N1"},{value:2,label:"N2"},{value:3,label:"N3"},{value:4,label:"Missing"}],
        // psnVal:0,
        // psmList:[{value:0,label:"M0"},{value:1,label:"M1"},{value:2,label:"Missing"}],
        // psmVal:0,
        percentage: 0,
        colors: [
          {color: '#0ffc03', percentage: 50},
          {color: '#fc2c03', percentage: 100}
        ],
        language:"",
        grid:"",
        file:{},
        showbottom:false,
        showText:false,
        score:'0'
    }
  },
  components:{
    vHeader,
    vTab
  },
  mounted(){
      this.language=localStorage.getItem('language');
  },
  methods: {
    format(){
      return "Risk Index "+this.percentage
    },
       handleAvatarSuccess(res, file){//上传成功     
        this.endLoading();
        this.hasPhoto=1;
        this.result=res.Prediction[0];
        this.baseUrl="data:image/png;base64,"+res['Heatmap(b64code)'];
        this.grid=res.grid_topk
        if(this.result==='Positive'){
          this.analysis()
        }
      },
      beforeAvatarUpload(file) {//上传之前校验
       this.file=file
        this.baseUrl=""
        const isJPG = (file.type === 'image/jpeg' || file.type === 'image/jpg'|| file.type === 'image/png'|| file.type === 'image/bmp');
        const isLt5M = file.size / 1024 / 1024 < 5;

        if (!isJPG) {
          this.$message.error("Supported format: PNG/JPG/JPEG/BMP");
        }
        if (!isLt5M) {
          this.$message.error('suggested file size not to exceed 5mb');
        }
        return isJPG && isLt5M;
      },
      upError(){//上传失败
        let that=this;
        setTimeout(function(){
          that.$message.error('Failed to analyze');
          that.endLoading();
        },2000)
      },
      upPro(){//上传中
        this.startLoading();
      },
      startLoading(){//开始加载中
        loading = Loading.service({
          lock: true,
          text: 'Upload Complete, Now Analyzing...Please Wait',
          background: 'rgba(0, 0, 0, 0.5)'
        });
      },
      endLoading(){//结束加载中
        loading.close();
      },
      imgPreview(file){//上传图片
        this.imageUrl = URL.createObjectURL(file.raw);
        this.imageName=file.name;
        this.hasPhoto=1;
      },
      // getScore(){//获取评分的界面
      //   this.hasPhoto=2
      //   this.showbottom=false;
      // },
      changePage(val){
        this.hasPhoto=val;
      },
      analysis(){//开始分析
        var formdata=new FormData();
        // let file=this.file
        // let clin=[this.ageVal,this.genderVal,this.ldVal,this.nhgVal,this.psVal,this.pstVal,this.psnVal,this.psmVal]
        formdata.append('img',this.file);
        formdata.append('grid',this.grid);
        // formdata.append('clin',clin);
        let load = Loading.service({
          lock: true,
          text: 'Loading...',
          background: 'rgba(0, 0, 0, 0.5)'
        });
        this.$axios({
            method:'post',
            url:'http://172.16.131.216:8888/detect_risk_single', 
            data:formdata,
            headers:{
              "Content-Type":" multipart/form-data",
              "accept":"application/json"
              },
        }).then((res) =>{          //这里使用了ES6的语法
            this.showbottom=true;
            let data=res.data;
            // this.percentage=data['pred_risk']
            this.score=data['pred_risk']
            load.close();
        }).catch((error) =>{
            console.log(error)       //请求失败返回的数据
        })
      },
      changeLang(val){
        this.language=val;
        localStorage.setItem('language',val)
      }
    }
}
</script>

<style scoped>
  .flex{
    display:flex;
    align-items:center;
    justify-content: space-between;
  }
  .content{
    width:90%;
    min-width:1200px;
    margin-bottom:5%;
  }
  .upImg{
    width:50%;
    height:60px;
    background:#fff;
    border-radius:60px;
    margin:0 auto 40px auto;
    position:relative;
    
  }
  .upImg p{
    line-height:60px;
    text-indent:30px;
    font-size:16px;
  }
  .tips{
    width:50%;
    margin:0 auto;
  }
  .tips p{
    font-size:18px;
    color:#fff;
    line-height:30px;
  }
   .photo{
        width:82%;
        min-width:1200px;
        display:flex;
        justify-content:space-around;
    }
    .picLeft,.picRight{
        width:45%;
    }
    .photo .analysis{
       width:45%;
    }
    .photo .analysis-cn{
      background:#fff;
      padding:5px 0;
    }
    
    .picLeft .tit,.picRight .tit,.analysis .tit{
        font-size:16px;
        color:#fff;
        margin-bottom:10px;
        height:20px;
        line-height:20px;
    }
    .picLeftImg,.picRightImg{
        width:100%;
        height:auto;
        overflow:hidden;
    }
    .picLeftImg img,.picRightImg img{
        width:100%;
        height:auto;
        display:block;
    }
    .photo .bottom{
        width:100%;
        display:flex;
        align-items:center;
        justify-content: space-between;
        margin-top:20px;
    }
    .photo .bottom .text{
        font-size:14px;
        color:#fff;
    }
    .photo .bottom .text.red span{
      color:red;
      font-size:16px;
      font-weight:bold;
    }
     .photo .bottom .text.green span{
      color:yellowgreen;
      font-size:16px;
      font-weight:bold;
    }
    .photo .bottom .button{
        font-size:14px;
        padding:0 20px;
        height:30px;
        line-height:30px;
        border-radius:30px;
        color:#1989FA;
        background:#fff;
        cursor:pointer;
    }
    .analysis-list{
      padding:5px 40px;
    }
    .analysis-btn{
      background:#1989FA;
      height:40px;
      text-align:center;
      line-height:40px;
      color:#fff;
      margin:15px 40px;
      cursor:pointer;
    }
    .analysis-bottom p{
      font-size:16px;
      color:#fff;
    }
    .progress-box{
      width:126px;
      margin:20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .progress-text{
      display:flex;
      align-items:center;
      justify-content: space-between;
      color:#fff;
    }
    .progress-text1{
      width:90px;
      margin-top:-10px;
    }
    .progress-text2{
      width:130px;
    }
    .progress-text p{
      font-size:10px;
    }
    .elImg{
      height:calc(100vh - 353px);
    }
</style>
