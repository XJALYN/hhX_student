
module.exports ={
  bindSelectedPayWay(e){
    var index = e.currentTarget.dataset.value
    console.log(index)
    this.setData({
      'payWay':index
    })
  },

  bindPay(e){
    if (this.data.payWay==0){
      this.net_payWx()
    }else{
      wx.showModal({
        title: '确认要进行付款吗?',
        confirmColor:'#FF6D10',
        success:res=>{
          this.net_payWallet()
        }
      })
    }
  }
}