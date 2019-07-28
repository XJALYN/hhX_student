
var author = require("../../net/author.js")
module.exports = {
  bindGetUserinfo(e){
    if (e.detail.errMsg =='getUserInfo:ok'){
      this.net_login()
    }
  }

}