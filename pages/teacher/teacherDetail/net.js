
module.exports = {
  
  //  添加到收藏
  net_favoriteTeacherAdd(){
    let t = { "teacher_id": this.data.teacherId }
    wx.$methods.favoriteTeacherAdd(t).then(res=>{
      wx.showToast({
        title: '已收藏',
      })
      this.net_teacherDetail()
    })
  },
  net_favoriteTeacherDelete(){
    let t = { "teacher_id": this.data.teacherId }
    console.log(t)
    wx.$methods.favoriteTeacherDelete(t).then(res => {
      wx.showToast({
        title: '已取消收藏',
      })
      this.net_teacherDetail()
    })
  },
  
  // 获取老师基本信息
  net_teacherDetail(){
    wx.showLoading({
      title: '',
      duration:10000
    })
    let t = { "id": this.data.teacherId}
    wx.$methods.teacherDetail(t).then(res=>{
      wx.hideLoading()
      console.log(res)
      if(res.code==0){
        this.setData({
          teacher:res.data,
          loaded:true
        })
      }
    })
  },

  // 获取老师授课情况
  net_teacherSubjects(){
    wx.showLoading({
      title: '',
      duration: 10000
    })
    let t = { "teacher_id": this.data.teacherId }
    wx.$methods.teacherSubjects(t).then(res => {
      let courses = []
      console.log(res)
      for(let stage of res.data){
        for (let grade of stage.grades){
          for(let subject of grade.subjects){
            let course = {
              name: stage.stage + grade.name + subject.name,
              id: subject.id
            }
            courses.push(course)
          }
        }
      }
      let courseIndex = 0
      for(let i in courses){
        let course = courses[i]
        if (course.id == this.data.subjectId){
           courseIndex = i
        }
      }
      wx.hideLoading()
      if (res.code == 0) {
        this.setData({
          subjectList:res.data,
          loadSubjects:true,
          courses,
          courseIndex
        })
      }
    })
  },

  // 获取老师评分
  net_teacherRatingScores(){
    let t = {"teacher_id": this.data.teacherId}
    wx.$methods.teacherRatingScores(t).then(res=>{
      console.log(res)
      this.setData({
        lastRating: res.data.latest_rating_record,
        overall_score: res.data.overall_score,
        order_rating_quantity: res.data.order_rating_quantity
      })
    })
  },

  // 获取实名认证状态
  net_certificationStatus() {
    wx.$methods.certificationStatus().then(res => {
      console.log(res)
      console.log("-------")
      const { real_name_certified_status, is_phone_certified} = res.data
      this.setData({
        real_name_certified_status: real_name_certified_status,
        is_phone_certified
      })
    })
  }
}