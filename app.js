//app.js
const checkManager = require("./utils/updateManager.js")

App({

  onLaunch: function () {
    const db = require("utils/db.js")
    wx.$db = db
    const methods = require("net/methods.js")
    wx.$methods = methods
    const router = require("common/router.js")
    wx.$router = router
    const extend = require("utils/extend.js")
    wx.$extend = extend
    const showToast = require("utils/util.js").showToast
    wx.$showToast = showToast
    checkManager.checkUpdate()
  
    this.init()
  },

  init() {

    // 1.获取服务器域名 成功之后
     console.log(wx.$db)
    //if(wx.$db.serverUrl == null) {
      wx.$db.serverUrl = "https://student.houhouxue.com/api/v1.0"
    //}
    if (wx.$db.hasEnter) {
      // 登录进行登录
      if (!wx.$db.token) {
        this.login()
      } else {
        wx.checkSession({
          success: res => {
          },
          fail: res => {
            wx.$db.token = ''
            this.login()
          }
        })
      }
    } else {
      wx.$router.redirectToGuide()
      return
    }
  },
 
 login() {
    var author = require("net/author.js")
    author.login(res => {
      if (res.code == 0) {
        wx.$db.token = res.data.access_token
        if (this.loginReady != null) {
          this.loginReady()
        }
      }
    })
  },
  
  globalData: {
    userInfo: null
  }
  
})