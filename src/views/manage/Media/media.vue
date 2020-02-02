<template>
  <div class="mediarRlease">
    <div class="media">
      <p class="f20 fw600 c1">发稿进度</p>
      <div class="flexStart">
        <div class="flexBetween">
          <div class="flexStart">
            <p class="mediaFour">1</p>
            <p class="f14 c1">编辑稿件</p>
            <p class="mediaSix"></p>
          </div>
        </div>
        <div class="flexBetween">
          <div class="flexStart">
            <p class="mediaEng">2</p>
            <p class="f14 c6">选择渠道</p>
            <p class="editorOne"></p>
          </div>
        </div>
        <div class="flexBetween">
          <div class="flexStart">
            <p class="mediaEng">3</p>
            <p class="f14 c6">已处理</p>
            <p class="editorOne"></p>
          </div>
        </div>
        <div class="flexBetween">
          <div class="flexStart">
            <p class="mediaEng">4</p>
            <p class="f14 c6">发布中</p>
            <p class="editorOne"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="editorTwo">
      <p class="editorThree f20 fw600 c1 mb10">编辑稿件</p>
      <el-form ref="form" label-width="80px" :model="upArticleParam">
        <div class="editorFive mb10">
          <span class="mr20 f14 c7">媒体类型</span>
          <el-select v-model="upArticleParam.type" placeholder="请选择媒体类型">
            <el-option label="主流媒体" value="1"></el-option>
            <el-option label="自媒体" value="2"></el-option>
            <el-option label="区块链媒体" value="3"></el-option>
            <el-option label="快讯" value="4"></el-option>
          </el-select>
        </div>
        <div class="flexStart upload">
          <span class=" f14 c7">文档上传</span>
            <el-upload
              class="upload-demo"
              :action="uploadFileUrl"
              :on-success="uploadFileSuccess"
              :data="uploadFileParam"
              :accept="acceptType"
            >
            <el-button size="small" type="primary" class="uploadBtn">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              请上传10M内文档，DOCX
            </div>
          </el-upload>
           <el-upload
              class="upload-demo"
              action="http://localhost:8090/Canteen/uploadDoc"
              :on-success="uploadFileSuccess"
              :data="uploadFileParam"
              :accept="acceptType"
            >
            <el-button size="small" type="primary" class="uploadBtn">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              请上传10M内文档，DOCX
            </div>
          </el-upload>
      </div>
      <div class="titleOne flexStart mb20 mt10 ">
        <span class=" f14 c7" style="width:75px">标题</span>
        <el-input
          placeholder="请输入30字以内标题文字"
          v-model="upArticleParam.title"
            maxlength="30"
          ></el-input>
        </div>
        <div class="content">
          <span class=" f14 c7" style="width:85px">内容</span>
          <vue-editor v-model="upArticleParam.content"></vue-editor>
        </div>
      </el-form>
      <div class="titleThree flexStart">
        <span class="f14 c7" style="width:75px">备注</span>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="beizhu"
        ></el-input>
      </div>
      <div class="titleFour">
        <span class="f14 c7" style="width:75px">金额</span>
        <p class="f14 c11">{{usable}}Met</p>
      </div>
      <div class="titleFive">
        <el-button type="primary" @click="previewGo">预览</el-button>
        <el-button plain @click="nextStep()">下一步</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import mediaMapper from "../../../mapper/mediaMapper";
import Vue from "vue";
import { getToken } from "../../../libs/util";
import { VueEditor } from "vue2-editor";
import CommonIe from "../../../interface/common-ie";
import ArticleIe from "../../../interface/articleIe";
import { stringUtil, numberUtil } from '../../../components/ft';
let vueEditor: any = VueEditor;
Vue.component("VueEditor", vueEditor);
export default Vue.extend({
  data() {
    return {
      beizhu: "", //备注
      usable:'',
      upArticleParam: {
        //发稿的参数
        type: '',
        content:'',
        title: ''
      },
      mediaTitle:'',
      mediaContent:'',

    };
  },

  computed: {
    /**
     * 上传地址
     */
    uploadFileUrl() {
      return this.$config.uploadUrl;
    },
    /**
     * 上传文件传的参数
     */ uploadFileParam() {
      return { token: getToken() };
    },
    /**
     * 图片上传接收的类型
     */
    acceptType() {
      return this.$config.acceptType;
    }

    
  },
    created() {
      Object.preventExtensions(this.upArticleParam);
      if(location.hash.indexOf("medias=") > 0){
          this.upArticleParam.title = this.$route.query.medias.title;
          this.upArticleParam.content = this.$route.query.medias.content;
      }
      this.getBalance();
    },
   
  
  methods: {
    // 获取余额
    getBalance() {
      let param = { symbol:'MET' };
      mediaMapper.getAccount(param).then(
        (result: any) => {
          let res = result as CommonIe.ResParamIe;
          if (res.code == 200) {         
            this.usable=numberUtil.getPreciseNum(parseFloat(res.data.usable),6);  
          } else {
            this.$message.error(res.msg);
          }
        },
        err => {
          this.$message.error(err.msg);
        }
      );
    },
    /**
     * 上传成功后的提示
     */
    uploadFileSuccess(res: CommonIe.ResParamIe) {
      this.successNotify(res.msg);
      let data: CommonIe.UploadFileResultIe = res.data;
      this.upArticleParam.content =stringUtil.getHtmlBody(data.content);
      this.upArticleParam.title = data.title;
    },

    /**
     * 跳转到预览的页面
     */
    previewGo() {
      sessionStorage.setItem("content", this.upArticleParam.content);
      sessionStorage.setItem("title", this.upArticleParam.title);
      sessionStorage.setItem("beizhu", this.beizhu);
      let routeUrl = this.$router.resolve({
        name: "publicUserPreview"
      });
      window.open(routeUrl.href, "_blank");
    },
    /**
     * 下一步的操作
     */
    nextStep() {
      if (this.upArticleParam.type == "") {
        this.$message("请选择媒体类型");
        return;
      }
      if(this.upArticleParam.title == ''){
        this.$message('请填写标题')
        return
      }
       if(this.upArticleParam.content == ''){
        this.$message('请填写内容')
        return
      }
      //媒体
      if(this.upArticleParam.type == '1' ){
          this.$router.push({
        name:'mgMediaChoose',
        query: { typeName:'主流媒体',type:1 }
      })    
      }else if(this.upArticleParam.type == '2'){
         //自媒体
          this.$router.push({
        name: "mgMediaChoose",
        query: { typeName:'自媒体',type:2 }
      })
      }else if(this.upArticleParam.type == '3'){
         //区块链媒体
          this.$router.push({
          name: "mgMediaChoose",
          query: { typeName:'区块链',type:3 }
      })
      } else{
         //快讯
          this.$router.push({
        name: "mgMediaChoose",
        query: { typeName:'快讯',type:4 }    
      })
}
this.saveData();
},  
    /**
     * 存储内容到sessionStorage
     */
    saveData() {
      let upArticleParam: ArticleIe.UpArticleParamIe = this.upArticleParam;
      let data = JSON.stringify({
        title: this.upArticleParam.title,
        content: this.upArticleParam.content
      });
      sessionStorage.setItem(Vue.$config.articleSessionStorageName, data);
    }
  }
});
</script>
<style lang="less" scoped>
@import url("../../../style/index.less");
.media {
  height: 130px;
  background: #ffffff;
  padding: 25px 40px 0px 40px;
  margin-bottom: 28px;
  .mediaFour {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(45, 104, 246, 1);
    border-radius: 15px;
    color: #ffffff;
    margin-right: 13px;
  }
  .mediaSix {
    width: 78px;
    height: 2px;
    background: #2d68f6;
    margin-left: 24px;
    margin-right: 14px;
  }
  .mediaEng {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #bfbfbf;
    border-radius: 15px;
    color: #bfbfbf;
    margin-right: 13px;
  }

  .editorOne {
    width: 78px;
    height: 2px;
    background: #bfbfbf;
    margin-left: 24px;
    margin-right: 14px;
  }
}

.editorTwo {
  background: #ffffff;
  padding: 30px 40px 0 40px;
  min-height: 800px;
}
.uploadOne {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.uploadBtn {
  margin-left: 20px;
}

.content {
  width: 800px;
  display: flex;
  justify-content: flex-start;
  min-height: 500px;
  margin-bottom: 10px;
}

.titleFour {
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e0e6ed;
}
.titleFive {
  width: 800px;
  display: flex;
  justify-content: flex-end;
}
</style>

<style>
/* 文件上传 */
.el-upload__tip {
  margin-left: 20px;
}
.titleOne .el-input {
  height: 36px;
  width: 50%;
}
.ql-container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 500px !important;
  margin: 0;
  position: relative;
}
.ql-editor {
  width: 700px;
  min-height: 200px;
  font-size: 16px;
}
.editorFive .el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 28px;
  line-height: 28px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 200px;
}
.titleOne .el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 28px;
  line-height: 28px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 500px;
}
.titleThree .el-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 730px;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
