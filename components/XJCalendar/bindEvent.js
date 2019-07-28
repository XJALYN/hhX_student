module.exports = {

  
  bindSelectedDay(e){
    var date = e.currentTarget.dataset.value
    this.setData({
      'userSelectedDate.year': date.year,
      'userSelectedDate.month':date.month,
      'userSelectedDate.day': date.day,
      'userSelectedDate.week':date.week
    })
    // begin 增加
    if (!this.data.single) {
      let day = this.data.userSelectedDate.day
      this.setData({
        scrollIntoView: day
      })
    }
    // end 新增加
    this.triggerEvent('SelectedDate', this.data.userSelectedDate, {})
    this.markSelectedDates()

  },

  bindSelectedMonth(e){
    var monthData = e.currentTarget.dataset.value
    var index = e.currentTarget.dataset.index
    this.setData({
      selectedMonthIndex:index
    })
    this.setData({
      'userSelectedDate.year': monthData.year,
      'userSelectedDate.month': monthData.month,
      'userSelectedDate.day':-1
    })
    // 
    var currentMonth = (new Date()).getMonth()+1
    var day = (new Date()).getDate()
    // if (monthData.month == currentMonth){
    //   this.setData({
    //     'userSelectedDate.day': day+1
    //   })
    // }else{
    //   this.setData({
    //     'userSelectedDate.day': 1
    //   })
    // }
    
    this.triggerEvent('SelectedMonth', monthData, {})

    this.generateDateTables(this.data.monthList[this.data.selectedMonthIndex].year, this.data.monthList[this.data.selectedMonthIndex].month)

    // 标记被选择的日期
    this.markAvailableDates()
    this.markSelectedDates()
    // begin 删除
    // this.triggerEvent('SelectedDate', this.data.userSelectedDate, {})
    // if (!this.data.userSelectedDate) {
    //   return
    // }

    // let day1 = this.data.userSelectedDate.day
    // this.setData({
    //   scrollIntoView: day1
    // })
    // begin 删除
  }
}