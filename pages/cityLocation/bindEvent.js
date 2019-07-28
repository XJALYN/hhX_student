module.exports = {
  bindcallouttap(e) {
    this.setData({
      showList: true
    })
  },
  bindHideList(e) {
    this.setData({
      showList: false
    })
  },

  // 跳转至老师详情页面
  bindPushToTeacherDetail(e){

  },
  
  bindRegionChange(e,t){
    this.mapCtx.getScale({
      success: res => {
        if (res.errMsg =='getMapScale:ok'){
          this.setData.scale = res.scale
          console.log(res.scale)
          if(this.setData.scale > 13){
            this.net_getSchools()
          }else{
            this.net_getRegions()
          }
        }
      }
    })

     this.mapCtx.getRegion({
       success:res=>{
         console.log(res)
       }
     })
  },
  bindScrollList(e){
    console.log(e)
  }
}