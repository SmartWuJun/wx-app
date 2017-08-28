// recharge.js
const xnService = require('../../service/service.js');

var app = getApp();
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
      showView: false,
      rechargeValue:0,
      price:'',
      memberInfo:{},
      balance:0
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let _this = this;
      
      showView: (options.showView == "true" ? true : false)
      var memberId = app.getMemberId();
      // var memberId = 900192142528745472;//测试数据
      var vm = {
        id: memberId
      };
      xnService.getMember(vm, function (data) {

        if (data.message) {
          wx.showToast({
            title: data.message
          })
        } else {
          console.log(data.member);

          _this.setData({
            cardnumber: data.member.cardNumber,
            point: data.member.calPoint,
            balance: data.member.calRechargeAmount
          })

          wxbarcode.qrcode('qrcode', data.member.cardNumber, 500, 500);

        }
      });

      // this.getCardBalance(memberId);

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

  open(){
    var that = this;
    that.setData({
      showView:true
    })
  },
  close() {
    var that = this;
    that.setData({
      showView: false
    })
  },
  //查询会员卡余额
  // getCardBalance(memberId) {
  //   var vm = {
  //     memberIdList: [memberId],
  //     pageSize: 1,
  //     status: 'unuse',
  //     isUsefulEndOut: false
  //   }
  //   xnService.getMember(vm, (data) => {
  //     console.log(data);
  //     this.setData({
  //       coupon: data.totalCount
  //     });
  //   });
  // },
  choosePrice(e){
    console.log(e);
    const value = e.currentTarget.dataset.value;
    console.log(value);
    this.setData({
      price:value
    });
  },
    requestPayment: function() {
        var self = this

        self.setData({
            loading: true
        })
        // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
        // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject
        app.getUserOpenId(function(err, openid) {
            if (!err) {
                wx.request({
                    url: paymentUrl,
                    data: {
                        openid
                    },
                    method: 'POST',
                    success: function(res) {
                        console.log('unified order success, response is:', res)
                        var payargs = res.data.payargs
                        wx.requestPayment({
                            timeStamp: payargs.timeStamp,
                            nonceStr: payargs.nonceStr,
                            package: payargs.package,
                            signType: payargs.signType,
                            paySign: payargs.paySign
                        })

                        self.setData({
                            loading: false
                        })
                    }
                })
            } else {
                console.log('err:', err)
                self.setData({
                    loading: false
                })
            }
        })
    },

})