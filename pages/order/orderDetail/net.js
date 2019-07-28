
module.exports = {
  net_orderDetail(){
    wx.$methods.orderDetail({id: this.data.orderId}).then(res=>{
      console.log(res)
      if(res.code==0){
        this.setData({
          order:res.data
        })
      }
    })
  },
  net_orderCancle(){
    let t = { 
      id: this.data.orderId,
      reason:'用户主动取消'
      }
    wx.$methods.orderCancle(t).then(res=>{
      wx.showToast({
        title: '订单已取消',
      })
      this.net_orderDetail()
    })
  }
  
}