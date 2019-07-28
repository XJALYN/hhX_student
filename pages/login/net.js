var author = require("../../net/author.js")


module.exports = {
 net_login(){
   this.setData({
     'loading':true
   })
   author.login(res => {
     if (res.code == 0) {
       wx.db.token = res.data.access_token
       this.setData({
         'loading': false
       })
       wx.reLaunch({
         url: '/pages/index/index',
       })
     }
   })
 }
}