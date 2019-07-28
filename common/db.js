var config = require("../config/config.js")

function db() {}
Object.defineProperties(db.prototype,
{
  'token':{
        get(){
           return wx.getStorageSync("token")
        },
        set(value){
          wx.setStorageSync("token", value)
        }
    },
    "userId":{
      get() {
        return wx.getStorageSync("userId")
      },
      set(value) {
        wx.setStorageSync("userId", value)
      }
    },
    "serverUrl":{
      get() {
        var url = wx.getStorageSync("serverUrl")
        return url
      },
      set(value) {
        wx.setStorageSync("serverUrl", value)
      }
    },
    "contactInfo":{
      get(){
        var data = wx.getStorageSync("contactInfo")
        if(data==null||data==''){
          return ''
        }else{
          return JSON.parse(data)
        }
      },
      set(value){
        wx.setStorageSync("contactInfo", JSON.stringify(value))
      }
    }
})

module.exports = new db()

