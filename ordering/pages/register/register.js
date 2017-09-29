// pages/register/register.js
const xnService = require('../../service/service.js');
const MD5 = require('../../utils/md5.js');
const xnShowWarn = require('../../utils/util.js').xnShowWarn;
const tenantId = require('../../config').tenantId;
const openType = require('../../config').openType;
var app = getApp()
var id = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobilePhone: '',
    name: '',
    code: '',
    inviteCode: '',
    sendCodeTip: "获取验证码",
    countdown: 60,
    sendCodeDisabled: false,
    submitDisabled: false,
  },


 
  onLoad: function (option) {
    console.log(option);
    let _this = this;
    _this.setData({
      mobilePhone: option.mobilePhone,
      code: option.code,
      inviteCode: option.inviteCode
    })
    let profile = {
      code: "pos.need.sign.agreement",
      level: "TENANT",
      operatingUnitId: tenantId
    };
    // xnService.getProfileOptionValueNoPassport(profile, function (data) {
    //   if (data.value) {
    //     _this.setData({
    //       optionValue: data.value
    //     })
    //   }
    // });

    if (option && option.agree == "true") {
      _this.setData({
        checked: true
      })
    }
    let tenant = {
      tenantNumber: tenantId
    };
    // xnService.getSettingByTenantIdNonePassport(tenant, function (data) {
    //   let setting = data.setting;
    //   let url1 = setting.bookingPicture1Url;
    //   let url2 = setting.bookingPicture2Url;
    //   let url3 = setting.bookingPicture3Url;
    //   _this.setData({
    //     imgUrls: [url1, url2, url3]
    //   })

    // });
  },
  bindInputMobilePhone: function (e) {
    this.setData({
      mobilePhone: e.detail.value
    });
  },
  bindInputName: function (e) {
    this.setData({
      name: e.detail.value
    });
  },
  bindInputCode: function (e) {
    this.setData({
      code: e.detail.value
    });
  },
  bindInputInviteCode: function (e) {
    this.setData({
      inviteCode: e.detail.value
    });
  },
  bindSendCodeTip: function (value) {
    this.setData({
      sendCodeTip: value
    });
  },
  bindSendCodeDisabled: function (value) {
    this.setData({
      sendCodeDisabled: value
    });
  },
  //设置验证吗点击
  bindSubmitDisabled: function (value) {
    this.setData({
      submitDisabled: value
    });
  },

  //修改验证码提示
  updateText: function () {
    if (this.data.countdown == 0) {
      this.bindSendCodeDisabled(false);
      this.bindSendCodeTip("获取验证码");
      this.data.countdown = 60;
      return;
    } else {
      this.bindSendCodeTip(this.data.countdown + "S");
      this.data.countdown--;
    }
    setTimeout(() => {
      this.updateText();
    }, 1000);
  },



  /**
   * 用户登录
   */
  sendCode: function () {
    const _this = this;
    if (!this.data.mobilePhone) {
      xnShowWarn("请输入手机号！")
      return
    } else {
      var phoneNumReg = /^1\d{10}$/;
      if (!phoneNumReg.test(_this.data.mobilePhone)) {
        xnShowWarn("手机号不正确!")
        return;
      }
    }

    _this.bindSendCodeDisabled(true);

    let vm = {
      mobilePhone: _this.data.mobilePhone
    }

    wx.showLoading({
      title: "获取验证码中"
    });

    xnService.createVerificationCode(vm, function (data) {
      wx.hideLoading();

      if (data.firstErrorMessage || data.message) {
        _this.bindSendCodeDisabled(false);
        xnShowWarn(data.firstErrorMessage ? data.firstErrorMessage : data.message)
      } else {
        _this.bindSubmitDisabled(false);
        _this.updateText();
      }
    });

  },

  submit: function () {
    var self = this;
    if (!this.data.mobilePhone) {
      xnShowWarn("请输入手机号！")
      return
    }else{
      var phoneNumReg = /^1\d{10}$/;
      if (!phoneNumReg.test(this.data.mobilePhone)) {
        xnShowWarn("请输入正确的手机号!")
        return;
      }
    }

    if (!this.data.code) {
      xnShowWarn("请输入验证码！")
      return
    }
    if (!this.data.code) {
      xnShowWarn("请输入密码！")
      return
    }





    self.bindSubmitDisabled(true);

    var vm = {
      mobilePhone: this.data.mobilePhone,
      tenantNumber: tenantId,
      code: this.data.code,
      name: this.data.name,
      salesCode: this.data.inviteCode,
      salesCodeType: this.data.types[this.data.typeIndex].name
    }



    wx.showLoading({
      title: "注册中"
    });

    xnService.registerMemberFormMiniApp(vm, function (data) {
      wx.hideLoading();

      if (data.firstErrorMessage || data.message) {
        self.bindSubmitDisabled(false);
        wx.showToast({
          title: data.firstErrorMessage ? data.firstErrorMessage : data.message,
          image: '/images/warn.png'
        })
      } else {
        //注册并自动登录成功
        wx.setStorageSync('passportId', data.passport.id);
        app.setMemberInfo(data.passport);

        //换取统一账户身份验证
        xnService.exchangeIdentityByPassport({}, function (resp) {
          if (resp.firstErrorMessage || resp.message) {
            console.log(resp.firstErrorMessage ? resp.firstErrorMessage : resp.message)
          } else {
            wx.setStorageSync('identityId', resp.identity.id);
            app.setGlobalData("identity", resp.identity);
          }
        })

        //
        let openId = app.getGlobalData("openId");
        let unionId = app.getGlobalData("unionId");

        if (unionId) {
          let auth = {
            userId: data.userId,
            tenantId: tenantId,
            openId: unionId,
            openType: "WX_OPEN",
          }
          xnService.userOauthCreate(auth, function (res) {
            if (res.firstErrorMessage || res.message) {
              wx.showToast({
                title: res.firstErrorMessage ? res.firstErrorMessage : res.message,
                image: '/images/warn.png'
              })
            } else {
            }
          })

        } else if (openId) {
          let auth = {
            userId: data.userId,
            tenantId: tenantId,
            openId: openId,
            openType: "WX_MINI_APP",
          }
          xnService.userOauthCreate(auth, function (res) {
            if (res.firstErrorMessage || res.message) {
              wx.showToast({
                title: res.firstErrorMessage ? res.firstErrorMessage : res.message,
                image: '/images/warn.png'
              })
            } else {
            }
          })
        }
        // 获取用户MemberId
        xnService.getUser({ id: data.passport.userId }, function (res) {
          app.setMemberId(res.user.sourceId);
          app.setMemberPhoto(res.user.avatar);
          app.setUnionId(res.user.unionId);
          setTimeout(function () {
            wx.showToast({
              title: '密码为手机号'
            })
          }, 1000)
          wx.reLaunch({
            url: '../newLogin/newLogin'
          })
        })
      }
    });

  },

})