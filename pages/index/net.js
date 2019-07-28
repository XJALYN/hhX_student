module.exports = {
  net_banenrs(){
    wx.$methods.banners().then(res=>{
      console.log(res)
      this.setData({
        banners:res.data
      })
    })
  },
  net_teacherPremium(){
    let t = {
      'latitude': this.data.latitude,
      'longitude': this.data.longitude,
      'limit':100,
      'offset':0
    }
    wx.$methods.teacherPremium(t).then(res=>{
      console.log(res)
      this.setData({
        teacherList:res.data
      })
    })
  },
  // 获取城市老师统计
  net_statisticCitys(){
    wx.$methods.statisticCitys().then(res=>{
      this.setData({
        cityList:res.data
      })
    })
  }
}