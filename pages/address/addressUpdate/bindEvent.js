var pattern = require("../../../utils/pattern.js")
module.exports = {

  bindInputName(e) {
    this.data.contact_name = e.detail.value
  },
  bindChangeGender(e) {
   let index = e.currentTarget.dataset.index
   this.setData({
     gender:index
   })
  },

  bindInputTel(e) {
    this.data.phone = e.detail.value
  },

  bindSelectedAddress(e) {
    var that = this
    wx.chooseLocation({
      success: function (res) {
         console.log(res)
         that.setData({
           address:res.name,
           latitude: res.latitude,
           longitude: res.longitude
         })
      },
    })
  },

  bindInputAddress(e){
    this.data.address = e.detail.value
  },
  bindSave(){
    if (!pattern.testEmptyByToast(this.data.contact_name, "请填写姓名")) {
      return
    }
   if(!pattern.testPhone(this.data.phone)){
     wx.showToast({
       title: '手机号码格式不正确',
       icon:"none"
     })
     return
   }

    if (!pattern.testEmptyByToast(this.data.address,"街道地址未选择")){
     return
   }
    if (!pattern.testEmptyByToast(this.data.address_detail, "详细地址未填写")) {
     return
   }
    this.net_addressUpdate()
  },

  bindDelete(){
    wx.showModal({
      title: '确定要删除这个地址吗?',
      content: '',
      success: res => {
        if (res.confirm) {
          this.net_addressDelete({id: this.data.id })
        }
      }
    })
  }
}