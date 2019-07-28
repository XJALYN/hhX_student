// pages/courseDateTimes/courseDateTimes.js
const net = require("./net")
const bindEvent = require("./bindEvent")
const timeList = require("./timeList/index.js")
const nextWeek = require("./nextWeek/index.js")
const nextWeekResult = require("./nextWeekResult/index.js")
const options = {
  /**
   * 页面的初始数据
   */
  data: {
    teacherId:'',
    subjectId:'',
    list: [],
    selectedDates: [],
    avaliableDates: [],
    teachingStatus: false,
    selectedDate:{
      year:(new Date()).getFullYear(),
      month:(new Date()).getMonth()+1,
      day:(new Date()).getDate()
    },
    weekList:["星期一","星期二","星期三","星期四","星期五","星期六","星期天"],
    showSingleDate:false,
    times:[
      // { id: 11, time: '18:00', status: -1, is_selected: true, orderStatus: -1, is_available: true, is_ordered:true},
      // { id: 12, time: '19:00', status: -1, is_selected: true, orderStatus: -1, is_available: true, is_ordered:true},

    ], // -1 标识未选 // 0 表示单选 // 1.表示左 // 2.表示中 //3.表示右
    selectedTimes:[],
    ordersTimes:[],

    preBeginTimeIndex:null,
    preEndTimeIndex:null,
    showNextWeek:false,
    showNextWeekResult:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.teacherId = options.teacherId
    this.data.subjectId = options.subjectId
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.net_teacherDates()
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
}
Page(wx.$extend(options, net, bindEvent, timeList, nextWeek, nextWeekResult))