// pages/me/me.js

const bindEvent = require("./bindEvent")
const orderMenu = require("./orderMenu/index.js")
const net = require("./net.js")
const options = {

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    nick_name:'',
    avatar_url:'',
    gender:'',
    phone:'',
    balance:'',
    loaded:false,
    real_name_certified_status:'-1000',
    is_phone_certified:false
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
    this.net_getUserProfile(false)
    this.net_accounts()
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
  
  }
}
Page(wx.$extend(options, net,bindEvent, orderMenu))