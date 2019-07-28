module.exports = {
  
  bindInput(e){
    this.data.text = e.detail.value
  },
  bindSubmit(e){
    if(this.data.text==''){
      wx.showToast({
        title: '请输入反馈的内容',
        icon:"none"
      })
      return
    }
    this.net_courseFeedback()
  }
}