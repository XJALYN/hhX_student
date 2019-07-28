
module.exports = {

  net_orderList(){
 
      wx.showLoading({
        title: '',
        duration:10000
      })
    this.setData({
      offset:0,
      loading:true
    })
    var orderType = this.data.orderTypes[this.data.activeIndex]
    var t = {
       "type": orderType,
       "offset": this.data.offset,
       "limit":this.data.limit
      }
    console.log(t)
    wx.$methods.orderList(t).then(res=>{
      console.log(res)
      wx.hideLoading()
      if(res.code==0){
        this.setData({
          list:res.data
        })
      }
    })
  },
  net_moreOrderList() {
    this.data.offset = this.data.list.length
    var orderType = this.data.orderTypes[this.data.activeIndex]
    var t = {
      "type": orderType,
      "offset": this.data.offset,
      "limit": this.data.limit
    }
    wx.$methods.orderList(t).then(res => {
      if (res.code == 0) {
        var list = res.data
        if(list.length < this.data.limit){
          this.setData({
            loading:false
          })
        }
        this.data.list = this.data.list.concat(list)
        this.setData({
          list:this.data.list
        })
      }
    })
  },
  net_orderCancle(t) {
    wx.$methods.orderCancle(t).then(res => {
      wx.showToast({
        title: '订单已取消',
      })
      this.net_orderList()
    })
  }
}