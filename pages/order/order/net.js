

module.exports = {

  // 订单结算
  net_orderCheckout() {
    let t = {
      subject_id: this.data.subjectId,
      teacher_id: this.data.teacherId
    }
    console.log(t)
    wx.$methods.orderCheckout(t).then(res => {
      console.log(res)
      if(res.code==0){
        this.setData({
          orderData: res.data
        })
      }
    })
    
  },

  // 确认下单
  net_orderCreate(){
    if (this.data.orderData.address==null){
      wx.showToast({
        title: '请选择地址',
      })
      return 
    }

    let t = { 
       subject_id: this.data.orderData.subject.id, 
       address_id: this.data.orderData.address.id,
       teacher_id: this.data.orderData.teacher.id
    }

    wx.$methods.orderCreate(t).then(res=>{
      if (res.code == 0 && !res.data.is_date_time_modified && !res.data.is_subject_modified){
        let t = {
          nick_name: this.data.orderData.teacher.nick_name,
          subject_name: this.data.orderData.subject.full_name,
          paidOrderId: res.data.paid_order_id
        }
        wx.$router.redirectToOrderPay(t)
      } else if (res.data.is_date_time_modified){
        wx.showModal({
          title: '当前选择课程时间有变动',
          content: '',
          success:res=>{
            wx.navigateBack({
            })
          }
        })
      }
    })
  }
}