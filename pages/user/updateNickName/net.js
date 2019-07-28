
module.exports = {
  net_userProfileUpdate(t) {
    wx.$methods.userProfileUpdate(t).then(res => {
      if (res.code == 0) {
        wx.showToast({
          title: '成功',
        })
        setTimeout(()=>{
          wx.navigateBack({
          })
        },1000)
      }
    })
  }
}