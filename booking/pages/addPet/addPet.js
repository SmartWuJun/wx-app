// addPet.js
const xnService = require('../../service/service.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarFileUrl: '/images/addPic.png',
    // weight: ['小于5kg', '大于5kg'],
    sex: [
      { "name": 'MALE', "value": '公' },
      { "name": 'FEMALE', "value": '母' }
    ],
    subType: [
      { "name": "CAT", "value": "猫" },
      { "name": "DOG", "value": "狗" },
      { "name": "OTHER", "value": "其他" }
    ],
    variety: [
      { "name": "SHORT", "value": "短毛" },
      { "name": "LONG", "value": "长毛" }
    ],
    showNameView: true,
    showDateView: true,
    showWeightView: true,
    showSexView: true,
    showVarietyView: true,
    showSubTypeView: true,
    avatarFileId:0
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value,
      showDateView: false
    })
  },
  bindWeightChange: function (e) {
    console.log('picker发送体重选择改变，携带值为', e.detail.value)
    this.setData({
      weightIndex: e.detail.value,
      showWeightView: false
    })
  },
  bindSexChange: function (e) {
    console.log('picker发送性别选择改变，携带值为', e.detail.value)
    this.setData({
      sexIndex: e.detail.value,
      showSexView: false
    })
  },
  bindVarietyChange: function (e) {
    console.log('picker发送品种选择改变，携带值为', e.detail.value)
    this.setData({
      varietyIndex: e.detail.value,
      showVarietyView: false
    })
  },
  bindSubTypeChange: function (e) {
    console.log('picker发送物种选择改变，携带值为', e.detail.value)
    this.setData({
      subTypeIndex: e.detail.value,
      showSubTypeView: false
    })
  },
  chooseImage: function () {
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImage('camera')
          }
        }
      }
    })

  },
  chooseWxImage: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        _this.uploadAvatar(res)
        _this.setData({
          avatarFileUrl: res.tempFilePaths[0],
        })

      }
    })
  },

  formSubmit: function (e) {

    if (!e.detail.value.name) {
      wx.showToast({
        title: "请输入昵称！"
      })
      return
    }

    if (!(this.data.date)) {
      wx.showToast({
        title: "请选择生日！"
      })
      return
    }

    // if (!(this.data.weight[this.data.weightIndex])) {
    //     wx.showToast({
    //         title: "请选择体重！"
    //     })
    //     return
    // }

    if (!(this.data.sex[this.data.sexIndex])) {
      wx.showToast({
        title: "请选择性别"
      })
      return
    }

    if (!(this.data.subType[this.data.subTypeIndex])) {
      wx.showToast({
        title: "请选择物种"
      })
      return
    }

    if (!(this.data.variety[this.data.varietyIndex])) {
      wx.showToast({
        title: "请选择品种"
      })
      return
    }

    if (avatarFileId==0){
      this.data.avatarFileId=null,
      this.data.avatarFileUrl=null
    };

    var vm = {
      type: "PET",
      name: e.detail.value.name,
      birth: this.data.date,
      // weight: this.data.weight[this.data.weightIndex].name,
      weight: e.detail.value.weight,
      sex: this.data.sex[this.data.sexIndex].name,
      variety: this.data.variety[this.data.varietyIndex].name,
      subType: this.data.subType[this.data.subTypeIndex].name,
      avatarFileId: this.data.avatarFileId,
      avatarFileUrl: this.data.avatarFileUrl
    }

    xnService.createUnionObject(vm, function (data) {
      if (data.errors && data.errors.length > 0) {
        wx.showToast({
          title: data.firstErrorMessage
        })
      } else {
        wx.showToast({
          title: "保存成功"
        })
        wx.reLaunch({
          url: '../addPet/addPet',
        })
      }
    });
  },
  uploadAvatar: function (e) {
    let _this = this;
    var fileName = e.tempFilePaths[0].substring(e.tempFilePaths[0].lastIndexOf("/") + 1, e.tempFilePaths[0].length);
    var file = {
      type: "AVATAR",
      fileStream: e.tempFiles[0],
      fileName: fileName,
      fileExt: fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length),
    }
    console.log(file.fileExt);
      xnService.uploadFile(file, function (data) {
        if (data.errors && data.errors.length > 0) {
          wx.showToast({
            title: data.firstErrorMessage
          })
        } else {
          _this.setData({
            avatarFileUrl: data.url,
            avatarFileId: data.id,
          })
          wx.showToast({
            title: "保存成功"
          })
        }
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = app.getUserInfo();
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


})