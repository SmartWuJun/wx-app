/**
 * 小程序配置文件
 */

// 小程序后台服务解决方案：https://www.qcloud.com/solution/la


// const apiUrl ='https://wx.xiniunet.com/router?
let environment = "test";

var config = {
  // 下面的地址配合云端 Server 工作
  // 接口网址
  apiUrl: 'https://api.xiniunet.com/router?',

  app_key: 'FEDA506D38D8E930626E850139E74E0C',
  secret: '9019951CC31D86A31D2E911D4BE51142',
  tenantId: '800001',

  appId: 'wx693f104bff6a29b4',
  appsecret: 'b2c682fdbe25333b8c6786d69ea5d8bd',
  // appId:'wxd71c192375f518c1',
  // appsecret:'c22a3fb15b3776915b7f910a1f08d48d',
  // appId: 'wx510ab4b11efc8794',
  // appsecret: '6b3f665536b56b2e2bb4ae761bcec2a5',

};

if (environment == "plat") {
  config.appId = 'wx510ab4b11efc8794';
  config.appsecret = '6b3f665536b56b2e2bb4ae761bcec2a5';
  config.apiUrl = 'https://api-dev.xiniunet.com/router?'
  config.tenantId = '800088'
} else if (environment == "test") {
  config.appId = 'wxa7f0d3b27065c3ff';
  config.appsecret = '8cb06cbd3b671e23c9e7ee02d4c92093';
  config.apiUrl = 'https://api-test.xiniunet.com/router?'
  config.tenantId = '800088'
} else if (environment == "daily") {
  config.appId = 'wx510ab4b11efc8794';
  config.appsecret = '6b3f665536b56b2e2bb4ae761bcec2a5';
  config.apiUrl = 'https://api-daily.xiniunet.com/router?'
  config.tenantId = '800088'
}

module.exports = config;
