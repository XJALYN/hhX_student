module.exports = {
  net_favoriteTeachers(){
    let t = {
      limit:this.data.limit,
      offset:this.data.offset
    }
    wx.$methods.favoriteTeachers(t).then(res=>{
      this.setData({
        list:res.data
      })
    })
  }
}