module.exports = {
  net_accounts() {
    wx.$methods.accounts().then(res => {
      if (res.code == 0) {
        console.log(res)
        this.setData({
          'amount': res.data.balance
        })
      }
    })
  },
  net_withdraw(){
    let t= {
      amount: this.data.depositAmount
    }
    wx.$methods.withdraw(t).then(res=>{
      wx.showToast({
        title: '提现成功',
      })
      this.net_accounts()
    })
  }
}