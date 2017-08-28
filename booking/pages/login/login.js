// pages/login/login.js

const xnService = require('../../service/service.js');
const MD5 = require('../../utils/md5.js');
const tenantId = require('../../config').tenantId;
const openType = require('../../config').openType;
var app = getApp()

Page({

  /**
   * 页面的初始数据

   */
  data: {
    username: "",
    password: ''
  },

  bindViewTap: function () {
    wx.redirectTo({
      url: '../forgetpwd/forgetpwd'
    })
  },

  onLoad:function(){

    app.getUserOpenId(function (err, obj) {
      if (!err) {
        let openId = obj.openId
        let unionId = obj.unionId

        let auth={
          tenantNumber: tenantId
        };

        if (unionId){
          auth.openId = unionId;
          auth.openType = "WX_OPEN";
        }else{
          auth.openId = openId;
          auth.openType = "WX_MINI_APP";
        }
        
        xnService.byOauthlogin(auth, function (data) {
          if (data.errors && data.errors.length>0) {
            console.log(data.firstErrorMessage)
          } else {

            // 登陆成功
            wx.setStorageSync('passportId', data.passport.id);
            app.setMemberInfo(data.passport);

            //换取统一账户身份验证
            xnService.exchangeIdentityByPassport({}, function(resp){
              if (resp.errors && resp.errors.length > 0) {
                console.log(resp.firstErrorMessage)
              } else {
                wx.setStorageSync('identityId', resp.identity.id);
                app.setGlobalData("identity", resp.identity);
              }
            })
            
            // 获取用户MemberId
            xnService.getUser({ id: data.passport.userId }, function (res){
              app.setMemberId(res.user.sourceId);
              app.setMemberPhoto(res.user.avatar);
              wx.redirectTo({
                url: '../center/center'
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
  login: function(){
    if (!this.data.username) {
      wx.showToast({
        title: "请输入用户名！"
      })
      return
    }
    wx.switchTab({
        url: '/pages/index/index',
    })
    if (!this.data.password) {
      wx.showToast({
        title: "请输入密码！"
      })
      return
    }

    var vm={
      username: this.data.username,
      password: MD5.hexMD5(this.data.password),
      tenantid: tenantId
    }

    

    wx.showLoading({
      title:"登录中"   
    });
   
    xnService.login(vm,function(data){
      wx.hideLoading();

      if (data.errors && data.errors.length > 0 || data.message) {
        wx.showToast({
          title: data.firstErrorMessage ? data.firstErrorMessage : data.message
        })      
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

        let auth={
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
            wx.showToast({
              title: res.firstErrorMessage
            })
          } else {
            // wx.redirectTo({
            //   url: '../center/center'
            // })
          }
        })

      
        // 获取用户MemberId
        xnService.getUser({ id: data.userId }, function (res) {
          app.setMemberId(res.user.sourceId);
          app.setMemberPhoto(res.user.avatar);
          wx.switchTab({
              url: '/pages/index/index',
          })
        //   wx.redirectTo({
        //     url: '../addPet/addPet'
        //   })
        })
      }
    });
    
  },

})