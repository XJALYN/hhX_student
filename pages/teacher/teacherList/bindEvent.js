
module.exports = {

  

  bindGetUserLocation(e){
    wx.authorize({ scope: "scope.userLocation",success:res=>{
         console.log(res)
    }})
  },
  


  // 绑定进入滤镜
  bindFilter(e){
    this.data.isShowFilterContainer = !this.data.isShowFilterContainer
     this.setData({
       'isShowFilterContainer': this.data.isShowFilterContainer
     })
  },

  

  bindChangeCondition(e){
    var index = e.currentTarget.dataset.index
    if(index==this.conditionIndex){
      return
    }
    this.setData({
      conditionIndex:index
    })
    this.net_teacherList()
  }
}