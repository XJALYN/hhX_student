
var path = {
  index: "/pages/index/index",
  bindPhone:"/pages/user/bindPhone/bindPhone", // 绑定手机号码
  myAccount: "/pages/user/myAccount/myAccount",// 我的账号
  updateNickName: "/pages/user/updateNickName/updateNickName",// 更新用户昵称
  uploadID: "/pages/user/uploadID/uploadID",// 上传用户身份id
  userInfo: "/pages/user/userInfo/userInfo", // 查看用户信息
  collectTeachers:"/pages/user/collectTeachers/collectTeachers",// 老师收藏列表
  certification: "/pages/user/certification/certification",// 认证结果查看页面
  webview:"/pages/webview/webview",
  
  recharge: "/pages/user/recharge/recharge",// 充值
  bill: "/pages/user/bill/bill", // 账单 
  withdraw: "/pages/user/withdraw/withdraw",// 提现

  orderPaySuccess: "/pages/order/orderPaySuccess/orderPaySuccess",// 订单支付成功
  orderPay: "/pages/order/orderPay/orderPay", // 支付页面
  myOrderList: "/pages/order/myOrderList/myOrderList",// 我的订单列表
  order: "/pages/order/order/order",// 预订
  orderDetail: "/pages/order/orderDetail/orderDetail",// 订单详情
  orderDateTimes: "/pages/order/orderDateTimes/orderDateTimes", // 订单时间表
  orderAddressList:"/pages/order/addressList/addressList", // 订单地址列表选择


  courseRecord: "/pages/course/courseRecord/courseRecord", // 课程反馈记录
  myCourseList: "/pages/course/myCourseList/myCourseList",// 课程
  courseFeedback: "/pages/course/courseFeedback/courseFeedback", // 课程反馈
  
  courseDetail: "/pages/course/courseDetail/courseDetail", // 课程详情
  couseFilter: "/pages/course/courseFilter/courseFilter", // 课程过滤
  classHourDetail:"/pages/course/classHourDetail/classHourDetail",//课时详情




  complaintTeacher:"/pages/teacher/complaintTeacher/complaintTeacher",// 投诉老师
  teacherDetail: "/pages/teacher/teacherDetail/teacherDetail",// 教师详情
  teacherList: "/pages/teacher/teacherList/teacherList",// 教师列表
  commentTeacherList: "/pages/teacher/commentTeacherList/commentTeacherList",//评论老师列表
  commentTeacher: "/pages/teacher/commentTeacher/commentTeacher", // 评价老师
  teacherCommentList: "/pages/teacher/teacherCommentList/teacherCommentList", // 老师评论列表
  teachingExceptionHandle: "/teacher/pages/teachingExceptionHandle/teachingExceptionHandle",

  addressList: "/pages/address/addressList/addressList",
  addAddress: "/pages/address/addAddress/addAddress",
  addressUpdate: "/pages/address/addressUpdate/addressUpdate",




  find:"/pages/find/find", // 查找推荐
  heplCenter:"/pages/helpCenter/helpCenter",// 帮助中心
  studentInfo:"/pages/studentInfo/studentInfo",// 学生信息
  help:"/pages/help/help",  // 帮助
  helpCenter: "/pages/helpCenter/helpCenter",
  stageSelected:"/pages/stageSelected/stageSelected", // 课业阶段选择
  cityLocation: "/pages/cityLocation/cityLocation",
  guide: "/pages/guide/guide"
}

module.exports = {
  // 将json 编码成 urlEncoded 格式为key1=value1&key2=value2
  urlEncoded(e) {
    if (e instanceof Object) {
      var str = ""
      for (var i in e) {
        str += '&'
        str += i
        str += '='
        str += e[i]
      }
      return str.substr(1, str.length - 1)
    }
    return ''
  },

  // 跳转至页面
  pushToPath(path, params) {
    var queryString = this.urlEncoded(params)
    wx.navigateTo({
      url: path + '?' + queryString,
    })
  },
  // 
  redirectToPath(path,params){
    var queryString = this.urlEncoded(params)
    console.log(path + '?' + queryString)
    wx.redirectTo({
      url: path + '?' + queryString,
    })
  },
  

  /*
   * 绑定手机
   * params(json)
   */
  pushToBindPhone(params){
    this.pushToPath(path.bindPhone,params)
  },
  /*
   * 查看课时详情
   * params(json)
   */
  pushToClassHourDetail(params){
    this.pushToPath(path.classHourDetail, params)
  },
  /*
   * 投诉老师
   * params(json)
   */
  pushToComplaintTeacher(params){
    this.pushToPath(path.complaintTeacher, params)
  },


  /*
   * 推荐老师和课程
   * params(json)
   */
  pushToFind(params){
    this.pushToPath(path.find,params)
  },
  /*
   * 课程中心
   * params(json)
   */
  pushToHeplCenter(params){
    this.pushToPath(path.heplCenter,params)
  },
 



  /*
   * 我的账户
   * params(json)
   */
  pushToMyAccount(params){
    this.pushToPath(path.myAccount, params)
  },

  /*
   * 我的订单列表
   * params(json)
   */
  pushToMyOrderList(params){
    this.pushToPath(path.myOrderList, params)
  },
  /*
   * 预订课程
   * params(json)
   */
  pushToOrder(params){
    this.pushToPath(path.order,params);
  },
 

  /*
   * 查看教师详情
   * params(json)
   */
  pushToTeacherDetail(params){
    this.pushToPath(path.teacherDetail, params);
  },
  /*
   * 查看教师列表
   * params(json)
   */
  pushToTeacherList(params){
    this.pushToPath(path.teacherList, params);
  },
  /*
   * 上传身份证
   * params(json)
   */
  redirectToUploadID(params){
    this.redirectToPath(path.uploadID,params);
  },
  pushToUploadID(params){
    this.pushToPath(path.uploadID, params);
  },

  /*
   * 查看用户信息
   * params(json)
   */
  pushToUserInfo(params){
    this.pushToPath(path.userInfo,params);
  },
  /*
   * 填写学生信息
   * params(json)
   */
  pushToStudentInfo(params){
    this.pushToPath(path.studentInfo,params);
  },

  /*
   * 更新用户昵称
   * params(json)
   */
  pushToUpdateNickName(params){
    this.pushToPath(path.updateNickName,params);
  },
  /*
   * 提现
   * params(json)
   */
  pushToWithdraw(params){
    this.pushToPath(path.withdraw,params)
  },
  /*
   * 充值
   * params(json)
   */
  pushToRecharge(params){
    this.pushToPath(path.recharge, params)
  },
  /*
   * 账单
   * params(json)
   */
  pushToBill(params){
    this.pushToPath(path.bill,params)
  },
   /*
   * 账单
   * params(json)
   */
  pushToHelp(params){
    this.pushToPath(path.help,params)
  },
  /*
   * 课程详情
   * params(json)
   */
  pushToCourseDetail(params){
    this.pushToPath(path.courseDetail,params)
  },
    /*
   * 查看订单详情 
   * params(json)
   */
  pushToOrderDetail(params){
    this.pushToPath(path.orderDetail,params)
  },
  
  /*
   * 订单时间表
   * params(json)
   */
  pushToOrderDateTimes(params){
    this.pushToPath(path.orderDateTimes,params)
  },
  
  /*
   * 评论老师列表
   * params(json)
   */
  pushToCommentTeacherList(params){
    this.pushToPath(path.commentTeacherList,params)
  },

  /*
   * 评价老师
   */
  pushToCommentTeacher(params){
    this.pushToPath(path.commentTeacher, params)
  },
  /*
   * 订单地址列表选择
   */
  pushToOrderAddressList(params){
    this.pushToPath(path.orderAddressList, params)
  },

  // 收藏老师页面
  pushToCollectTeachers(params){
    this.pushToPath(path.collectTeachers, params)
  },

  // 进入webview页面
  pushToWebview(params){
    this.pushToPath(path.webview,params)
  },





  pushToOrderPaySuccess(params){
    this.pushToPath(path.orderPaySuccess, params)
  },

  redirectToOrderPay(params){
    this.redirectToPath(path.orderPay, params)
  },
  
  redirectToOrderPaySuccess(params){
    this.redirectToPath(path.orderPaySuccess, params)
  },

  pushToOrderPay(params){
    this.pushToPath(path.orderPay, params)
  },



  pushToAddressList(params){
    this.pushToPath(path.addressList, params)
  },

  pushToAddAddress(params){
    this.pushToPath(path.addAddress, params)
  },

  pushToAddressUpdate(params) {
    this.pushToPath(path.addressUpdate, params)
  },
  pushToCertification(params){
    this.pushToPath(path.certification, params)
  },


  pushToTeachingExceptionHandle(params){
    this.pushToPath(path.teachingExceptionHandle,params)
  },
  pushToHelpCenter(params){
    this.pushToPath(path.helpCenter,params)
  },
  pushToCommentTeacher(params){
    this.pushToPath(path.commentTeacher,params)
  },
  pushToTeacherCommentList(params){
    this.pushToPath(path.teacherCommentList, params)
  },
  pushToCourseRecord(params){
    this.pushToPath(path.courseRecord, params)
  },
  pushToMyCourseList(params){
    this.pushToPath(path.myCourseList,params)
  },

  pushToCityLocation(params){
    this.pushToPath(path.cityLocation, params)
  },

  pushToCourseFeedback(params){
    this.pushToPath(path.courseFeedback, params)
  },

  
  redirectToIndex(params) {
    this.redirectToPath(path.index, params)
  },

  redirectToGuide(params) {
    this.redirectToPath(path.guide, params)
  },

  pushToStageSelected(params) {
    this.pushToPath(path.stageSelected, params)
  },

  pushToCouseFilter(params) {
    this.pushToPath(path.couseFilter, params)
  }
}