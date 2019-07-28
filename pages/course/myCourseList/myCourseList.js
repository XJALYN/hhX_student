// pages/find/find.js
const net = require("./net")
const bindEvent = require("./bindEvent")
const tabs = require("./tabs/index.js")
const cell = require("./cell/index.js")


var options = {

  /**
   * 页面的初始数据
   */
  data: {
    tabs:["全部","进行中","已完成"],
    activeIndex: 0, //all-全部, processing-进行中, finished-完成
    courseTypes: ['all', 'processing', 'finished'],
    list:[],
    limit:20,
    offset:0,
    noMore:false,
    loaded:false
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
    this.net_courseList()
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
Page(wx.$extend(options, net, bindEvent, tabs, cell))