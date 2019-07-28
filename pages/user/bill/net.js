
module.exports = {
  net_bills(){
    wx.showLoading({
      title: '',
      duratin:10000
    })
    this.data.offset = 0
    let t = { 
          offset: this.data.offset, 
          limit: this.data.limit, 
          category: "all",
          year:this.data.year,
          month:this.data.month
          }
          console.log(t)
    wx.$methods.bills(t).then(res=>{
      wx.hideLoading()
      console.log(res)
      if(res.code==0){
        this.setData({
          list: res.data.bill_flow,
          income_amount: res.data.income_amount,
          outlay_amount: res.data.outlay_amount,
          loaded:true
        })
      }
    })
  },
  net_moreBills(){
    this.data.offset = this.data.list.length
    let t = {
      offset: this.data.offset,
      limit: this.data.limit,
      category: "all",
      year: this.data.year,
      month: this.data.month
    }
    wx.$methods.bills(t).then(res => {
      if (res.code == 0) {
        var list = res.data.bill_flow
        if (list.length < this.data.limit){
           this.setData({
             loading:false
           })
        }
        console.log(res.data)
        this.setData({
          list: this.data.list.concat(list)
        })
      }
    })
  }
}