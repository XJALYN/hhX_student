// pages/find/find.js

const net = require("./net")
const bindEvent = require("./bindEvent")
const filter = require('./filter/index.js')
const options = {

  /**
   * 页面的初始数据
   */
  data: {
    limit:100,
    offset:0,
    year:"",
    month:"",
    date:'',
    showDate:'',
    endDate:"",
    list:[],
    income_amount:'--',
    outlay_amount:'--',
    loading:true,
    loaded:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    this.setData({
      date: year + '-' + month,
      endDate: year + '-' + month,
      showDate: year+'年'+month+'月',
      year,
      month
    })
    this.net_bills()
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.net_moreBills()
  }
}
Page(wx.$extend(options, net, bindEvent, filter))