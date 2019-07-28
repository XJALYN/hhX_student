// pages/courseCenter/courseCenter.js
const bindEvent = require("bindEvent")
const net = require("net")
const myCourse = require("./myCourse/index.js");
const recordCell = require("./recordCell/index.js")
const msgCell = require("./msgCell/index.js");
const options = {

  /**
   * 页面的初始数据
   */
  data: {
    is_accepted_video:false,
    messageList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.net_securityStatus()
    this.net_courseMessagesSnapshot()
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}

Page(wx.$extend(options, bindEvent, net, myCourse, recordCell, msgCell))