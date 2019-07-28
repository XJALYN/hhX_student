
module.exports = {

  // 取消订单
  bindCancle(e){
    wx.showModal({
      title: '你确定要取消订单',
      confirmColor:"#FF6D10",
      success:(res)=>{
        if(res.confirm){
          this.net_orderCancle()
        }
      }
    })
  },
  
  // 跳转至支付
  bindPushToPay() {
    let t = {
      nick_name: this.data.order.teacher.nick_name,
      subject_name: this.data.order.subject.full_name,
      paidOrderId: this.data.order.paid_order_id
    }

    wx.$router.redirectToOrderPay(t)
  },
 
  // 给老师打电话
  bindCallTeacher(){
    wx.makePhoneCall({
      phoneNumber: this.data.order.teacher.phone,
    })
  },

  // 进入课程详情
  bindPushToCourseDetail() {
    wx.$router.pushToCourseDetail({ courseId: this.data.order.course_id})
  }

}