
module.exports = {
  bindPushToBill(e){
    wx.$router.pushToBill({})
  },
  bindPushToRecharge(e){
    wx.$router.pushToRecharge({})
  },
  bindPushToWithdraw(){
    wx.$router.pushToWithdraw({})
  }
}