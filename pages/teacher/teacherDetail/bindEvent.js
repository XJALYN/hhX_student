
module.exports = {
  bindShowCourseSelected(e){
    if (!this.data.is_phone_certified){
      wx.showModal({
        title: '选课前请先进行实名认证',
        content: '',
        confirmColor: "#FF6D10",
        success: res => {
          if (res.confirm) {
            wx.$router.pushToBindPhone()
          }
        }
      })
      return
    }


    if (this.data.real_name_certified_status == -1 || this.data.real_name_certified_status == 2){
   wx.showModal({
     title: '选课前请先进行实名认证',
     content: '',
     confirmColor:"#FF6D10",
     success:res=>{
       if(res.confirm){
         wx.$router.pushToUploadID()
       }
     }
     })
     return
    } else if (this.data.real_name_certified_status == 0){
      wx.showModal({
        title: '你的认证信息正在审核中',
        content: '审核通过后,方可进行选课',
        confirmColor: "#FF6D10",
        showCancel:false,
        success: res => {
        }
      })
      return
    }
    this.setData({
      showCourseSelected:true
    })

    
  },
  bindPushToTeacherCommentList(e){
    wx.$router.pushToTeacherCommentList({teacherId: this.data.teacherId})
  }
}