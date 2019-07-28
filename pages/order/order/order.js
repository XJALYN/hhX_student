// pages/me/me.js
const net = require("./net")
const bindEvent = require("./bindEvent")
const address = require("./address/index.js")
const footer = require("./footer/index.js")



const options = {

  /**
   * 页面的初始数据
   */
  data: {
    teacherId:'',
    subjectId:'',
    address: "",
    payPathIndex:0,
    payModes:["全额付款"],//
    payModeIndex:0,
    orderData:{},
    nick_name:'',
    subject_name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
   this.data.teacherId = options.teacherId,
   this.data.subjectId = options.subjectId
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
    this.net_orderCheckout()
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
Page(wx.$extend(options, net, bindEvent, address, footer))