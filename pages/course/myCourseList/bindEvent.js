
module.exports = {

  //*****************************************/
  // 选择筛选标签 获取对应数据
  //*****************************************/
  bindSelectedTab(e){
   console.log(e)
   this.data.activeIndex = e.detail.value
   this.net_courseList()
  },


  //*****************************************/
  // 去评价课程
  //*****************************************/
  bindPushToCommentTeacher(e){
    var value = e.currentTarget.dataset.value
    var t = {
      courseId:value.id,
      teacherId:value.teacher.id,
      nickName:value.teacher.nick_name,
      avatarUrl:value.teacher.avatar_url,
      courseName: value.subject.full_name
    }
    wx.$router.pushToCommentTeacher(t)
  }

}