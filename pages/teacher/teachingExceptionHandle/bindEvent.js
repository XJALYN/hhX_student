module.exports = {
  bindHandle(e){
     var mode = e.currentTarget.dataset.mode
     this.setData({
       'mode':mode
     })
  },
  bindSubmit(e){
    wx.showModal({
      title: '请您再次确认!',
      content: '提交后将不能再进行修改',
      success:res=>{
        if(res.confirm){
          this.net_courseExceptionHandle()
        }
      }
    })
  }
}