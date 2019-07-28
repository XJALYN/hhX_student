
module.exports = {

  bindPushToOrder(e){
    var index = e.currentTarget.dataset.index
    wx.$router.pushToMyCourseList({type:index})
  }
}