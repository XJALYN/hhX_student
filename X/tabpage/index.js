// XComponents/tabpage/tabpage.js
var sliderWidth = 40; // 需要设置slider的宽度，用于计算中间位置
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value: [],
    },
    activeIndex: {
      type: String,
      value: 0
    },
    color:{
      type:String,
      value:"rgb(26,173,65)"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  sliderOffset: 0,
  sliderLeft: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(e){
      console.log(e)
      var index = e.currentTarget.id
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft+26.875,
        activeIndex: e.currentTarget.id
      });
      this.triggerEvent("Change", { 'value': this.data.activeIndex})
    }
  },

  ready(){
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
         
          sliderOffset: 26.875 +res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  }
})
