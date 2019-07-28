// pages/find/find.js

var net = require("./net")
var bindEvent = require("./bindEvent")

var options = {

  /**
   * 页面的初始数据
   */
  data: {
   id:"",
   address_detail:"",
   address:"",
   latitude: "",
   longitude: "",
   contact_name:'',
   phone:'',
   gender:'0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       address:options.address,
       address_detail: options.address_detail,
       id: options.id,
       contact_name: options.contact_name,
       phone: options.phone,
       gender:options.gender,
       latitude: options.latitude,
       longitude: options.longitude,
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

  }

}
Page(wx.$extend(options, net, bindEvent))