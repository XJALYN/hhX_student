module.exports = {
  // 获取验证码
  net_getCaptchas(){
    let t = {
      phone:this.data.phone
    }
    wx.$methods.getCaptchas(t).then(res=>{
      wx.showToast({
        title: '已发送'
      })
      this.countDown()
    })
  },
  // 认证手机
  net_certificationPhone(){
    let t = {
      phone:this.data.phone,
      captcha:this.data.code
    }
    wx.$methods.certificationPhone(t).then(res => {
      wx.showToast({
        title: '手机验证成功'
      })
      wx.$router.redirectToUploadID()
    })
  }
}