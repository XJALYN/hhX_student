
module.exports = {

  net_certificationRealName(){
    wx.$methods.certificationRealName().then(res=>{
      console.log(res)
      const { id,
        certified_status,
        identified_card_number,
        opposite_image_url,
        positive_image_url,
        real_name
        } = res.data
      if(res.code==0){
       this.setData({
         id,
         certified_status,
         identified_card_number,
         opposite_image_url,
         positive_image_url,
         real_name
       })
      }
    })
  }

}