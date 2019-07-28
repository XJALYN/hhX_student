
module.exports = {

  // 进入老师列表
  bindPushToTeacherList(e){
    var keys = []
    if(this.data.selectedGrade){
      keys.push(this.data.selectedGrade)
    }
    if(this.data.selectedSubject){
      keys.push(this.data.selectedSubject)
    }
    wx.$router.pushToTeacherList({"keys":keys})
  },
 
  // 跳转至课程阶段选择
  bindPushToStageSelected(e){
    wx.$router.pushToStageSelected()
  },



  // 点击打开定位按钮
  bindOpenLocation(e){
    var that = this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          that.setData({
            'userLocationAuthorize': false
          })
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              that.setData({
                'userLocationAuthorize': true
              })
            
              that.getLocation()
            },
            fail: res => {
              // 授权失败打开定位功能 
              wx.showModal({
                title: '请允许访问位置信息',
                content: '便于精确查找附近老师',
                success:res=>{
                  if(res.confirm){
                    wx.openSetting({
                    })
                  }
                }
              })
            }
          })
        }
      }
    })
  },
  getLocationTeachers(){
    wx.getLocation({
      success: res=>{
        console.log(res)
      },
      fail:error=>{
        console.log(error)
      }
    })
  }
  
}