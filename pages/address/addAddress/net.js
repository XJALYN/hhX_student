
module.exports = {
  net_addressAdd(){
    wx.showLoading({
      title: '',
      mask:true,
      duration:10000
    })
    var t = { 
        address: this.data.address,
        address_detail: this.data.address_detail,
        contact_name: this.data.contact_name,
        phone:this.data.phone,
        gender: this.data.gender,
        latitude: this.data.latitude, 
        longitude: this.data.longitude }
    wx.$methods.addressAdd(t).then(res => {
      wx.hideLoading()
      if(res.code==0){
          wx.showToast({
            title: '保存成功',
            duration:1000
          })
          setTimeout(res=>{
            wx.navigateBack({
            })
          },1000)
      }
    })
  },
 
}