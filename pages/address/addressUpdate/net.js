
module.exports = {
  net_addressUpdate(){
    wx.showLoading({
      title: '',
      duration:10000
    })
 
     var t = { 
        "id":this.data.id,
        "address": this.data.address,
        "address_detail":this.data.address,
        "latitude": this.data.latitude,
        "longitude": this.data.longitude,
        'phone':this.data.phone,
        'gender':this.data.gender,
        'contact_name': this.data.contact_name
     }
    wx.$methods.addressUpdate(t).then(res=>{
   wx.hideLoading()
     if(res.code==0){
       wx.showToast({
         title: '成功',
       })
       setTimeout(()=>{
         wx.navigateBack({
         })
       },1000)
       
      }
    })
  },
  net_addressDelete(t) {
    wx.showLoading({
      title: '',
      duration:10000
    })
    wx.$methods.addressDelete(t).then(res => {
      wx.hideLoading()
      if (res.code == 0) {
         wx.navigateBack({
           
         })
      }
    })
  }
}