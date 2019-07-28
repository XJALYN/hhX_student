module.exports = {
  net_courseFeedback(){
    let t = {
      lesson_id:this.data.lesson_id,
      content: this.data.text,
    }
    wx.$methods.courseFeedback(t).then(res=>{
     wx.showToast({
        title: '反馈成功',
      })
    })
    setTimeout(res=>{
      wx.navigateBack({
      })
    },1500)
  }
}