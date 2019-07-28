
module.exports = {
  net_accounts(){
    wx.$methods.accounts().then(res=>{
      if(res.code==0){
        console.log(res)
        this.setData({
          'balance': res.data.balance
        })
      }
    })
  }
}