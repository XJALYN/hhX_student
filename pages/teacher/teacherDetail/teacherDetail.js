// pages/me/me.js
const net = require("./net")
const bindEvent = require("./bindEvent")
const header = require('./header/index.js')
const resume = require('./resume/index.js')
const courseSelected = require('./courseSelected/index.js')


const options = {

  /**
   * 页面的初始数据
   */
  data: {
    address: "",
    teacherId:'',
    subjectId:'', // 选中的课程id
    subjectList:[],
    courses:[],
    courseIndex:0,
    teacher:{
      nick_name:"",
      college_name:"",
      lesson_count:"",
      resume:{
        introduction:""
      }
    },
    loaded:false,
    order_rating_quantity:'',
    overall_score:'',
    lastRating:{},
    showCourseSelected:false,
    is_phone_certified:false,
    real_name_certified_status:'-1' // 家长认证
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.teacherId = options.teacherId
    this.data.subjectId = options.subjectId
    this.net_teacherDetail()
    this.net_teacherSubjects()
    this.net_teacherRatingScores()

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
}
Page(wx.$extend(options, net, bindEvent, header, resume, courseSelected))