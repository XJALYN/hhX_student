module.exports = {
 net_courseMessage(){
   let t = {
     course_id:this.data.course_id
   }
   wx.$methods.courseMessages(t).then(res=>{
     console.log(res)
     this.setData({
       list:res.data
     })
   })
 },
  net_courseException(t){
    wx.showLoading({
      title: '',
    })
    wx.$methods.courseException(t).then(res=>{
      wx.hideLoading()
      this.net_courseMessage()
    })
  }
}