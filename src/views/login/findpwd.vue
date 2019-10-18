<template>
 <div class='findpwdPage'>
      <Card class='card'>
        <p slot="title">
                找回密码
        </p>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="找回的邮箱">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem >
                <Input type="password" v-model="formInline.code" placeholder="验证码" v-if="state">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="新密码" v-if="state">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="sendCode()" v-if="!state">发送验证码</Button>
                <Button type="primary" @click="handleSubmit()" v-if="state">确认修改</Button>
            </FormItem>
        </Form>
        </Form>     
      </Card>
</div>   
</template>
<script>
import {emailCheck,updateUserByCode} from '@/api/api.js'
export default {
    data(){
        return{
            state:false,//false为未发送过验证码
             formInline: {
                    user: '',
                    password: '',
                    code:''
                },
                ruleInline: {
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 3, message: 'The password length cannot be less than 3 bits', trigger: 'blur' }
                    ]
                }
            }     
    },
    methods:{
        handleSubmit(){
            let data={userEmail:this.formInline.user,verifyCode:this.formInline.code,userPwd:this.formInline.password}            
            updateUserByCode(data).then(res=>{
                   this.$Message.success('修改成功，请登录') 
                   this.$router.push({name:'login'})
            })
        },
        sendCode(){
            let data={userEmail:this.formInline.user}            
            emailCheck(data).then(res=>{
                this.$Message.success('发送验证码成功')
                this.state=true
            })
        }
    }
}
</script>
<style lang="less">
.findpwdPage{
     background-image: url('../../assets/11.png');
      width: 100%;
     height: 100%;
     .card{
         width:350px;
     display: inline-block;
     margin:200px 10px 0px 900px;
     }
}
</style>

