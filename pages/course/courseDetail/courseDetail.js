// pages/courseRecord/courseRecord.js
var bindEvent = require("bindEvent")
var net = require("net")
var options = {

  /**
   * 页面的初始数据
   */
  data: {
    courseId:'',
    course:{},
    lessons:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.courseId = options.courseId
    console.log("--------")
    console.log(this.data.courseId)
    this.net_courseDetail()
    this.net_courseLessons()
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

Page(wx.$extend(options, bindEvent, net))