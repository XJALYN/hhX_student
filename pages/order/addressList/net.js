
module.exports = {

  // 获取订单地址列表
  net_orderAddressList(){
    wx.showNavigationBarLoading()
    let t = { teacher_id: this.data.teacherId }
    wx.$methods.orderAddressList(t).then(res=>{
      console.log(res)
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
       console.log(res)
        wx.hideLoading()
      this.net_orderAddressList()
    })
  }
 
}