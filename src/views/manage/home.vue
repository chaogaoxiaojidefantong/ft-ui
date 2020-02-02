<template>
  <div>
    <div class="orderThree">
      <div class="order">
        <p class="orderFour">订单统计</p>
        <!-- <el-button type="warning" plain>警告按钮</el-button> -->
      </div>
      <div class="orderOne">
        <div class="orderTwo">
          <ft-card height="160px">
            <div slot="content-img">
              <img src="../../assets/home/sendfile.png" />
              <b>全部发稿</b>
            </div>
            <b slot="content-b">{{ myOrders.orders }}</b>
          </ft-card>
          <ft-divider></ft-divider>
        </div>
        <div class="orderTwo">
          <ft-card height="160px">
            <div slot="content-img">
              <img src="../../assets/home/audit.png" />
              <b>审核中</b>
            </div>
            <b slot="content-b">{{ myOrders.review }}</b>
          </ft-card>
          <ft-divider></ft-divider>
        </div>
        <div class="orderTwo">
          <ft-card height="160px" class="orderFour">
            <div slot="content-img">
              <img src="../../assets/home/publish.png" />
              <b>发布中</b>
            </div>
            <b slot="content-b">{{ myOrders.inRelease }}</b>
          </ft-card>
          <ft-divider></ft-divider>
        </div>
        <div class="orderTwo">
          <ft-card height="160px" class="orderFour">
            <div slot="content-img">
              <img src="../../assets/home/finish.png" />
              <b>完成</b>
            </div>
            <b slot="content-b">{{ myOrders.issued }}</b>
          </ft-card>
        </div>
      </div>
    </div>
    <div class="userInformation">
      <div class="userInformationOne">
        <p class="mg-title">账号信息</p>
        <ft-line class="mt10 mb10 mt30" leftCon="用户名">
          <b slot="right">{{ user.username }}</b>
        </ft-line>
        <ft-line class="mt10 " leftCon="会级">
          <b slot="right" class="mg-b-red">{{ user.level }}</b>
        </ft-line>
        <ft-line  :maohao="maohao">
          <b slot="right" class="mg-b-hint" v-if = "user.level != '代理'" >需要升级为代理请先联系商务客服再充值</b>
        </ft-line>
        <ft-line class="mt10 mb10" leftCon="密码">
          <b slot="right" class="mg-b-blue" @click="changePwdDialog = true"
            >修改密码</b
          >
        </ft-line>

        <ft-line class="mt10 mb10" leftCon="支付密码">
          <b slot="right" class="mg-b-blue" @click="payPassword = true"
            >修改密码</b
          >
        </ft-line>

        <ft-line class="mt10 mb10 flexRow" leftCon="所在地区">
          <div slot="right" class="flexRow">
            <b>{{ user.area }}</b>
            <p class="ml10 topUp" @click="areaEditDialog = true">修改</p>
          </div>
        </ft-line>
        <!-- 修改地区 -->
        <el-dialog
          title="修改所在地区"
          :visible="areaEditDialog"
          append-to-body
          width="380px"
          center
        >
          <span class="close" @click="areaEditDialog = false">X</span>
          <div class="modify">
            <p class="dangqianOne">编辑地区</p>
            <ft-cascader @getArr="getArr"></ft-cascader>
          </div>
          <div class="modify">
            <p class="dangqianOne">绑定手机</p>
            <span class="dangqianEng">{{ user.mobile }}</span>
          </div>
          <div class="modify inputOne">
            <p class="dangqianTwo">验证码</p>
            <el-input
              v-model="areaEditParam.code"
              placeholder="请输入密码"
              required
            ></el-input>
            <p class="dangqianSix" @click="getCode()">获取验证码</p>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitAreaEditParam"
              >提交</el-button
            >
          </span>
        </el-dialog>

        <ft-line class="mt10 mb10 flexRow" leftCon="账户余额">
          <div slot="right" class="flexRow">
            <b class="mg-b-red">{{ user.account }}</b>
            <b class="ml10">MET</b>
            <p class="topUp ml10" @click="goPay">充值</p>
          </div>
        </ft-line>
        <ft-line class="mt10 mb10" leftCon="推广链接">
          <div slot="right" class="flexRow">
            <b class="mg-b-blue">{{ url + user.inviteCode }}</b>
            <ft-copy
              :mes="url + user.inviteCode"
              @success="success"
              class="ml10"
            ></ft-copy>
          </div>
        </ft-line>
        <ft-line class="mt10 mb10" leftCon="推广人数">
          <div slot="right" class="flexRow">
            <b>{{ user.referrals }}</b>
          </div>
        </ft-line>
      </div>
      <div class="userInformationTwo">
        <p class="mg-title">系统公告</p>
        <ft-container2
          v-for="(item, index) in newsList"
          :key="index"
          justifyContent="space-between"
          class="border-bottom-grey mt15"
        >
          <b>{{ item.title }}</b>
          <b class="mg-b-hint">{{ item.create_time }}</b>
        </ft-container2>
        <div justifyContent="space-between" class="mt30 pagination">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[9, 18, 27, 36]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="news.count"
          >
          </el-pagination>
          <!-- <b class="mr10">第1/{{Math.ceil(news.count/9)}}页</b>
          <b class="mr10">跳至</b>
          <div>
            <input class="paginationOne" />
            <b class="mr10">页</b>
          </div>
          <ft-button>跳转</ft-button> -->
        </div>
      </div>
    </div>

    <!--修改密码弹窗 -->
    <el-dialog title="修改密码" :visible="changePwdDialog" width="470px" center>
      <span class="close" @click="changePwdDialog = false">X</span>
      <div class="modify">
        <p class="dangqianOne">当前密码</p>
        <el-input
          class="dangqian"
          v-model="dangqianPassword"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </div>
      <div class="modify">
        <p class="dangqianTwo">新密码</p>
        <el-input
          class="dangqianThree"
          v-model="xinmima"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </div>
      <div class="modify">
        <p class="dangqianOne">重复密码</p>
        <el-input
          class="dangqian"
          v-model="chongmima"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="passwordSubmit">提交</el-button>
      </span>
    </el-dialog>

    <!-- 修改支付密码 -->
    <el-dialog title="修改密码" :visible="payPassword" width="470px" center>
      <span class="close" @click="payPassword = false">X</span>
      <div class="modify">
        <p class="dangqianOne">当前密码</p>
        <el-input
          class="dangqian"
          v-model="currentPassword"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </div>
      <div class="modify">
        <p class="dangqianTwo">新密码</p>
        <el-input
          class="dangqianThree"
          v-model="NewsPassword"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </div>
      <div class="modify">
        <p class="dangqianOne">重复密码</p>
        <el-input
          class="dangqian"
          v-model="repeatPassword"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </div>
      <div class="forget">
        <p @click="payForget">忘记密码？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="paySubmit">提交</el-button>
      </span>
    </el-dialog>

    <!-- 忘记密码 -->
    <el-dialog
      title="手机验证"
      :visible="payPasswordForget"
      append-to-body
      width="380px"
      center
    >
      <span class="close" @click="payPasswordForget = false">X</span>
      <div class="modify">
        <p class="dangqianOne">绑定手机</p>
        <span class="dangqianEng">{{ user.mobile }}</span>
      </div>
      <div class="modify inputOne">
        <p class="dangqianTwo">验证码</p>
        <el-input v-model="payCode" placeholder="请输入验证码"></el-input>
        <p class="dangqianSix" @click="paySendCode">获取验证码</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="payPasswordNext">下一步</el-button>
      </span>
    </el-dialog>
    <!-- 设置新密码 -->
    <el-dialog
      title="设置密码"
      :visible="payPasswordNews"
      append-to-body
      width="400px"
      center
    >
      <span class="close" @click="payPasswordNews = false">X</span>
      <div class="modify inputTwo">
        <p class="dangqianTwo">新密码</p>
        <el-input
          class="dangqianThree"
          v-model="NewsInput"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </div>
      <div class="modify inputTwo">
        <p class="dangqianOne mr10">重复密码</p>
        <el-input
          type="password"
          v-model="repeatPass"
          placeholder="请输入密码"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="payNewSubmit">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import userMapper from "../../mapper/userMapper";
import mgPublicMapper from "../../mapper/mgPublicMapper";
import areaUtil from "../../libs/areaUtil";
import { stringUtil } from "../../components/ft/index";
export default {
  data() {
    return {
      spaceAround: "spaceAround",
      maohao: false,
      inviteUrl: "RMkloif300lf4jdd8pl29kjdmgloe0kul3j5Y3IkE32",
      url:'http://47.106.172.81:7796//#/regist?invite_code=',
      input: "",
      NewsInput: "", //当前密码
      payCode: "",
      repeatPass: "",
      payPassword: false, //修改支付密码
      payPasswordForget: false, //支付密码忘记密码
      payPasswordNews: false, //设置新密码
      areaEditDialog: false, //修改地区弹窗
      changePwdDialog: false, //修改密码弹窗
      currentPassword: "", //当前密码
      NewsPassword: "", //新密码
      repeatPassword: "", //重复新密码
      dangqianPassword: "", //修改密码旧密码
      xinmima: "", //修改密码新密码
      chongmima: "", //修改密码重复密码
      user: "",
      myOrders: "",
      news: "",
      newsList: [],
      current: 1,
      pageSize: 9,
      areaEditParam: {
        province: "",
        city: "",
        area: "",
        area_code: "",
        code: ""
      } //修改地区接口数据
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    /**
     * 初始化数据
     */
    initData() {
      let param = { size: this.pageSize, page: this.current };
      mgPublicMapper.home(param).then(
        res => {
          const { code, data } = res;
          if (code == 200) {
            const { user, news, myOrders } = data;
            this.user = user;
            this.news = news;
            this.myOrders = myOrders;
            this.newsList = news.list;
          }
        },
        err => {
           ;
        }
      );
    },
    success() {
      this.$message({
        message: "复制成功",
        type: "success"
      });
    },
    // 改变每页显示的条数
    handleSizeChange(val) {
      this.pageSize = val;
      this.current = 1;
      this.initData();
    },
    // 改变当前页
    handleCurrentChange(val) {
      this.current = val;
      this.initData();
    },
    /**
     * 修改密码弹窗点击忘记密码事件
     */
    passwordSubmit() {
      if (
        this.dangqianPassword == "" ||
        this.xinmima == "" ||
        this.chongmima == ""
      ) {
        return this.$message("请输入密码");
      }   
      if (this.xinmima != this.chongmima) {
        return this.$message("两次密码不一致");
      }
      let param = {
        password: this.dangqianPassword,
        newPass: this.xinmima,
        newPass2: this.chongmima
      };
      userMapper.changePwd(param).then(
        res => {
          if (res.code == 200) {
            this.successNotify(res.msg);
            setTimeout(() => {
              this.changePwdDialog = false;
            }, 200);
          } else {
            this.$message.error(res.msg);
          }
        },
        err => {
          this.$message.error(err.msg);
        }
      );
    },
    goPay(){
          this.$router.push({
          path: "recharge",
          
      })
    },

    //修改支付密码
    payForget() {
      this.payPasswordForget = !this.payPasswordForget;
      setTimeout(() => {
        this.payPassword = !this.payPassword;
      }, 200);
    },
    // 密码修改支付密码
    paySubmit() {
      if (
        this.currentPassword == "" ||
        this.NewsPassword == "" ||
        this.repeatPassword == ""
      ) {
        return this.$message("请输入密码");
      }
       if (
        this.currentPassword == " " ||
        this.NewsPassword == " " ||
        this.repeatPassword == " "
      ) {
        return this.$message("请输入有效密码");
      }
      if (this.NewsPassword != this.repeatPassword) {
        return this.$message("两次密码不一致");
      }
      let param = {
        payPass: this.currentPassword,
        newPay: this.NewsPassword,
        newPay2: this.repeatPassword
      };
      userMapper.changePayPass(param).then(
        res => {
           ;
          if (res.code == 200) {
            this.successNotify(res.msg);
            setTimeout(() => {
              this.payPassword = false;
            }, 200);
          } else {
            this.$message.error(res.msg);
          }
        },
        err => {
          this.$message.error(err.msg);
        }
      );
    },
    //支付密码新密码
    payPasswordNext() {
      this.payPasswordNews = !this.payPasswordNews;
      setTimeout(() => {
        this.payPasswordForget = !this.payPasswordForget;
      }, 200);
    },

    //获取验证码
    paySendCode() {
      let param = {};
      this.sendMsg(param).then(
        res => {
          this.successNotify(res);
        },
        err => {
          this.$message(err);
        }
      );
    },
    //忘记密码修改支付密码 提交
    payNewSubmit() {
      if (this.NewsInput == "" || this.repeatPass == "") {
        return this.$message("请输入密码");
      }
       if (this.NewsInput == " " || this.repeatPass == " ") {
        return this.$message("请输入有效密码");
      }
      if (this.NewsInput != this.repeatPass) {
        return this.$message("两次密码不一致");
      }
      let param = {
        code: this.payCode,
        newPay: this.repeatPass,
        payPass: this.NewsInput
      };
      userMapper.forgetPayPass(param).then(
        res => {
          if (res.code == 200) {
            this.successNotify(res.msg);
            setTimeout(() => {
              this.payPasswordNews = false;
            }, 200);
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
     * 修改地区提交
     */
    async submitAreaEditParam() {
      if (
        stringUtil.removeSpace(this.areaEditParam.code) &&
        this.areaEditParam.area
      ) {
        try {
          let res = await this.areaEdit(this.areaEditParam);
          this.successNotify(res);
          this.areaEditDialog = false;
          this.resetObject(this.areaEditParam);
        } catch (e) {
          this.$message.error(e);
        }
      } else {
        this.$message.error("不能有空值");
      }
    },
    /**
     * 获取选择的地区
     */
    getArr(arr) {
      let arrObj = areaUtil.getAreaObject(arr);
      this.areaEditParam = Object.assign(this.areaEditParam, arrObj);
    },
    /**
     * 获取验证码
     */
    async getCode() {
      try {
        const res = await this.sendMsg({});
        this.successNotify(res);
      } catch (e) {
        this.$message.error(e);
      }
    }
  }
};
</script>
<style lang="less">
.inputOne {
  .el-input__inner {
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
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 5px;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 110px !important;
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 110px !important;
  }
}
.inputTwo {
  .el-input__inner {
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
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 5px;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 240px !important;
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 240px !important;
  }
}
</style>
<style lang="less" scoped>
@import url("../../style/index");
.orderThree {
  background: #ffffff;
  height: 240px;
}
.order {
  display: flex;
  justify-content: space-between;
  padding: 32px 40px;
}
.orderOne {
  display: flex;
  justify-content: space-between;
  .orderTwo {
    width: 30vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.orderFour {
  font-size: 20px;
  font-weight: 600;
}
.userInformation {
  display: flex;
  justify-content: flex-start;
  margin-top: 35px;
  .userInformationOne {
    box-sizing: border-box;
    background: #ffffff;
    margin-right: 33px;
    padding: 33px 20px 205px 30px;
  }
  .userInformationTwo {
    width: 61vw;
    box-sizing: border-box;
    background: #ffffff;
    padding: 33px 40px;
    .pagination {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
.paginationOne {
  width: 2vw;
  margin-right: 10px;
}

.topUp {
  width: 56px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: #409eff;
  background-color: #ffffff;
  border: 1px solid #409eff;
  border-radius: 4px;
}
.modify {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
}
.dangqian {
  width: 330px;
  height: 36px;
  margin-left: 8px;
}
.dangqianOne {
  font-size: 14px;
  color: #475669;
  letter-spacing: 5px;
}
.dangqianTwo {
  font-size: 14px;
  color: #475669;
  letter-spacing: 14px;
}
.dangqianThree {
  width: 330px;
  height: 36px;
}
.forget {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #2d68f6;
}
// .dangqianFive {
//   width: 220px;
// }
.dangqianSix {
  width: 86px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #2d68f6;
  color: #ffffff;
  border-radius: 4px;
  margin-left: 10px;
}
.dangqianEng {
  color: #333333;
  font-size: 14px;
}
.close {
  color: #d3dce6;
  position: absolute;
  top: 20px;
  right: 23px;
  background: #ffffff;
}
</style>
