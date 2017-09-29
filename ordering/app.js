const openIdUrl = require('./config').openIdUrl;
const appId = require('./config').appId;
const appsecret = require('./config').appsecret;
const xnService = require('./service/service.js');
import { Modal } from './component/modal/modal';
import { Tip } from './component/tip/tip';
App({
    Modal,
    Tip,
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        memberInfo:'',
        unionId:'',
        hasLogin: false,
        openId: null,
        unionId: null,
        memberId:'',
        photo:'',
        totalPets:0
    },

    setUnionId: function (data) {
      this.globalData.unionId = data;
    },
    getUnionId: function (data) {
      return this.globalData.unionId;
    },
    setMemberInfo: function (data) {
        this.globalData.memberInfo = data;
    },
    getMemberInfo: function (data) {
        return this.globalData.memberInfo;
    },
    getMemberId: function () {
        return this.globalData.memberId
    },
    setMemberId: function (value) {
        this.globalData.memberId = value;
    },
    getMemberPhoto(){
        return this.globalData.photo
    },
    setMemberPhoto(value){
        this.globalData.photo = value;
    },
    getPetTotalCount() {
      return this.globalData.petTotalCount
    },
    setPetTotalCount(value) {
      this.globalData.petTotalCount = value;
    },
    setGlobalData:function(key,value){
        this.globalData[key] = value;
    },
    getGlobalData:function(key){
        return this.globalData[key];
    },
    // lazy loading openid
    getUserOpenId: function(callback) {
        var self = this
        if (self.globalData.openId) {
            callback(null, { openId: self.globalData.openId, unionId: self.globalData.unionId } )
        } else {

            // 登录
            wx.login({
                success: function (res) {

                    let code = res.code;
                    // 获取用户信息
                    wx.getUserInfo({
                        withCredentials: true,
                        success: function (res2) {

                            let vm = {
                                appId: appId,
                                jsCode: encodeURIComponent(code),
                                encryptData: encodeURIComponent(res2.encryptedData),
                                iv: encodeURIComponent(res2.iv),
                            }
                            // 获取用户信息获取openId

                            wx.showToast({
                                title: '正在登录...',
                                icon: 'loading'
                            });

                            xnService.wechatSessionKeySave(vm, function (open) {

                                wx.hideToast();
                                if (open.result){
                                    callback(null, { openId: open.openId, unionId:open.unionId} )

                                    self.globalData.openId = open.openId
                                    self.globalData.unionId = open.unionId
                                }else{

                                    callback("解密失败！")
                                }

                            });
                        }
                    })
                },
                fail: function(err) {
                    console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
                    callback(err)
                }
            })
        }
    },
	setPetNumber(value){
		this.globalData.totalPets = value;
	},
	getPetNumber() {
		return this.globalData.totalPets;
	}
})
