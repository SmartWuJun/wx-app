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
  // 使用passport换取统一账户Identity
  exchangeIdentityByPassport: (data, fn) => {
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
  // 使用passport换取统一账户Identity
  bypassportExchange: (data, fn) => {
    data.method = "union.identity.exchange.bypassport";
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
  // 根据Id获取分销商
  getExtend: (data, fn) => {
    data.method = "epos.member.extend.get";
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
  // 根据Id获取分销商
  updateMembership: (data, fn) => {
    data.method = "api.master.membership.member.update";
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
  
  //获取验证码
  createVerificationCode: (data, fn) => {
    data.method = "api.security.verificationCode.create";
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
  //验证登陆码
  checkvalification: (data, fn) => {
    data.method = "api.security.valification.check";
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
  //创建分销商
  createExtend: (data, fn) => {
    data.method = "epos.member.extend.create";
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
  //根据账号查询user信息
  findUser: (data, fn) => {
    data.method = "api.user.find";
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
  //根据验证码更新用户密码
  updateLoginPassword: (data, fn) => {
    data.method = "api.security.loginPassword.updateByVerifyCode";
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




  // 账户信息
  // 用户信息
  getUser: (data, fn) => {
    data.method = "api.master.system.user.get";
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
  //会员信息
  getMember: (data, fn) => {
    data.method = "epos.member.extend.get";
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
  //修改支付密码
  updateUserTransactionPassword: (data, fn) => {
    data.method = "api.security.userTransactionPassword.update";
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
  //更新登录密码
  modifyLoginPassword: (data, fn) => {
    data.method = "api.security.loginPassword.modify";
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
  //更新用户头像
  updateUserAvatar: (data, fn) => {
    data.method = "api.master.user.avatar.update";
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
  //更新user信息
  updateUserSystem: (data, fn) => {
    data.method = "api.master.system.user.update";
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
  //更新会员信息
  updateMember: (data, fn) => {
    data.method = "api.master.membership.member.update";
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
  //获取user
  getUserSystem: (data, fn) => {
    data.method = "api.master.system.user.get";
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
  //获取会员卡余额
  getMemberBalance: (data, fn) => {
    data.method = "api.membership.memberBalance.get";
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
  //查询会员交易纪录
  findMemberTransacion: (data, fn) => {
    data.method = "api.membership.memberTransacion.find";
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
  //获取会员卡余额
  findMemberTransacion: (data, fn) => {
    data.method = "api.membership.memberTransacion.find";
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
  //查询会员积分交易记录
  findPointTransactions: (data, fn) => {
    data.method = "api.membership.pointTransactions.search";
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
  //会员地址查询
  findMemberLocation: (data, fn) => {
    data.method = "api.master.membership.memberLocation.find";
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
  //会员新增地址get.new.ids
  getNewIds: (data, fn) => {
    data.method = "get.new.ids";
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
  //会员新增地址
  createMemberLocation: (data, fn) => {
    data.method = "api.master.membership.memberLocation.create";
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
  //会员更新地址
  updateMemberLocation: (data, fn) => {
    data.method = "api.master.membership.memberLocation.update";
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
  //根据经纬度查询附近的门店
  getShopsByLocation: (data, fn) => {
	  data.method = "retail.miniapp.findshopbysort";
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
  //获取承租人设置
  getSettingByTenantId: (data, fn) => {
	  data.method = "api.retail.settingByTenantId.get";
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
  //获取商品列表
  findCommodityList: (data, fn) => {
	  data.method = "epos.category.and.commodity.list.find";
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
  //获取规格
  getCommoditySpec: (data, fn) => {
	  data.method = "epos.commodity.spec.get";
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
  //门店是否营业
  getShopIsInBusiness: (data, fn) => {
	  data.method = "epos.shop.is_in_business.get";
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
  //购物车删除
  deleteCart: (data, fn) => {
	  data.method = "epos.cart.delete";
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
  //购物车数量更新
  updateCart: (data, fn) => {
	  data.method = "epos.cart.update";
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
  //获取购物车信息
  getCart: (data, fn) => {
	  data.method = "epos.cart.get";
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
  //获取购物车数量及详情
  getCartCount: (data, fn) => {
	  data.method = "epos.user.cart.commodity.count";
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
  //批量加入购物车
  batchAddCart: (data, fn) => {
	  data.method = "epos.cart.batch.add";
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
  //批量加入前查询物料
  findItemForRetail: (data, fn) => {
	  data.method = "api.master.inventory.itemForRetail.find";
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
  //批量删除购物车
  deleteBatchCart: (data, fn) => {
	  data.method = "epos.cart.batch.delete";
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
  //判断当前购物车中是否有必须关联商品
  checkCartCommodity: (data, fn) => {
	  data.method = "epos.cart.commodity.check";
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


}

module.exports = xnService
