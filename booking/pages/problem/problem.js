// problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'',
    picList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  textChange(e){
    console.log(e);
    const value=e.detail.value;
    this.setData({
        text:value
    })
  },
  addPic(){
      var self=this;
      wx.chooseImage({
          success: function(res) {
              var tempFilePaths = res.tempFilePaths

              tempFilePaths.forEach((item)=>{
                  self.data.picList.push({ url:item });
              })  

              
                self.setData({
                    picList:self.data.picList
                });
                // picList
            
          },
      })
  },
  uploadPic(pic){
             wx.uploadFile({
                  url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                  filePath: tempFilePaths[0],
                  name: 'file',
                  formData: {
                      'user': 'test'
                  },
                  success: function (res) {
                      var data = res.data
                      //do something
                  }
              })
  },
  deletePic(e){
      const index=e.target.dataset.index;
      this.data.picList.splice(index,1);
      this.setData({
          picList:this.data.picList
      })
  }
})