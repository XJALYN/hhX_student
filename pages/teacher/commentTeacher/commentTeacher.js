// pages/find/find.js

var net = require("./net")
var bindEvent = require("./bindEvent")


var options = {

  /**
   * 页面的初始数据
   */
  data: {
   
    orderId:"",
    nick_name:'',
    avatar_url:'',
    subject_name:"",
    wordsMin:7,
    wordsMax:200,
    inputComment:"",
    rateList:[
      { name: "授课内容", value: "5", param:"teaching_content_score"},
      { name: "授课态度", value: "5", param:"teaching_attitude_score"},
      { name: "授课思路", value: "5", param:"teaching_thought_score"},
      { name: "授课效果", value: "5", param:"teaching_effect_score" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      orderId: options.id,
      nick_name:options.nick_name,
      avatar_url:options.avatar_url,
      subject_name: options.subject_name
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}
Page(wx.$extend(options, net, bindEvent))