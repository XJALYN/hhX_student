// pages/me/me.js
var net = require("./net")
var bindEvent = require("./bindEvent")

var options = {

  /**
   * 页面的初始数据
   */
  data: {
    userProfile:{
      id: '',
      avatar_url: '',
      gender: '',
      nick_name: '',
      phone: '',
    },
    real_name_certified_status:'-1',
    sexList: ["女", "男"]
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
    this.net_userProfile(false)
    this.net_certificationStatus()
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
    this.net_userProfile(true)
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