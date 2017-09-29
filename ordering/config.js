/**
 * 小程序配置文件
 */

// 小程序后台服务解决方案：https://www.qcloud.com/solution/la


// const apiUrl ='https://wx.xiniunet.com/router?
let environment = "plat";
// let environment = "test";

var config = {
  // 下面的地址配合云端 Server 工作
  // 接口网址
  apiUrl: 'https://api.xiniunet.com/router?',
  apiUploadUrl: 'https://my.xiniunet.com/api/fileUpload.do',
  app_key: 'FEDA506D38D8E930626E850139E74E0C',
  secret: '9019951CC31D86A31D2E911D4BE51142',

    //宠儿宠物
    tenantId: '300029',
    appId:'wx80801494e61a3be9',
    appSecret:'8b445a1e892f19fccac73d218b3f766a',
  // tenantId: '800888',
  // appId:"wx80801494e61a3be9",
  payNoticeUrl:'https://pos-ult.xiniunet.com/api/wechatMiniAppPaymentNotify.do'
};

if (environment == "plat") {
  config.appId = 'wxc50f9b13445a389a';
  config.apiUrl = 'https://api-dev.xiniunet.com/router?';
  config.apiUploadUrl = 'https://my-plat.xiniunet.com/api/fileUpload.do';
  config.tenantId = '800088';
  config.payNoticeUrl = 'https://pos-ult-dev.xiniunet.com/api/wechatMiniAppPaymentNotify.do';
} else if (environment == "test") {
  config.appId = 'wxa7f0d3b27065c3ff';
  config.apiUrl = 'https://api-test.xiniunet.com/router?';
  config.apiUploadUrl = 'https://my-test.xiniunet.com/api/fileUpload.do';
  config.tenantId = '800088';
  config.payNoticeUrl = 'https://pos-ult-test.xiniunet.com/api/wechatMiniAppPaymentNotify.do';
} else if (environment == "daily") {
  config.appId = 'wx510ab4b11efc8794';
  config.apiUrl = 'https://api-daily.xiniunet.com/router?';
  config.apiUploadUrl = 'https://my-daily.xiniunet.com/api/fileUpload.do';
  config.tenantId = '800088';
  config.payNoticeUrl = 'https://pos-ult-daily.xiniunet.com/api/wechatMiniAppPaymentNotify.do';
}

module.exports = config;
