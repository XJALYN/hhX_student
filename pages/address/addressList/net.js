
module.exports = {
  net_filterAddressList(){
    wx.showNavigationBarLoading()
    wx.$methods.filterAddressList({},{teacher_id:this.data.teacherId}).then(res=>{
      wx.hideNavigationBarLoading()
      console.log(res)
      if (res.code == 0) {
        this.setData({
          list: res.data,
          loaded: true
        })
      }
    })
  },
  
  net_getAddressList(){
    wx.showNavigationBarLoading()
    wx.$methods.getAddressList().then(res=>{
      wx.hideNavigationBarLoading()
      let list = res.data.map(item=>{
        item.lastName = item.contact_name[0]
        return item
      })
        console.log(res)
        this.setData({
          list: list,
          loaded:true
        })
    })
  },
  
  // 设置默认的地址
  net_addressDefault(t){
    wx.showLoading({
      title: '',
      duration:10000
    })
    wx.$methods.addressDefault(t).then(res=>{
        wx.hideLoading()
        if (this.data.fromPage == "order") {
          this.net_filterAddressList()
        } else {
          this.net_getAddressList()
        }
    })
  }
 
}