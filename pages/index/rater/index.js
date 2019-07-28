// pages/teacherList/rater/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   value:{
     type:String,
     value:"5",
     observer:function(newValue,oldValue){
         let units = newValue.split(".")
       
         this.setData({
           numFullStar: parseInt(units[0]),
           percentStar: units.length == 0 ? 0 : parseInt([1])
         })
     }
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
    numFullStar:5,
    percentStar:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
