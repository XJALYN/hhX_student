var pattern = require("../../../utils/pattern.js")
module.exports = {

  bindInputName(e){
    this.data.contact_name = e.detail.value
  },
  bindChangeGender(e){
   let index = e.currentTarget.dataset.index
   this.setData({
      gender : index
   })
  },
  
  bindInputTel(e){
    this.data.phone = e.detail.value
  },
  
  bindSelectedAddress(e) {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          address: res.name,
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  },
  bindInputAddress(e){
   this.data.address_detail = e.detail.value
  },
  bindSave(){
    if (!pattern.testEmptyByToast(this.data.contact_name, "请填写联系人")) {
      return
    }
    if(this.data.gender==-1){
      wx.showToast({
        title: '请选择性别',
        icon: "none"
      })
      return
    }
    if (!pattern.testPhone(this.data.phone)) {
      wx.showToast({
        title: '请填写正确的手机号',
        icon:"none"
      })
      return
    }
    if (!pattern.testEmptyByToast(this.data.address_detail,"请填写街道信息")){
      return 
    }
    if (!pattern.testEmptyByToast(this.data.address, "请填写详细地址")) {
      return
    }
    this.net_addressAdd()
  }
}