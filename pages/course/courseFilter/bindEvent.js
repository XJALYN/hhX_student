
module.exports = {
  bindPushToTeacherList(e){
    wx.$router.pushToTeacherList()
  },
  bindSelectedCouse(e){
    this.setData({
      listIndex:e.currentTarget.dataset.index
    })
  }
}