// pages/confirmOrder/confirmOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  array: ['美国', '中国', '巴西', '日本'],
	  couponList: ['不使用优惠券', '五折券', '买一送一'],
	  payTypes:[{
		  name:'微信支付',
		  id:'WX'
	  }, {
		  name: '余额支付',
		  id: 'YE'
	  }],
	  index:0,
	  isShow:false
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
  changeServiceType(e){
	  console.log('picker发送选择改变，携带值为', e.detail.value)
	  this.setData({
		  index: e.detail.value
	  })
  },
  changeCoupon(e){
	  console.log('picker发送选择改变，携带值为', e.detail.value)
	  this.setData({
		  couponIndex: e.detail.value
	  })
  },
  goPay(){
	this.setData({
		isShow:true
	})
  },
  set_Focus() {
	  this.setData({
		  isFocus: true
	  })
	  console.log('focus');
  },
  pwdChange(e) {
	  console.log(e);
	  let password = e.detail.value;
	  this.setData({
		  password
	  })
	  if (password.length >= 6) {
		  console.log('go pay' + password);
	  }
  },
  closePayPanel(){
	  this.setData({
		  isShow:false
	  })
  }

})