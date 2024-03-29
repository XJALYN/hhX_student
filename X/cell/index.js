// XComponents/cell/cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    icon:{
      type:String,
      value:""
    },
   
    title:{
      type:String,
      value:""
    },
    detail:{
      type: String,
      value: ""
    },
    dotNum:{
      type:Number,
      value:0
    },
    url:{
      type:String,
      value:''
    },
    showTopLine:{
      type: String,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPushToNext(e){
      if(this.data.url){
        wx.navigateTo({
          url: this.data.url,
        })
      }
    }
  }
})
