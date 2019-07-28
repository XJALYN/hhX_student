// pages/me/me.js
const net = require("./net")
const bindEvent = require("./bindEvent")
const tabs = require("./tabs/index.js")
const orderItem = require("./orderItem/index.js")

var options = {

  /**
   * 页面的初始数据
   */
  data: {
     offset:0,
     limit:20,
     tabs: ['全部', '待付款', '待接单','退款','待评价'],
     activeIndex:0,
    orderTypes: ["all", "unpaid", "paid", "refund","unrated"], // all finished refund
     loading:true,
     orderStatusSet:{
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
    order_handled_status:0, // -1 未接单 0 已接单 1 拒单
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      activeIndex:options.type
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
    this.net_orderList()
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.net_moreOrderList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}
Page(wx.$extend(options, net, bindEvent, tabs, orderItem))