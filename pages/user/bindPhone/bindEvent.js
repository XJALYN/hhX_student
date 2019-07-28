const pattern = require("../../../utils/pattern.js")
module.exports = {
  bindGetCode(e){
    if(this.data.duration != 60){
      return
    }
    if (pattern.testPhone(this.data.phone)){
      this.net_getCaptchas()
    }else{
      wx.showToast({
        title: '手机格式不正确',
        icon:'none'
      })
      return
    }
    
    

  },
  countDown(){
    this.data.timer = setInterval(res => {
      this.data.duration -= 1
      if (this.data.duration <= 0) {
        this.setData({
          duration: 60
        })
        clearInterval(this.data.timer)
        this.data.timer = null
      } else {
        this.setData({
          duration: this.data.duration
        })
      }
    }, 1000)
  },
  bindInputPhone(e){
   this.setData({
     phone:e.detail.value
   })
  },
  bindInputCode(e){
   this.setData({
     code:e.detail.value
   })
  },
  bindToSubmit(){
    this.net_certificationPhone()
  }
}