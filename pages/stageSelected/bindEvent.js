
module.exports = {
 
  // 选择一个阶段
  bindSelectedStage(e){
    var index = e.currentTarget.dataset.index
    this.setData({
      'stageIndex':index
    })
  },

  // 跳转到筛选课程页面
  bindPushToFilterCouse(e){
    wx.$router.pushToCouseFilter()
  }
}