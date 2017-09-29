// login.js

const xnService = require('../../service/service.js');
const MD5 = require('../../utils/md5.js');
const xnShowWarn = require('../../utils/util.js').xnShowWarn;
const tenantId = require('../../config').tenantId;
const openType = require('../../config').openType;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getUserOpenId(function (err, obj) {
      if (!err) {
        let openId = obj.openId
        let unionId = obj.unionId

        let auth = {
          tenantNumber: tenantId
        };

        if (unionId) {
          auth.openId = unionId;
          auth.openType = "WX_OPEN";
        } else {
          auth.openId = openId;
          auth.openType = "WX_MINI_APP";
        }

        xnService.byOauthlogin(auth, function (data) {
          if (data.errors && data.errors.length > 0) {
            console.log(data.firstErrorMessage)
          } else {

            // 登陆成功
            wx.setStorageSync('passportId', data.passport.id);
            wx.setStorageSync('tenantId', data.passport.tenantId);
            app.setMemberInfo(data.passport);

            //换取统一账户身份验证
            xnService.exchangeIdentityByPassport({}, function (resp) {
              if (resp.errors && resp.errors.length > 0) {
                console.log(resp.firstErrorMessage)
              } else {
                wx.setStorageSync('identityId', resp.identity.id);
                app.setGlobalData("identity", resp.identity);
              }
            })

            // 获取用户MemberId
            xnService.getUser({ id: data.passport.userId }, function (res) {
              app.setMemberId(res.user.sourceId);
              app.setMemberPhoto(res.user.avatar);
              app.setUnionId(res.user.unionId);
              wx.switchTab({
                url: '/pages/main/main'
              })
            })
          }
        })
      } else {
        console.log('err:', err)
      }
    })
  },

  bindInputAccount: function (e) {
    this.setData({
      username: e.detail.value
    });
  },
  bindInputPassword: function (e) {
    this.setData({
      password: e.detail.value
    });
  },


  /**
     * 用户登录
     */
  login: function () {
    if (!this.data.username) {
      xnShowWarn("请输入用户名！")
      return
    }

    if (!this.data.password) {
      xnShowWarn("请输入密码！")
      return
    }

    var vm = {
      username: this.data.username,
      password: MD5.hexMD5(this.data.password),
      tenantid: tenantId
    }

    wx.showToast({
      title: '登录中...',
      icon: 'loading'
    });

    xnService.login(vm, function (data) {
      wx.hideLoading();
      if (data.errors && data.errors.length > 0 || data.message) {
        xnShowWarn(data.firstErrorMessage ? data.firstErrorMessage : data.message)
      } else {
        wx.setStorageSync('passportId', data.id);
        app.setMemberInfo(data);

        //换取统一账户身份验证
        xnService.exchangeIdentityByPassport({}, function (resp) {
          if (resp.errors && resp.errors.length > 0) {
            console.log(resp.firstErrorMessage)
          } else {
            wx.setStorageSync('identityId', resp.identity.id);
            app.setGlobalData("identity", resp.identity);
          }
        })

        // 
        let openId = app.getGlobalData("openId");
        let unionId = app.getGlobalData("unionId");

        let auth = {
          userId: data.userId,
          tenantId: data.tenantId
        }

        if (unionId) {
          auth.openId = unionId;
          auth.openType = "WX_OPEN";
        } else {
          auth.openId = openId;
          auth.openType = "WX_MINI_APP";
        }

        xnService.userOauthCreate(auth, function (res) {
          if (res.errors && res.errors.length > 0) {
            xnShowWarn(res.firstErrorMessage)
          } else {
           
          }
        })

        // 获取用户MemberId
        xnService.getUser({ id: data.userId }, function (res) {
          app.setMemberId(res.user.sourceId);
          app.setMemberPhoto(res.user.avatar);
          app.setUnionId(res.user.unionId);
          wx.switchTab({
            url: '/pages/my/my'
          })
         
        })
      }
    });

  }

 
})