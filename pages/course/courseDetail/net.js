module.exports = {
  bindPushToCourseFeedback(e){
    wx.$router.pushToCourseFeedback()
  },
  // 课程详情
  net_courseDetail(){
    let t = {
      id:this.data.courseId
    }
    wx.$methods.courseDetail(t).then(res=>{
      this.setData({
        course:res.data
      })
      console.log(res)
    })
  },
  net_courseLessons(){
    let t = {
      course_id: this.data.courseId
    }
    wx.$methods.courseLessons(t).then(res => {
      let list = res.data.filter((item,index)=>{
        item.index = `第${index + 1}节课`
        if (item.messages.length > 0){
          return item
        }
      }).sort((item1,item2)=>{
        return item1.id > item2.id
      })
      console.log(list)
      this.setData({
        lessons:list
      })
      console.log(res)
    })
  }
}