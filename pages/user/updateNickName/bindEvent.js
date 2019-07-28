module.exports = {
  // 绑定输入
  bindInput(e){
    var text = e.detail.value
    this.data.nickname = text
  },
  // 保存
  bindSave(e){
    if (this.data.nickname==''){
      wx.showToast({
        title: '用户昵称不能为空',
        icon:"none"
      })
      return
    }
    this.net_userProfileUpdate({ "nick_name": this.data.nickname})
  }
}