module.exports = {
  bindChangeRate(e){
    const index = e.currentTarget.dataset.index
    const value = e.detail.value
    this.setData({
      [`rateList[${index}].value`]: value
    })
  },

  bindSelectedTag(e){
    var index = e.currentTarget.dataset.index
    var value = e.currentTarget.dataset.value
    if(this.data.selectedTags.indexOf(value.id) > -1){
      this.setData({
        [`tags[${index}].selected`]: false
      })
      this.data.selectedTags.pop(value.id)
    }else{
      this.setData({
        [`tags[${index}].selected`]: true
      })
      this.data.selectedTags.push(value.id)
    }
  },
  bindInputComment(e){
    console.log(e)
    this.setData({
      inputComment:e.detail.value
    })
  },

  bindSubmit(){
    console.log(this.data.inputComment.length)
    if (this.data.inputComment.length < this.data.wordsMin ){
      wx.showToast({
        title: '字数太少',
        icon:"none"
      })
      return
    }
    this.net_rateTeacher()
  }
}