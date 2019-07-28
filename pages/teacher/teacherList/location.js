var location = require("../../../utils/location.js")

module.exports = {
  location_init(){
     var that = this
    wx.getLocation({
      success: res=>{
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          'latitude': latitude,
          'longitude': longitude,
          'userLocationAuthorize': true
        })
        that.net_teacherList()
        location.reverseGeocoder({
          location:{
            'latitude': latitude,
            'longitude': longitude
          },
          success:(res)=>{
           console.log(res)
            var address = res.result.address_component.street
            that.setData({
              'address':address
            })
          }
        })
      },
      fail:(res)=>{
        this.setData({
          userLocationAuthorize: false
        })
      }
    })
  }
}