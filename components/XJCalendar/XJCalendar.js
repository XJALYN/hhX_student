// components/XJCalendar/XJCalendar.js
var extend = require("extend.js")
var bindEvent = require("bindEvent")
var utils = require("utils")
var options = {
  /**
   * 组件的属性列表
   */
  properties: {
    selectedDates:{
      type:Array(),
      observer:function(newValue,oldValue){
        this.markSelectedDates()
      }
    },
    avaliableDates:{
      type: Array(),
      observer: function (newValue, oldValue) {
        this.markAvailableDates()
      }
    },
    monthNum:{
      type:Number,
      value:3
    },
    single:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  //  selectedDates:[],
   monthList:[],
   selectedMonthIndex:0,
   weekList: ["日", "一", "二", "三", "四", "五", "六"],
   dates:[],
   userSelectedDate:{},
   scrollIntoView:'',
   month:'',
   year:'',
   lastEmptyGrids:[],
   empytGrids:[]
  },

  /**
   * 组件的方法列表
   */
  methods: extend(utils,bindEvent),
  ready(){
    var now = new Date()
    this.setData({
      'year': now.getFullYear(),
      'month': now.getMonth()+1
    })
    this.setData({
      'userSelectedDate.year': now.getFullYear(),
      'userSelectedDate.month': now.getMonth() + 1,
      'userSelectedDate.day':'-1'
    })
    this.triggerEvent('SelectedMonth', { "year": this.data.userSelectedDate.year, "month": this.data.userSelectedDate.month }, {})
    // begin 删除
    // this.triggerEvent('SelectedDate', this.data.userSelectedDate, {})
    // end 删除
    this.setData({
      scrollIntoView: this.data.userSelectedDate.day
    })
    // 生成月份表格
    this.generateMonthList(this.data.year, this.data.month)
    // 生成日期表格
    this.generateDateTables(this.data.monthList[this.data.selectedMonthIndex].year, this.data.monthList[this.data.selectedMonthIndex].month)
    // 标记老师可选的日期
    this.markAvailableDates()
    this.markSelectedDates()
  }

}

Component(extend(options))
