<!--
 * @Author: your name
 * @Date: 2019-12-17 21:08:56
 * @LastEditTime: 2019-12-22 09:55:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\help\handbook.vue
 -->
<template>
    <div class="handbook">
<!-- 面包屑导航部分 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>帮助中心</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">操作手册</span></el-breadcrumb-item>
        </el-breadcrumb>
        
 <!-- 操作手册标签页部分 -->
        <el-tabs v-model="activeTab" type="card" @tab-click="handleClick" class="handbook-tab" ref="handbookTabs">
          
            <el-tab-pane label="新手指南" name="first" ref="tabcolor">
                <div class="newGuide">
                    <el-collapse v-model="activeName" accordion @change="handleChange" ref="elCollapse" class="elCollapse">
                        <el-collapse-item title="登录" name="1"  ref="collapseItem">
                            <div><p>1、打开摩引擎官网（wwwmoyingqing.com)</p></div>
                            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="注册" name="2">
                            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                        <el-collapse-item title="充值" name="3" >
                            <div>简化流程：设计简洁直观的操作流程；</div>
                            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        </el-collapse-item>
                       
                    </el-collapse>
                </div>     
            </el-tab-pane>
            <el-tab-pane label="媒体分发" name="second">媒体分发</el-tab-pane>
            <el-tab-pane label="MET钱包" name="third">MET钱包</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
     data() {
      return {
        activeTab: 'first',
        activeName:'1',
      
      }
    },
     methods: {
    //  tab栏效果
      handleClick(tab, event) {
        // console.log(tab, event);
        let idx = +tab.index;                   
        this.idx = idx;
        // console.log($('#handbook-tab').children().children().children().children().children()); 
       
      },
    // 手风琴效果
      handleChange(val){
        //  console.log(val);
        let index = val - 1;
        this.$nextTick(()=>{
            // $($('#elCollapse').children()[index]).addClass("activeRow").siblings().removeClass("activeRow");
            // $('#elCollapse').children()[index].classList.add("activeRow");
            // $($('#elCollapse').children()[0]).toggleClass("activeRow");
        })
      }
    }
}
</script>

<style lang="less">
   .handbook-tab{
     .el-tabs__item{
        width: 140px;
        height: 46px;
        margin: 0px;
        // margin-right: 4px;
        border: 0px;
        text-align: center;
        line-height: 46px;
    }
    .el-tabs__item.is-active{
        color: #fff;
        background-color: #2D68F6;
    }
   } 
    .elCollapse .el-collapse-item__header.is-active{
        background-color: #2D68F6 !important;
        color:#fff;
    }
    
</style>
<style lang="less" scoped>
@import url("../../../style/index");
.handbook{
    .t-text{
        color:#6792F9;
    }
    .handbook-tab{
        margin-top:60px;
        .newGuide{
            padding: 40px;
            padding-top:36px;
        }
        .elCollapse{
            /deep/.el-collapse-item__header{
                padding-left: 30PX;
                }
            p{
                font-family:MicrosoftYaHei;
                color:rgba(31,45,61,1);
            }
        }
    }
}
</style>