module.exports = {
  // 获取实名认证信息
  net_certificationRealName(){
    wx.$methods.certificationRealName().then(res=>{
      const { certified_status, id, identified_card_number, opposite_image_url, positive_image_url, real_name} = res.data
      this.setData({
        id,
        certified_status,
        real_name,
        identified_card_number,
        opposite_image_url,
        positive_image_url
      })
    })
  },

  net_certificationRealNameUpdate(){
    let t = {
      id:this.data.id,
      real_name:this.data.real_name,
      identified_card_number: this.data.identified_card_number,
      opposite_image_url: this.data.opposite_image_url,
      positive_image_url: this.data.positive_image_url
    }
    wx.$methods.certificationRealNameUpdate(t).then(res=>{
      wx.showModal({
        title: '已提交审核',
        content: '审核结果将在24小时内已短信的形式发送至您的手机,请注意查收',
        showCancel:false,
        confirmColor:"#FF6D10",
        success:res=>{
          wx.navigateBack({
          })
        }
      })
    })
  }
}