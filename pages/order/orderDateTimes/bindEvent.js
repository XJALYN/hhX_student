var util = require("../../../utils/util.js")
module.exports = {

  // 选择月份
  bindSelectedMonth(e){
   var monthData = e.detail
   this.setData({
     showSingleDate:false,
     'timeList':[]
   })
  
  
  },

  // 选择日期
  bindSelectedDate(e){
    console.log(e)
    var date = e.detail
    var dateString = "" + date.year +"-" + date.month+ "-" + date.day
    this.setData({
      showSingleDate: true,
      'selectedDate':date
    })
    this.net_teacherTimes()
  },

  // 跳转到订单
  bindPushToOrder(e){
    wx.$router.pushToOrder({ teacherId: this.data.teacherId, subjectId: this.data.subjectId })
  },

  bindConfirmTimes(e){
    if (this.isResultIncontinuityTimes()){
      wx.showToast({
        title: '请先取消不连续的时间',
        icon:"none"
      })
      return
    }

    this.net_teacherTimeSave()
  },

  //检测是否存在不连续的时间
  isResultIncontinuityTimes(){
    this.data.selectedTimes = this.data.selectedTimes.sort(($1,$2)=>{
      return $1 > $2
    })
    console.log(this.data.selectedTimes)
    for (let i in this.data.selectedTimes){
      i = parseInt(i)
      let midId = this.data.selectedTimes[i]
      if(i==0){
        let rightId = this.data.selectedTimes[i+1]
        if(midId+1 != rightId){
          console.log(1)
          return true
        }
      }else if(i==this.data.selectedTimes.length-1){
        let leftId = this.data.selectedTimes[i - 1]
        if (midId - 1 != leftId) {
          console.log(2)
          return true
        }
      }else{
        let rightId = this.data.selectedTimes[i + 1]
        let leftId = this.data.selectedTimes[i - 1]
        if (midId - 1 != leftId && midId +1 != rightId){
          console.log(3)
          return true
        }
      }
    }
     return false
  }

}