
module.exports = {

  // 我的信息
  bindPushToUserInfo(e){
    wx.$router.pushToUserInfo()
  },
  bindPushToMyOrderList(e){
    wx.$router.pushToMyOrderList()
  },

  // 我的账户
  bindPushToMyAccount(e){
    wx.$router.pushToMyAccount()
  },
  bindPushToAddressList(e){
    wx.$router.pushToAddressList(e)
  },
  // 我的订单列表
  bindPushToMyOrderList(e){
    wx.$router.pushToMyOrderList()
  },

  // 我的历史课程列表
  bindPushToHistoryCurseList(e){
    wx.$router.pushToHistoryCurseList()
  },
  // 跳转到帮助
  bindPushToHelp(e){
    wx.$router.pushToHelp()
  },
  // 认证
  bindPushToCertification(e){
    if (!this.data.is_phone_certified){
      wx.$router.pushToBindPhone()
      return
    }
    // 手机号码验证通过后 验证实名认证
    if (this.data.real_name_certified_status==-1){
      wx.$router.pushToUploadID()
    }else{
      wx.$router.pushToCertification()
    }
  },
  // 跳转至收藏
  bindPushToCollect(e){
     wx.$router.pushToCollectTeachers()
  }
}