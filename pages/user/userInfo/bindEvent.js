
module.exports = {

  bindChoiceAvator(e){
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:res=> {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var filePath = res.tempFilePaths[0]
        if (filePath) {
          wx.showLoading({
            title: '',
            duration: 10000,
          })
          wx.$methods.upload(filePath, { classify:2}).then(res=>{
            
            wx.hideLoading()
           
            that.setData({
              'userProfile.avatar_url': res.data.absolute_url,
            })
            this.net_userProfileUpdate({ avatar_url: res.data.url })
          })
        }
      }
    })
  },

  bindPushToUpdateNickName(e){
    wx.$router.pushToUpdateNickName({ id: this.data.userProfile.id,nickname:this.data.userProfile.nick_name})
  },

  bindChoiceSex(e){
    var index = e.detail.value
    this.setData({
      'userProfile.gender':index
    })
   this.net_userProfileUpdate({ gender: index })
  },

  bindChoicePhone(e){
    wx.chooseContact({
      success:res=>{
        console.log(res)
      },fail:res=>{
        console.log(res)
      }
    })
  },
  bindPushToRealName(e){
    if (this.data.real_name_certified_status==-1){
      wx.$router.pushToBindPhone()
    }else{
     wx.$router.pushToCertification()
    }
    
  }
}