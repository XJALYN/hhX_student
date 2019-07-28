
module.exports = {
  bindSelectedDefaultAddress(e){
    var data = e.currentTarget.dataset.value
    if (data.is_accessible===false){
      wx.showModal({
        title: '',
        content: '此地址距离老师住址太远,老师无法接单',
      })
    }else{
      wx.$db.contactInfo = data
      this.net_addressDefault({ 'address_id': data.id })
    }
  },
  bindPushToAddress(e){
    var item = e.currentTarget.dataset.value
    var t = {
      address:item.address_detail,
      street:item.address,
      addressId:item.id,
      name: item.contact_name,
      gender:item.gender,
      phone:item.phone,
      latitude: item.latitude,
      longitude: item.longitude,
    }
    wx.$router.pushToAddress(t)
  },

  bindPushToAddAddress(){
    wx.$router.pushToAddAddress()
  },

}