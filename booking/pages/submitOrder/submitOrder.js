// submitOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pets:[
        {
            shop:'石路店',
            photo:'',
            name:'小白',
            services:[
                {name:'洗澡'},
                { name: '烫头' }
            ]

        },
        {
            shop: '永旺店',
            photo: '',
            name: '小黑',
            services: [
                { name: '洗澡1' },
                { name: '烫头1' }
            ]

        }
    ],
    payTypes: [
        { name: 'USA', value: '微信支付' },
        { name: 'CHN', value: '账户余额', checked: 'true' },
        { name: 'BRA', value: '美容卡' }
      
    ],
    pwdTip:false,
    moneyTip:false,
    price:100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app=getApp();
    new app.Modal();

    console.log(this)
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
  checkboxChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  submit(){
    //   this.setData({
    //       moneyTip:true
    //   })
    var self=this;
      this.setData({
          textAreaHide:true
      })
      this.modal.show({
          okText: '确定支付',
          showCancel:false,
          type:'submit',
          placeholder:'输入宠尚卡密码',
          ok(res) {
              console.log(res);
              console.log('继续添加');
          },
          close(){
              self.setData({
                  textAreaHide: false
              })
          }
      });
  },
  closeMask(){
      this.setData({
          pwdTip: false,
          moneyTip:false
      })
  }
})