

module.exports = {


  bindChangePayMode(e){
    this.setData({
      payModeIndex:e.detail.value
    })
  },
  bindPushToOrderPay(e){
    this.net_teachersOrderAdd()
  }
}