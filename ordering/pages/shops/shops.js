import service from '../../service/service'
import { xnShowWarn} from '../../utils/util'
// pages/shops/shops.js
Page({
  param:{
	pageIndex:1,
	pageSize:10
  },
  /**
   * 页面的初始数据
   */
  data: {
	  shopList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	
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
	  this.getData();
  },
  getData(){
	  let self=this;
	  wx.getLocation({
		  type: 'wgs84',
		  success: function (res) {
			   self.param.latitude = res.latitude
			   self.param.longitude = res.longitude
				console.log(self.param);
			  service.getShopsByLocation(self.param,data=>{
				  if (data.firstErrorMessage){
					  xnShowWarn(data.firstErrorMessage);
					  return;
					}
				  console.log(data);
				  self.setData({
					  shopList:data.result
				  });
			  });
		  }
	  })
	 
  },
  getMore(){

  }

  
})