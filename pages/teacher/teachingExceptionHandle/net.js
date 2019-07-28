module.exports = {
  net_courseExceptionHandle() {
    wx.showLoading({
      title: '',
      duration: 10000
    })
    wx.$methods.courseExceptionHandle({
      handled_mode: this.data.mode
    }, {
      lessonId: this.data.lessonId
    }).then(res => {
      wx.hideLoading()
      if (res.code == 0) {
        wx.showToast({
          title: '成功',
        })
        setTimeout(() => {
          wx.navigateBack({})
        }, 1000)
      }
    })
  }
}