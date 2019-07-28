
module.exports = {
  net_recharge(){
    wx.$methods.recharge({"amount":this.data.fee}).then(res=>{
      console.log(res)
      if(res.code==0){
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.sign,
          success:res=>{
            wx.showToast({
              title: '充值成功',
            })
            setTimeout(res => {
              wx.navigateBack({
              })
            }, 1000)
          },
          fail:res=>{
            wx.showToast({
              title: '充值失败',
              icon:"none"
            })
          }
        })
      }
    })
  }
}