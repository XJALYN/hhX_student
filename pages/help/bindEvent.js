
module.exports = {
  bindPushToHelpCenter(e){
    wx.$router.pushToHelpCenter()
  },
  bindCopyWx(e){
    wx.setClipboardData({
      data: 'tian3315jesther',
      success:res=>{
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  }
}