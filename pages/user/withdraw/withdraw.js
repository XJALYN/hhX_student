// pages/user/withdraw/withdraw.js
const event = require('./event.js')
const net = require('./net.js')
const options = {

  /**
   * 页面的初始数据
   */
  data: {
    amount:'--',
    depositAmount:''
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
     this.net_accounts()
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

  }
}
Page(wx.$extend(options,net,event))