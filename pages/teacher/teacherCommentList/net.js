
module.exports = {

  // 老师评分
  net_teacherRatingScores() {
    let t = { "teacher_id": this.data.teacherId }
    wx.$methods.teacherRatingScores(t).then(res => {
      this.setData({
        rateSet: res.data
      })
    })
  },


  // 老师评分
  net_teacherRatings(){
    this.setData({
      noMore: false
    })
    let params = {
      offset: this.data.offset,
      limit: this.data.limit,
      teacher_id: this.data.teacherId
    }
    console.log(params)
    wx.$methods.teacherRatings(params).then(res=>{
      if(res.code==0){
        this.setData({
          commentList:res.data
        })
        this.data.offset = this.data.commentList.length
      }
    })
  },

  // 更多老师评分
  net_moreTeacherRatings(){
    if(this.data.noMore){
      return
    }
    let params = {
      offset:this.data.offset,
      limit:this.data.limit,
      teacher_id: this.data.teacherId
    }
    methods.TeacherRatings(params).then(res => {
      if (res.code == 0) {
        var list = res.data
        if(list.length < this.data.limit){
          this.setData({
            noMore:true
          })
        }
        this.data.commentList = this.data.commentList.concat(list)
        this.setData({
          commentList: this.data.commentList
        })
        this.data.offset = this.data.commentList.length
      }
    })
  }
}