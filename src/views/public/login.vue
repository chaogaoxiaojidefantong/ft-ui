<template>
    <div>
        <ft-container3 width='100vw' height='100vh' class="flexCenter">
            <img src="../../assets/common/leimu.jpg" slot="bg"/>
            <div slot="content" class="div-border bg1 ml10">
                <el-input
                    placeholder="邮箱"
                    v-model="email"
                    class='mt10 width300 mr10'                
                    clearable>
                </el-input>
                <br>
                <el-input
                    placeholder="密码"
                    v-model="password"  
                    class='mt10 width300'    
                    type="password"          
                    clearable>
                </el-input>
                <ft-button @click="login" class='mt10 mb10'>登录</ft-button>
            </div>
        </ft-container3> 

    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import userMapper from '../../mapper/userMapper'
import CommonIe from '../../interface/CommonIe'
import UserIe from '../../interface/UserIe'
export default Vue.extend({
    data(){
        return{
            email:'',
            password:''
        }
    },
    mounted(){
        
    },
    methods:{
        login(){
            let data:UserIe.LoginParamIe={userEmail:this.email,userPwd:this.password}
            this.loginActions(data).then((res:string)=>{
            this.$message({
                message: res,
                type: 'success'
            });
            setTimeout(()=>{
                this.$router.push({name:'mgindexHome'})
            },1000);
            },(err:any)=>{
                
            })

        }
    }
})
</script>
<style lang="less" scoped>
@import url('../../style/index');
</style>