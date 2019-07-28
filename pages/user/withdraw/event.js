module.exports = {

  bindInputMoney(e){
   let value = e.detail.value
   let str1 = value.toString().split('.')[0]
    let str2 = value.toString().split('.')[1]
    if (str2 && str2.length > 2){
      this.setData({
        'depositAmount': parseFloat(value).toFixed(2)
      })
    }else{
      this.setData({
        'depositAmount': value
      })
    }
  },

  bindTapAll(e){
   this.setData({
     'depositAmount':this.data.amount
   })
  },

  bindToWithdraw(e){
    if (this.data.depositAmount > this.data.amount){
      wx.showToast({
        title: '余额不足',
        icon:"none"
      })
      return
    } else if (this.data.depositAmount < 1){
      wx.showToast({
        title: '提现最少1元',
        icon: "none"
      })
      return
    }
    this.net_withdraw()
  }

}