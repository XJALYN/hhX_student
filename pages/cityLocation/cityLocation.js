// pages/location/location.js

const net = require("./net")
const bindEvent = require("./bindEvent")
const header = require("./header/index.js")
const filterSubject = require("./filterSubject/index.js")
const options = {

  /**
   * 页面的初始数据
   */
  data: {
    // 城市
    cityId:'',
    cityList:[],
    cityIndex:0,
    isShowFilterContainer: false,
    stageList: [],
    subjects: [],
    gradeName: '',
    stageIndex: 0,
    gradeIndex: 0,
    subjectIndex: 0,
    pickerList:[],

    latitude: 31.22114,
    longitude: 121.54409,
    showList: false,
  
    markers: [
      {
        id: "1",
        latitude: 31.194212,
        longitude: 121.436126,
        iconPath:"/images/city_location.png",
        scale:'11',
        callout: {
          content: "2000位老师",
          color: "#FFFFFFFF",
          bgColor: "#5E25ED99",
          fontSize: 14,
          padding: 30,
          borderRadius: 37,
          display: "ALWAYS",
          borderWidth:1,
          borderColor:'#5E25EDFF'
        }
      }
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.cityId = options
    
    this.net_getCities()
    this.net_subjects()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('cityMap')
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

  },

 
}
Page(wx.$extend(options, net, bindEvent, filterSubject, header ))