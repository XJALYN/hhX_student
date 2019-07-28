// pages/find/find.js

var net = require("./net")
var bindEvent = require("./bindEvent")
var cellEvent = require("./cell/index.js")


var options = {

  /**
   * 页面的初始数据
   */
  data: {
    teacherId: "",
    rate:"0",
    rateSet:{
      order_rating_quantity:'',
      overall_score:'',
      teaching_attitude_score:'',
      teaching_content_score:'',
      teaching_effect_score:'',
      teaching_thought_score:''
    },
    commentList:[],
    limit:20,
    offset:0,
    noMore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.teacherId = options.teacherId
    this.net_teacherRatingScores()
    this.net_teacherRatings()
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
    this.net_moreTeacherRateList()
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
Page(wx.$extend(options, net, bindEvent, cellEvent))