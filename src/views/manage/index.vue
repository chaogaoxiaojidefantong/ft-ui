<template>
  <div class="index">
    <el-container>
      <el-aside width="320px">
        <el-menu
          @open="openMenu"
          @select="selectMenu"
          @close="closeMenu"
          router
          :default-active="$route.path" 
        >
          <section class="index-title">
            <img v-lazy="logoUrl" class="logo hover-pointer" @click="$router.push({name:'engine'})"/>
            <b class="mg-b-grey " >—— 媒体资源</b>
          </section>
          <el-menu-item index="/mg/home" class="homebu">
            <div slot="title">
              <img src="../../assets/manage/index/home_blue.png" class="index-small-icon" />
              <b class="mg-b-black">首页</b>
            </div>
          </el-menu-item>
          <el-submenu index="2" v-level  data-level='1' data-name='媒体发布'>
            <div class="indexgo" slot="title">
              <img src="../../assets/manage/index/media_blue.png" class="index-small-icon" />
              <b class="mg-b-black">媒体分发</b>
            </div>
            <el-menu-item-group>
              <el-menu-item index="/mg/media/media">媒体发布</el-menu-item>
              <el-menu-item index="/mg/media/order">订单管理</el-menu-item>
              <el-menu-item index="/mg/media/spreadPrice/mainMedia">媒体价格</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
           <el-submenu index="3" data-name='推广发布' v-level>
            <div class="indexgo" slot="title">
              <img src="../../assets/manage/index/pop-publish.png" class="index-small-icon" />
              <b class="mg-b-black">推广发布</b>
            </div>
            <el-menu-item-group>
              <el-menu-item index="/mg/releaseList">发布列表</el-menu-item>
              <el-menu-item index="reward">奖励明细</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4" v-level  data-level='1' data-name='财务管理'>
            <div class="indexgo" slot="title">
              <img src="../../assets/manage/index/financial_blue.png" class="index-small-icon" />
              <b class="mg-b-black">财务管理</b>
            </div>
            <el-menu-item-group>
              <el-menu-item index="/mg/dispatches">发稿明细</el-menu-item>
              <el-menu-item index="/mg/recharge">我要充值</el-menu-item>
              <el-menu-item index="/mg/capital">资金明细</el-menu-item>
              <el-menu-item index="/mg/wallet">钱包</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5" v-level  data-level='1' data-name='推广广场'>
            <div class="indexgo" slot="title">
              <img src="../../assets/manage/index/promote_blue.png" class="index-small-icon" />
              <b class="mg-b-black">推广广场</b>
            </div>
            <el-menu-item index="/mg/task">任务列表</el-menu-item>
            <el-menu-item index="/mg/award">奖励明细</el-menu-item>
          </el-submenu>
          <el-submenu index="6" v-level  data-level='1' data-name='我要推广'>
            <div class="indexgo" slot="title">
              <img src="../../assets/manage/index/generalize_blue.png" class="index-small-icon" />
              <b class="mg-b-black">我要推广</b>
            </div>
            <el-menu-item index="/mg/popularize">推广明细</el-menu-item>
            <el-menu-item index="/mg/rebate">发稿返利</el-menu-item>
          </el-submenu>
          <el-submenu index="7" v-level  data-level='1' data-name='帮助中心'>
            <div class="indexgo" slot="title">
              <img src="../../assets/manage/index/help_blue.png" class="index-small-icon" />
              <b class="mg-b-black">帮助中心</b>
            </div>
            <el-menu-item index="/mg/handbook">操作手册</el-menu-item>
            <el-menu-item index="/mg/feedback">问题反馈</el-menu-item>
          </el-submenu>
        </el-menu>
        <div class="kefu">
          <div class="kefuOne">摩引擎官方客服</div>
          <img src="../../assets/home/kefu.png" class="code" />
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <span class="user mr20">{{user.username}}</span>
            <div class="exit" @click="userLogout">退出</div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState:userState,mapMutations:userMutations} = createNamespacedHelpers('user')
const logoUrl = require("../../assets/common/logo.png");
import userUtil from '../../libs/userUtil'
export default {
  data() {
    return {
      logoUrl: logoUrl,
      activeBar: "1"
    };
  },
  computed: {
    ...userState(['token','level']   
    ),
    // onRoutes() {
    //     return this.$route.path.replace('/','')
    //     this.activerouter = window.location.pathname;
    // },
    user(){
      return userUtil.getUser();
    }
  },
  methods: {
    ...userMutations(['setLevel']),
  //数据初始化
    initData(){
    },
    /**
     * 退出登录
     */
    userLogout(){
      this.logout().then(res=>{
        this.successNotify(res);
        setTimeout(()=>{
          this.$router.push({name:'engine'})
        },2000)
      },err=>{
        this.$message.error(err);
      })
    },
    openMenu(item) {
      this.activeBar = item;
      this.toggleView(item);
    },
    closeMenu(item) {
      //this.activeBar=item
    },
    selectMenu(item,keyPath) {

    },
    toggleView(num) {
      if (num == 1) {
        this.$router.push({ name: "mgindexHome" });
      }
    }
  }
};
</script>
<style>
.el-submenu__title {
  padding: 0px !important;
}
.homebu .el-icon-arrow-down:before {
  content: unset !important;
}
</style>
<style lang="less" scoped>
@import url("../../style/index");
.el-aside {
  color: #333;
  height: 100vh;
  background-color: #ffffffff !important;
  box-shadow: 2px 0px 8px 0px rgba(221, 231, 255, 0.5);
}

.el-menu-item {
  padding-left: 60px !important;
}
.index {
  .isActive {
    background-color: #2d68f6ff;
  }
  &-title {
    margin-top: 24px;
    margin-left: 38px;
    display: flex;
    margin-bottom: 50px;
    .logo {
      margin-right: 10px;
    }
    .mg-b-grey {
      line-height: 50px;
    }
  }
  &go {
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 60px;
    // background-color: @DarkBlue;
  }
  &-small-icon {
    width: 20px;
    height: 20px;
    margin-right: 40px;
  }
  .view-con {
    padding: 36px;
  }
}
.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 36px;
}
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.exit {
  width: 68px;
  background: #2d68f6;
  height: 28px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  border-radius: 3px;
}
.kefu {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.code {
  width: 144px;
  height: 144px;
}
.kefuOne {
  font-size: 14px;
  color: #999999;
}
.user {
  padding-right: 20px;
}



</style>