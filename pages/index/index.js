//index.js
//获取应用实例
const app = getApp()
const net = require("./net")
const bindEvent = require("./bindEvent")
const teacherItem= require("./teacherItem/index.js")
const locationAuthor = require("./locationAuthor/index.js")
const banner = require("./banner/index.js")
const cityArea = require("./cityArea/index.js")


const author = require("../../net/author.js")
const options = {
  ...net, 
  ...bindEvent, 
  ...teacherItem, 
  ...locationAuthor,
  ...banner,
  ...cityArea,
  data: {
    userLocationAuthorize:true,
    banners: [],
    teacherList:[],
    cityList:[]
  },

  onLoad: function () {
    let data = wx.getStorageSync('index_data')
    if(!data){
      this.setData(JSON.parse(data))
    }
    app.loginReady = res=>{
     this.init()
      this.net_banenrs()
      this.net_statisticCitys()
    }

  },
  init(){
    this.getLocation()
  },


  onShow(){
    this.init()
    this.net_banenrs()
    this.net_statisticCitys()
  },
  onHide(){
    wx.setStorage({
      key: 'index_data',
      data: JSON.stringify(this.data),
    })
  },

  onUnload: function () {
   
  },

  getLocation(){
    wx.getLocation({
      success: (res) =>{
        this.setData({
          'latitude': res.latitude,
          'longitude': res.longitude,
          'userLocationAuthorize': true
        })
        this.net_teacherPremium()
      },
      fail: err => {
        this.setData({
          'userLocationAuthorize': false
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title:"考试!有种你过来啊!",
      path:"/pages/guide/guide",
      imageUrl:"https://ws4.sinaimg.cn/large/006tNbRwly1fxsbmvvdz5j30go0dc0uq.jpg"
    }
  }
}

Page(options)

