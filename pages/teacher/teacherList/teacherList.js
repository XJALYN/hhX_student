// pages/me/me.js
const net = require("./net")
const bindEvent = require("./bindEvent")
const location = require("./location.js")
const teacherItem = require("./teacherItem/index.js")
const filterSubject = require("./filterSubject/index.js")
const header = require("./header/index.js")
const locationAuthor = require("./locationAuthor/index.js")

var options = {

  /**
   * 页面的初始数据
   */
  data: {
    address: "",
    latitude: "",
    longitude: "",
    name: "",
    teacherList:[],
    noMore:false,
    limit:30,

    isShowFilterContainer:false,
    stageList:[],
    subjects: [],
    pickerList:[],
    gradeName:'',
    stageIndex:0,
    gradeIndex:0,
    subjectIndex:0,

    loadingMore:false,
    loadSubjects:false,
    loaded:false,
    conditions: [
     { name: 'distance', title: "距离" },
     { name:'rating',title:"评价"}
     ],
     conditionIndex:0,
     userLocationAuthorize: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取位置信息
    this.net_subjects()
    
   
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
    this.net_moreTeacherList()
  }
}
Page(wx.$extend(options, net, bindEvent, location, teacherItem, filterSubject, header, locationAuthor))