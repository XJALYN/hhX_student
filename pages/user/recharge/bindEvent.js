var pattern = require("../../../utils/pattern.js")
module.exports = {
  bindInputFee(e) {
    var value = e.detail.value
    this.setData({
      'fee': value
    })
   
    
  },
  bindRecharge(e){
    if (!pattern.testMoney(this.data.fee)){
      wx.showToast({
        title: '输入格式不正确',
        icon:"none"
      })
      return
    }
    if (this.data.fee==0){
      wx.showToast({
        title: '充值金额最少1元',
        icon: "none"
      })
      return
    }
    this.net_recharge()
  }
  
}
