
var util = require("../../../utils/util.js")
module.exports = {

  //  获取老师可预约
  net_teacherDates(){
    let t = {
      teacher_id: this.data.teacherId
    }
    wx.$methods.teacherDates(t).then(res=>{
      let list = res.data
      let selectedDates = []
      let avaliableDates =[]
      for (let item of list){
        avaliableDates.push(item.date)
        if (item.is_selected){
          selectedDates.push(item.date)
        }
      }
      this.setData({
        selectedDates,
        avaliableDates
      })
    })
  },
  
  //  获取时间
  net_teacherTimes(){
    var dateString = util.formatDate(this.data.selectedDate.year, this.data.selectedDate.month, this.data.selectedDate.day)
    let t = { 
              teacher_id: this.data.teacherId, 
              date: dateString
            }
      // 先清空之前的日期    
 
    wx.showLoading({
      title: '',
      duration: 10000
    })
    wx.$methods.teacherTimes(t).then(res=>{
      wx.hideLoading()
      let times = res.data

      // 筛选出用户自己勾选的日期id
      let selectedTimes = []
       // 筛选出被别人预约的日期id
      let  ordersTimes = []

      for (let item of times){
        if (item.is_ordered){
          ordersTimes.push(item.id)
        } else if (item.is_selected){
          selectedTimes.push(item.id)
        }
      }
        this.data.times = times
        this.data.selectedTimes = selectedTimes
        this.data.ordersTimes = ordersTimes
        this.handleTimes()
    })
  },

  net_teacherTimeSave(){
    var dateString = util.formatDate(this.data.selectedDate.year, this.data.selectedDate.month, this.data.selectedDate.day)
    let t = {
      teacher_id: this.data.teacherId,
      date: dateString,
      time_ids: this.data.selectedTimes
    }
    wx.showLoading({
      title: '',
      duration:10000
    })
    wx.$methods.teacherTimeSave(t).then(res=>{
       wx.hideLoading()
       wx.showToast({
         title: '设置成功',
       })
       console.log(res)
       this.net_teacherDates()

      //  显示设置下周弹窗页面
      // this.setData({
      //   showNextWeek: true
      // })
    })
  }
}