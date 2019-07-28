// pages/webview/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    options.url = "https://mp.weixin.qq.com/s?__biz=MzUxNjgwNjYyMA==&tempkey=OTg0X3pCcW11QmlFQ2g3UUVTMWkzb29CYzBaSnRiRHBFcXRzQ0ZUTHBNMEVXN0drOVpRMU5xTG1GOGtzLUlMWnFOUi1uZ0RtMjk5b2M1b2NXZ2haaVlHSVVIU0Vzc0RfRVZ6TG1STFJrZDctY1Brc180aVhjbDh4VXN6TGo3NGxKN01vTkdLckFubEpHVEljQzNzNDk3U1RmdW1vVEdHUnQ5dUdvT3hZRGd%2Bfg%3D%3D&chksm=79a083a64ed70ab034e8d749752a87bf26b623cc55dca3dc6beb0702a4147ccc608e7a4be611&scene=0&xtrack=1&previewkey=t6LeLaZsYTNogJSzoifng8wqSljwj2bfCUaCyDofEow%253D#wechat_redirect"
   this.setData({
     url:options.url
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
})