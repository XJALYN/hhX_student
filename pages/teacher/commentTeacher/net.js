
module.exports = {
  net_rateTeacher(){
    wx.showLoading({
      title: '',
      duration:10000
    })

    var params = {
      order_id: this.data.orderId,
      rating_text: this.data.inputComment
    }
    for (var i in this.data.rateList){
      var item = this.data.rateList[i]
      var key = item.param
      var value = item.value
      params[key] = value
    }
    wx.$methods.orderRatings(params).then(res=>{
      wx.hideLoading()
      if(res.code==0){
        wx.showToast({
          title: '感谢您的评价',
        })
        setTimeout(()=>{
          wx.navigateBack({
          })
        },1000)
      }
    })
  }
}