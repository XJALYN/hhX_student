
module.exports = {
  net_userProfile(isRefresh) {
    if(!isRefresh){
      wx.showLoading({
        title: '',
        duration:10000
      })
    }
    wx.$methods.getUserProfile().then(res => {
      console.log(res)
      if (isRefresh) {
        wx.stopPullDownRefresh()
      }else{
        wx.hideLoading()
      }
      if (res.code == 0) {
        this.setData({
          'userProfile':res.data
        })
      }
    })
  },
  net_userProfileUpdate(t){
    wx.$methods.userProfileUpdate(t).then(res=>{
      if(res.code==0){
        wx.showToast({
          title: '成功',
        })
      }
    })
  },
  net_certificationStatus() {
    wx.$methods.certificationStatus().then(res => {
      const { real_name_certified_status } = res.data
      this.setData({
        real_name_certified_status: real_name_certified_status
      })
    })
  }
}