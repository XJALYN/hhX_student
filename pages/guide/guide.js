// pages/guide/guide.js

const app = getApp();
const extend = require("../../utils/extend.js")
const author = require("../../net/author.js")
const options = {
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { title: '名校高才生', desc: '所有授课老师均为211/985名校大学生', src: 'https://ws4.sinaimg.cn/large/006tNbRwgy1fxnsrs77axj30u00w148u.jpg' },
      { title: '授课时间灵活', desc: '根据学生课余时间,预约上门授课时间', src: 'https://ws1.sinaimg.cn/large/006tNbRwgy1fxnsvnz7tsj30u00w1n1v.jpg'},
      { title: '全方位保证安全', desc: '打卡安全录屏,可全方位保证授课的安全进行', src: 'https://ws1.sinaimg.cn/large/006tNbRwgy1fxnsx7olzpj30u00w1jz7.jpg'},
      { title: '线上交易更安全', desc: '订单线上支付,保障您的资金安全', src: 'https://ws2.sinaimg.cn/large/006tNbRwgy1fxnsyw3gbtj30u00w1wi2.jpg' }
    ],
		activeIndex:0,
		showGuide: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.$db.token){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }else{
      setTimeout(() => {
        this.setData({
          showGuide: true
        })
      }, 500);
    }
	},
	onShow() {

    
	},
  bindChange:function(e){
    let current = e.detail.current
    this.setData({
      activeIndex: current
    })
  },
  bindGetUserinfo(e){
   
    // 表明引导页已经阅读完毕
    // 调用登录接口
    author.login(res => {
      if (res.code == 0) {
        console.log("登录成功")
        wx.$db.hasEnter = true
        wx.reLaunch({
          url: '/pages/index/index',
        })
        // wx.$router.redirectToIndex({})
      }
    })
  }
}

Page(extend(options));
