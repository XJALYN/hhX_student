// pages/user/collectTeachers/collectTeachers.js
const event = require('./bindEvent.js')
const net = require('./net.js')
const teacherItem = require('./teacherItem/index.js')
const options = {

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    limit: 30,
    offset:0
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
    this.net_favoriteTeachers()
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

Page(wx.$extend(options, event, net, teacherItem))