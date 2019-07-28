
module.exports = {
  net_courseList(){
    wx.showLoading({
      title: '',
      duration:10000
    })
    let courseType = this.data.courseTypes[this.data.activeIndex]
    this.data.offset = 0
    let t = { 
      type: courseType,
      limit:this.data.limit,
      offset:this.data.offset,
      noMore:false    
    }
    wx.$methods.courseList(t).then(res=>{
      wx.hideLoading()
      if(res.code==0){
        this.setData({
          list:res.data,
          loaded:true
        })
        console.log(res)
      }
    })
  },

  net_moreCourseList(){
    let courseType = this.data.courseTypes[this.data.activeIndex]
    this.data.offset = 0
    let t = {
      type: courseType,
      limit: this.data.limit,
      offset: this.data.list.length
    }
    wx.$methods.courseList(t).then(res => {
      let list = res.data
      if(list.length < this.data.limit){
        this.setData({
          noMore:true
        })
      }
      this.data.list = this.data.list.concat(list)
        this.setData({
          list: this.data.list
        })
    })
  }
}