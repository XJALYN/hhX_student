module.exports = {

  net_securityStatus(){
    wx.$methods.securityStatus().then(res=>{
      this.setData({
        is_accepted_video: res.data.is_accepted_video
      })
    })
  },
  net_courseMessagesSnapshot(){
    wx.$methods.courseMessagesSnapshot().then(res=>{
      this.setData({
        'messageList':res.data
      })
    })
  }
}