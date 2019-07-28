// pages/me/me.js
var net = require("./net")
var bindEvent = require("./bindEvent")


var options = {

  /**
   * 页面的初始数据
   */
  data: {
    order:null,
    orderStatusSet: {
      '-1': '等待支付',
      '0': '等待接单',
      '1': '已接单',
      '2': '进行中',
      '3': '老师拒单',
      '4': '老师接单超时',
      '5': '支付超时',
      '6': '已取消', // 接单前学生取消
      '7': '已取消', // 接单后学生取消
      '8': '老师取消',
      '9': '未及时支付违约',
      '10': '系统取消',
      '11': '已完成',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.orderId = options.orderId
    console.log(this.data.orderId)
     this.net_orderDetail()
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