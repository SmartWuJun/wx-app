// index.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        problemTip:false
    },
    pets: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let app=getApp();
    //添加模态框组件
    new app.Modal();


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
  onShareAppMessage: function (opt) {
      console.log(opt);
    // return {
    //     title:'客服',
    //     success(){
    //         console.log('success');
    //     }
    // }
  },
  doBooking(){
     
      this.modal.show({
          okText: '去添加',
          cancelText: '不添加',
          content: '是否添加下一只宠物',
          ok() {
              console.log('继续添加');
          },
          cancel(){
              console.log('提交数据');
              wx.navigateTo({
                  url: '/pages/submitOrder/submitOrder',
              })
          }
      });
    
  },
  hideMask(){
      this.setData({
          problemTip:false
      })
  }
})