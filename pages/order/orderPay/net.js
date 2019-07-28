
module.exports = {
  net_orderPayment(){
    let t = { 
      paid_order_id: this.data.paidOrderId
     }
    wx.$methods.orderPayment(t).then(res=>{
    console.log(res)
    if(res.code==0){
      this.setData({
        account: res.data.paid_amount,
        balanceEnough: res.data.is_balance_enough
      })
     }
    })
  },

  net_payWallet(){
    let t = { paid_order_id: this.data.paidOrderId }
    wx.$methods.payWallet(t).then(res=>{
     if(res.code==0){
       wx.$router.redirectToOrderPaySuccess()
      }
    })
  },
  
  net_payWx(){
    let t = { paid_order_id: this.data.paidOrderId }
    wx.$methods.payWx(t).then(res=>{
     let data = res.data
      wx.requestPayment({
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.sign,
        success: res => {
          wx.$router.redirectToOrderPaySuccess()
        }, fail: res => {
          wx.showToast({
            title: '支付失败',
            icon:'none'
          })
        }
      })
    })
   
  }
}