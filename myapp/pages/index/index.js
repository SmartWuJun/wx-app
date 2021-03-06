//index.js
//获取应用实例
var until = require('../../utils/code/index')
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {

        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        }
    },
    onPullDownRefresh() {
        console.log(123);
    },
    onReachBottom() {
        console.log(4);
    },
    onPageScroll(object) {
        console.log(object.scrollTop);
    },
    getUserInfo: function(e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onReady() {
        console.log(this.data.userInfo);
        until.qrcode('name', '0926', 300, 300, this.data.userInfo.avatarUrl);
    }
})