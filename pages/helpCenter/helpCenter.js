// pages/me/me.js
var net = require("./net")
var bindEvent = require("./bindEvent")

var options = {

  /**
   * 页面的初始数据
   */
  data: {
    questions:[
      {
        answer:'如何保证教学质量?',
        question:'猴猴学的每一位线下老师均来自上海交通大学,上海财经大学等985、211在校大学生,他们有高效的学习方法和大量的考试经验,因为他们是学生,所以他们更懂学生'
      },
      {
        answer: '上课费用如何结算?',
        question: '我们的课程是按天进行结算的'
      },
      {
        answer:"如何取消订单?",
        question:"如果您对选的老师不满意,可以随时终止课程的进行,可以在平台中重新选择"
      }
    ]
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