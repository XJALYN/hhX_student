// pages/courseRecord/courseRecord.js
const bindEvent = require("bindEvent")
const net = require("net")
const clock = require("./clock/index.js")
const endMessage = require('./endMessage/index.js')
const options = {

  /**
   * 页面的初始数据
   */
  data: {
    course_id:'',
    avatar_url:'',
    nick_name:'',
    subject_name: '',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      course_id:options.course_id,
      avatar_url:options.avatar_url,
      nick_name:options.nick_name,
      subject_name: options.subject_name
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
    this.net_courseMessage()
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

Page(wx.$extend(options, bindEvent, net, clock, endMessage))