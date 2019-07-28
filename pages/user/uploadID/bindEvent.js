module.exports = {
  // 绑定输入用户姓名
  bindInputName(e){
   this.setData({
     'real_name':e.detail.value
   })
  },
  bindInputID(e) {
   this.setData({
     'identified_card_number':e.detail.value
   })
  },
  // 绑定输入身份证前面
  bindUploadIDCardFront(e){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album','camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var filePath = res.tempFilePaths[0]
        if (filePath) {
          wx.showLoading({
            title: '',
            duration: 10000,
          })
          wx.$methods.upload(filePath, { classify: 2 }).then(res => {
            wx.hideLoading()
            this.setData({
              'positive_image_url': res.data.absolute_url,
            })
          })
        }
      }
    })
  },
  // 绑定上传身份证后面
  bindUploadIDCardBack(e){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album','camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var filePath = res.tempFilePaths[0]
        if (filePath) {
          wx.showLoading({
            title: '',
            duration: 10000,
          })
          wx.$methods.upload(filePath, { classify: 2 }).then(res => {
            wx.hideLoading()
            this.setData({
              'opposite_image_url': res.data.absolute_url,
            })
          })
        }
      }
    })
  },
  // 提交页面
  bindSubmit(e){
    if(this.data.real_name == ''){
      wx.$showToast('请输入真实姓名')
      return
    }
    if(this.data.identified_card_number == ''){
      wx.$showToast('请输入身份证号码')
      return
    }  
    if (this.data.positive_image_url=='') {
      wx.$showToast('请输入手持身份证正面照片')
      return
    }
    if(this.data.opposite_image_url==''){
      wx.$showToast('请输入手持身份证反面照片')
      return
    }
    wx.showModal({
      title: '请确保信息无误',
      content: '点击确认按钮提交',
      confirmColor:"#FF6D10",
      success:res=>{
        if(res.confirm){
          this.net_certificationRealNameUpdate()
        }
      }
    })

    
  }
 
}