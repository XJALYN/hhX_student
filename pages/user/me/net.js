
module.exports = {
  net_getUserProfile(){
    wx.$methods.getUserProfile().then(res=>{
      const { id,nick_name,avatar_url,gender,phone} = res.data
      this.setData({
        id,
        nick_name,
        avatar_url,
        gender,
        phone
      })
    })
  },
  net_accounts() {
    wx.$methods.accounts().then(res => {
      if (res.code == 0) {
        console.log(res)
        this.setData({
          'balance': res.data.balance
        })
      }
    })
  },
  // 获取实名认证状态
  net_certificationStatus() {
    wx.$methods.certificationStatus().then(res => {
      const { real_name_certified_status, is_phone_certified } = res.data
      this.setData({
        real_name_certified_status: real_name_certified_status,
         is_phone_certified
      })
    })
  }
}