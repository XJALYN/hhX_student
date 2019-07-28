module.exports = {

  net_subjects() {
    wx.$methods.subjects({ "classify": "junior" }).then(res => {
      console.log(res)
      if (res.code == 0) {
        this.setData({
          stageList: res.data,
          subjects: res.data[0].grades[0].subjects
        })
        this.generatePickerList(res.data,0)
      }
    })
  },

  net_getSchools(){
    let markers = [
      {
        id: "1",
        latitude: 31.194212,
        longitude: 121.436126,
        iconPath: "/images/city_location.png",
        scale: '11',
        callout: {
          content: "上海交通大学(100人)",
          color: "#FFFFFFFF",
          bgColor: "#5E25ED99",
          fontSize: 14,
          padding: 10,
          borderRadius: 17,
          display: "ALWAYS",
          borderWidth: 1,
          borderColor: '#5E25EDFF'
        }
      }
    ]
    this.setData({
      markers: markers
    })
  },
  net_getRegions(){
    let markers = [
      {
        id: "1",
        latitude: 31.194212,
        longitude: 121.436126,
        iconPath: "/images/city_location.png",
        scale: '11',
        callout: {
          content: "浦东新区",
          color: "#FFFFFFFF",
          bgColor: "#5E25ED99",
          fontSize: 14,
          padding: 30,
          borderRadius: 37,
          display: "ALWAYS",
          borderWidth: 1,
          borderColor: '#5E25EDFF'
        }
      }
    ]
    this.setData({
      markers: markers
    })
  },

  net_getCities(){
    wx.$methods.getCities().then(res=>{
      let cityIndex = 0
      res.data.map((item,index)=>{
        if(item.id==this.data.cityId){
          cityIndex = index
        }
      })
      this.setData({
        cityList:res.data,
        cityIndex
      })
    })
  },
  
  net_teacherList(){

  }
}