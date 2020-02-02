export  interface ConfigIe{
   dev: string,//测试环境
   pro: string,//生产环境
   cookieExpires: number//Cookie的生存周期
   imgBaseUrl:string,
   successCode:number//后台返回的成功验证码
   failCode:number//后台返回失败的验证码
   errMsg:string,//错误返回信息
   capchaUrl:string,
   acceptType:string,//图片上传接收的类型
}
 class Config implements ConfigIe{
  readonly dev:string='http://47.106.172.81:7800/'
  readonly pro:string="http://47.106.172.81:7800/"
  readonly cookieExpires:number=1/6
  readonly imgBaseUrl:string='http://47.106.172.81:7795/'
  readonly successCode:number=200
  readonly failCode:number=400
  readonly errMsg:string='服务器内部出错'
  readonly uploadUrl:string='http://47.106.172.81:7800/api/v1/uploadFile'
  readonly capchaUrl:string=process.env.NODE_ENV === 'development' ? this.dev+'api/v1/captcha' : this.pro+'api/v1/captcha'
  readonly acceptType:string='application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}
export default new Config();