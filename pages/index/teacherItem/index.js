module.exports = {
  bindPushToDetail(e){
    let teacherId = e.currentTarget.dataset.teacherid
    wx.$router.pushToTeacherDetail({teacherId})
  }
}