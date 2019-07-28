
module.exports = {
  // 获取科目 年级 
  net_subjects() {
    wx.$methods.subjects({ "classify": "junior" }).then(res => {
      if (res.code == 0) {
        this.setData({
          stageList: res.data,
          subjects: res.data[0].grades[0].subjects
        })
        console.log(res.data)
        this.generatePickerList(res.data,0)
        this.location_init()
      }
    })
  },
  
  net_teacherList(){
    this.data.subjects[this.data.subjectIndex].id
    var t = {
      order_by:this.data.conditions[this.data.conditionIndex].name,
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      subject_id: this.data.subjects[this.data.subjectIndex].id,
      limit:this.data.limit,
      offset:0
    }
    wx.showLoading({
      title: '',
      duration:10000
    })
    wx.$methods.teachers(t).then(res=>{
      console.log(res)
      wx.hideLoading()
      if(res.code==0){
       this.setData({
         teacherList:res.data,
         loaded:true
       }) 
      }
    }).catch(err=>{
      console.log(err)
    })
  },

  net_moreTeacherList(){
    if(noMore){
      return
    }
    var t = {
      order_by: this.data.conditions[this.data.conditionIndex].name,
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      subject_id: this.data.subjects[this.data.subjectIndex].id,
      limit: this.data.limit,
      offset: 0,
    }
 
    wx.$methods.teachers(t).then(res => {
      console.log(res)
      if (res.code == 0) {
        var list = res.data
        if(list.length < this.data.limit){
           this.setData({
             'noMore':true
           })
        }
        this.data.teacherList = this.data.teacherList.concat(list)
        this.setData({
          teacherList: this.data.teacherList,
          loadingMore:false
        })
      }
    })
  },

 
}
