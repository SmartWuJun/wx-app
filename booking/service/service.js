const MD5 = require('../utils/md5.js');
const apiUrl = require('../config').apiUrl;

const getPostParameter = require('../utils/postparameter.js');

// 返回处理

const doStateProcessing = (response,fn)=>{
  switch (response.statusCode){
    case 200:
      if (typeof fn == 'function') {
        fn(response.data);
      }
    break;
    case 502:
     console.log(502)
    break;

    case 502:
      console.log(502)
      break;

    case 502:
      console.log(502)
      break;

    case 502:
      console.log(502)
      break;

    case 502:
      console.log(502)
      break;
    
  }
 
}

// 错误处理
const requestError = (error, fn) => {
  console.log(error);
}

const header = {
  'Content-Type': 'application/x-www-form-urlencoded',
}

const xnService={
  // 通过Oauth信息登录
  byOauthlogin: (data, fn) => {
    data.method = "api.security.byOauth.login";
    var postParameter = getPostParameter(data);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },
  
  // 创建用户授权登录
  userOauthCreate: (data, fn) => {
    data.method = "api.security.userOauth.create";
    var postParameter = getPostParameter(data);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },
  // 登录
  login: (data, fn) => {
    data.method = "api.system.member.login";
    var postParameter = getPostParameter(data);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response,fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },
  //  通过用户ID获取用户信息 id
  getUser: (data, fn) => {
    data.method = "api.master.system.user.get";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`, //仅为示例，并非真实的接口地址
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  //  获取会员 id
  getMember: (data, fn) => {
    data.method = "api.master.membership.member.get";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`, //仅为示例，并非真实的接口地址
      header: header,
      method:'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  //  更新会员信息
  updateMember: (data, fn) => {
    data.method = "retail.miniapp.member.update";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 按会员查询汇总 memberId
  getSummaryByMember: (data, fn) => {
    data.method = "api.membership.summaryByMember.get";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`, //仅为示例，并非真实的接口地址
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 查询积分交易记录 memberId  //积分
  pointTransactionsSearch: (data, fn) => {
    data.method = "api.membership.pointTransactions.search";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`, 
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 获取订单头信息 memberId
  retailOrderHeadGet: (data, fn) => {
    data.method = "retail.miniapp.orderhead.get";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 查询订单头信息 memberId
  retailOrderHeadFind: (data, fn) => {
    data.method = "retail.miniapp.orderhead.find";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 查询充值交易记录 memberId   //余额 
  rechargeTransactionsSearch: (data, fn) => {
    data.method = "api.membership.rechargeTransactions.search";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 模糊查询门店 memberId
  humanresourceShopFind: (data, fn) => {
    data.method = "api.master.humanresource.shop.find";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 获取会员卡积分和余额 memberId
  memberBalanceAndPointGet: (data, fn) => {
    data.method = "api.membership.memberBalanceAndPoint.get";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 高级查询优惠券号码 memberId
  promotionCouponEntityFind: (data, fn) => {
    data.method = "api.promotion.couponEntity.find";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 高级查询优惠券定义 memberId
  promotionCouponDefinitionFind: (data, fn) => {
    data.method = "api.promotion.couponDefinition.find";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) { 
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 获取openId
  wechatSessionKeySave: (data, fn) => {
    data.method = "api.wechat.session.key.save";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: `${apiUrl}`,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 使用passport换取统一账户Identity
  exchangeIdentityByPassport:(data, fn) => {
      data.method = "union.identity.exchange.bypassport";
      var postParameter = getPostParameter(data);
      console.log(postParameter);
      wx.request({
          url: '' + apiUrl,
          header: header,
          method: 'post',
          data: postParameter,
          success: function success(response) {
              doStateProcessing(response, fn);
          },
          fail: function fail(error) {
              requestError(error);
          }
      });
  },

  // 会员注册
  registerMemberFormMiniApp: (data, fn) => {
    data.method = "retail.miniapp.member.register";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function success(response) {
        doStateProcessing(response, fn);
      },
      fail: function fail(error) {
        requestError(error);
      }
    });
  },

  // 查询开票公司
  findLegalentity: (data, fn) => {
    data.method = "union.legalentity.find";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function success(response) {
        doStateProcessing(response, fn);
      },
      fail: function fail(error) {
        requestError(error);
      }
    });
  },

  // 获取开票公司
  getLegalentity: (data, fn) => {
    data.method = "union.legalentity.get";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function success(response) {
        doStateProcessing(response, fn);
      },
      fail: function fail(error) {
        requestError(error);
      }
    });
  },
  // 更新开票公司
  updateLegalentity: (data, fn) => {
    data.method = "union.legalentity.update";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function success(response) {
        doStateProcessing(response, fn);
      },
      fail: function fail(error) {
        requestError(error);
      }
    });
  },
  // 设置默认开票公司
  setDefaultLegalentity: (data, fn) => {
    data.method = "union.legalentity.default";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function success(response) {
        doStateProcessing(response, fn);
      },
      fail: function fail(error) {
        requestError(error);
      }
    });
  },
  // 删除默认开票公司
  deleteDefaultLegalentity: (data, fn) => {
    data.method = "union.legalentity.delete";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function success(response) {
        doStateProcessing(response, fn);
      },
      fail: function fail(error) {
        requestError(error);
      }
    });
  },

// 获取验证码
createVerificationCode: (data, fn) => {
  data.method = "api.security.verificationCode.create";
  var postParameter = getPostParameter(data);
  console.log(postParameter);
  wx.request({
    url: '' + apiUrl,
    header: header,
    method: 'post',
    data: postParameter,
    success: function (response) {
      doStateProcessing(response, fn)
    },
    fail: function (error) {
      requestError(error);
    }
  })
},



// 获取开票公司
findCompanyInvoice: (data, fn) => {
  data.method = "union.legalentity.find";
  var postParameter = getPostParameter(data);
  console.log(postParameter);
  wx.request({
    url: '' + apiUrl,
    header: header,
    method: 'post',
    data: postParameter,
    success: function (response) {
      doStateProcessing(response, fn)
    },
    fail: function (error) {
      requestError(error);
    }
  })
},

// 获取承租人
getTenant: (data, fn) => {
  data.method = "api.master.system.tenant.get";
  var postParameter = getPostParameter(data);
  console.log(postParameter);
  wx.request({
    url: '' + apiUrl,
    header: header,
    method: 'post',
    data: postParameter,
    success: function (response) {
      doStateProcessing(response, fn)
    },
    fail: function (error) {
      requestError(error);
    }
  })
},
createInvoice: (data, fn) => {
  data.method = "retail.invoice.create";
  var postParameter = getPostParameter(data);
  console.log(postParameter);
  wx.request({
    url: '' + apiUrl,
    header: header,
    method: 'post',
    data: postParameter,
    success: function (response) {
      doStateProcessing(response, fn)
    },
    fail: function (error) {
      requestError(error);
    }
  })
},

// 忘记密码验证
  checkCodeWithForget: (data, fn) => {
  data.method = "retail.miniapp.forgetpwd.check";
  var postParameter = getPostParameter(data);
  console.log(postParameter);
  wx.request({
    url: '' + apiUrl,
    header: header,
    method: 'post',
    data: postParameter,
    success: function (response) {
      doStateProcessing(response, fn)
    },
    fail: function (error) {
      requestError(error);
    }
  })
},

  // 忘记密码
  updateResetLoginPassword: (data, fn) => {
    data.method = "retail.miniapp.forgetpwd";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

  // 更新密码
  modifyLoginPassword: (data, fn) => {
    data.method = "retail.miniapp.updatepwd";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
      url: '' + apiUrl,
      header: header,
      method: 'post',
      data: postParameter,
      success: function (response) {
        doStateProcessing(response, fn)
      },
      fail: function (error) {
        requestError(error);
      }
    })
  },

//创建宠物（union）
  createUnionObject: (data, fn) => {
      data.method = "union.object.create";
      var postParameter = getPostParameter(data);
      console.log(postParameter);
      wx.request({
          url: '' + apiUrl,
          header: header,
          method: 'post',
          data: postParameter,
          success: function (response) {
              doStateProcessing(response, fn)
          },
          fail: function (error) {
              requestError(error);
          }
      })
  },

//上传文件
  uploadFile: (data, fn) => {
    data.method = "file.upload";
    var postParameter = getPostParameter(data);
    console.log(postParameter);
    wx.request({
        url: '' + apiUrl,
        header: header,
        method: 'post',
        data: postParameter,
        success: function (response) {
            doStateProcessing(response, fn)
        },
        fail: function (error) {
            requestError(error);
        }
    })
  },

 
}

module.exports = xnService
