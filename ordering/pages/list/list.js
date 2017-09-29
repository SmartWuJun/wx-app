
import service from '../../service/service'
import { xnShowWarn } from '../../utils/util'

var x, y, x1, y1, x2, y2, index, currindex, n, yy;
// pages/list/list.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		typeList: [],
		// typeList: [
		// 	{
		// 		name: '常温沙拉',
		// 		goods: [
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			},
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			}, {
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			}
		// 		],
		// 		active: true
		// 	},
		// 	{
		// 		name: '推荐套餐',
		// 		goods: [
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			}
		// 		],

		// 	},
		// 	{
		// 		name: '推荐套餐A',
		// 		goods: [
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			}
		// 		],

		// 	},
		// 	{
		// 		name: '推荐套餐B',
		// 		goods: [
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			}
		// 		],

		// 	},
		// 	{
		// 		name: '推荐套餐C',
		// 		goods: [
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			},
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			},
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			}, {
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			}
		// 		],

		// 	}, {
		// 		name: '推荐套餐D',
		// 		goods: [
		// 			{
		// 				name: '招牌奶茶',
		// 				price: '10'
		// 			}
		// 		],

		// 	}

		// ],
		shopCart: [
			{
				goods: [
					{
						id: '001',
						name: '香芋1',
						format: '大杯',
						price: '10',
						count: 1
					},
					{
						id: '005',
						name: '香芋11',
						format: '大杯',
						price: '10',
						count: 1
					},
					{
						id: '007',
						name: '香芋12',
						format: '大杯',
						price: '10',
						count: 1
					},
					{
						id: '002',
						name: '香芋22',
						format: '大杯',
						price: '10',
						count: 1
					},
					{
						id: '003',
						name: '香芋3',
						format: '大杯',
						price: 10,
						count: 10
					}
				],
				topHeight: 0,
				bottomHeight: 0
			},
			{}
		],
		toGoodView: '',
		specInfo:{},
		start: {
			x: -400,
			y: 35,
			tx:0,
			ty:0
		},
		showMoving: false,
		showMask: false,
		showFormat: false,
		scrollY: true,
		isNoData: false
	},
	cfg:{},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.cfg=options;
		this.initData(options.id);
		// this.setHeight();
		// //购物车弹框
		// this.calHeight();

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	scrollType(e) {
		console.log(e);
	},
	scrollGoods(e) {
		// console.log(e.detail.scrollTop);
		let top = e.detail.scrollTop;
		let typeList = this.data.typeList;
		if (typeList.length <= 1) {
			return;
		}
		if (top < typeList[1].offsetTop) {
			// typeList[0].active=true;
			// this.setData({
			// 	intoView_: "intoView_0",
			// 	typeList
			// })
			this.switchTab(0)
		} else if (top > typeList[typeList.length - 1].offsetTop) {
			this.switchTab(typeList.length - 1)
		} else {
			for (let i = 1; i < typeList.length - 1; i++) {
				if (top > typeList[i].offsetTop && top < typeList[i + 1].offsetTop) {
					this.switchTab(i);
				}
			}
		}
	},
	tabType(e) {
		console.log(e);
		let index = e.currentTarget.dataset.index;
		var id = 'intoGoodView_' + index;
		let typeList = this.setActive(index);
		this.setData({
			toGoodView: id,
			typeList
		})
		// setTimeout(()=>{
		// 	this.setData({
		// 		typeList
		// 	})
		// },500)
	},
	setHeight() {
		let typeList = this.data.typeList;
		if (typeList.length > 1) {
			for (let i = 1; i < typeList.length; i++) {
				typeList[i].offsetTop = 30 + typeList[i - 1].goods.length * 85 + (typeList[i - 1].offsetTop || 0);
			}
		}
		console.log(typeList);
	},
	switchTab(index) {
		var id = 'intoView_' + index;
		let typeList = this.setActive(index);
		this.setData({
			toView: id,
			typeList
		})
	},
	setActive(index) {
		return this.data.typeList.map((item, i) => {
			if (i == index) {
				item.active = true;
			} else {
				item.active = false;
			}
			return item;
		});
	},
	/*******极端口袋高度范围******/
	calHeight() {
		let bags = this.data.shopCart;
		for (let i = 0; i < bags.length - 1; i++) {
			let bag = bags[i];
			if (i == 0) {
				bag.topHeight = 35;
				bag.bottomHeight = 35 + (bag.goods.length || 1) * 75
			} else {
				bag.topHeight = 35 + bags[i - 1].bottomHeight;
				bag.bottomHeight = bag.topHeight + (bag.goods.length || 1) * 75
			}
		}
		let length = bags.length;
		if (length > 1) {
			bags[length - 1].topHeight = bags[length - 2].bottomHeight + 35;
		}
		console.log(bags);

	},
	moveStart(e) {
		// if (!this.data.showMoving) {
		// 	return;
		// }
		// console.log(e);
		// x = e.touches[0].clientX;
		// y = e.touches[0].clientY;
		// x1 = e.currentTarget.offsetLeft;
		// y1 = e.currentTarget.offsetTop;
		// this.setData({
		// 	start: { x: x1, y: y1 }
		// })
	},
	move(e) {
		// console.log(e);
		// console.log(this.data.showMoving);
		if (!this.data.showMoving){
			return;
		}
		yy = e.currentTarget.offsetTop;
		// x2 = e.touches[0].clientX - x + x1;
		// y2 = e.touches[0].clientY - y + y1;
		x2 = e.touches[0].clientX - x;
		y2 = e.touches[0].clientY - y;
		this.setData({
			start: {x:x1,y:y1, tx: x2, ty: y2 }
		})
	},
	moveEnd(e) {
		console.log(e);
		console.log(this.data.showMoving);
		
		let id = e.currentTarget.dataset.id;
		if (!this.data.showMoving) {
			return;
		}
		let startBag = this.getBagByY(y1);
		let endBag = this.getBagByY(y1+y2);

		console.log(y1, y2);
		console.log(startBag, endBag);
		this.setData({
			showMoving: false,
			scrollY: true,
			start: {
				x: -400,
				y: 35,
				tx: 0,
				ty: 0
			}
		});
		if (startBag == endBag) {
			return;
		}
		//数据移动
		this.subToBag(startBag, endBag, id);
		console.log('111',this.data.shopCart);
		this.setData({
			shopCart: this.data.shopCart,
		},()=>{
			this.calHeight();
		})
	},
	longTap(e) {
		console.log('longTop');
	
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
		x1 = e.currentTarget.offsetLeft;
		y1 = e.currentTarget.offsetTop;
		this.setData({
			showMoving: true,
			scrollY: false,
			start: { x: x1, y: y1 }
		})
	},
	closeMask() {
		this.setData({
			showMask: false,
			showFormat: false
		})
	},
	showCart() {
		this.setData({
			showMask: true
		})
	},
	selectFormat(e) {
		console.log(e.currentTarget.dataset);
		let item = e.currentTarget.dataset;
		let param = {
			id:item.goodid,
			shopId:this.cfg.id,
			categoryId:item.typeid,
			operatingUnitId: this.cfg.unitId
		}
		let specInfo={
			name:item.name,
			price:item.price
		}
		service.getCommoditySpec(param,data=>{
			console.log(data);
			let list=this.formatSpec(data);
			specInfo.list=list;
			this.setData({
				showFormat: true,
				specInfo
			})
		});
		
	},
	stopPropagation() { },
	getBagByY(y) {
		console.log(y);
		let bags = this.data.shopCart;
		for (let i = 0; i < bags.length - 1; i++) {
			if (y > (bags[i].topHeight - 35) && y < (bags[i].bottomHeight)) {
				return i;
			}
		}
		if (y > (bags[bags.length - 1].topHeight - 35)) {
			return bags.length - 1;
		}
	},
	subToBag(start, end, id) {
		let data = this.removeFromBag(start, id)
		this.addToBag(end, data);
	},
	removeFromBag(start, id) {
		let goods = this.data.shopCart[start].goods;
		let deleteIndex = -1;
		let moveIndex = -1;
		for (let i = 0; i < goods.length; i++) {
			if (goods[i].id == id) {
				if (goods[i].count == 1) {
					deleteIndex = i;
				} else {
					goods[i].count--;
					moveIndex = i;
				}
			}
		}
		if (deleteIndex >= 0) {
			
			let obj = {};
			Object.assign(obj, goods[deleteIndex]);
			
			goods.splice(deleteIndex, 1);
			return obj;
		} else {
			let obj = {};
			Object.assign(obj, goods[moveIndex]);
			obj.count = 1;
			return obj;
		}

	},
	addToBag(end, item) {
		let bag = this.data.shopCart[end];
		if (!bag.goods){
			bag.goods=[item];
			this.data.shopCart.push({});
		}else{
			let len=bag.goods.filter(it=>it.id==item.id).length;
			if(len){
				bag.goods.foreach(good=>{
					if(good.id==item.id){
						good.count++;
					}
				})
			}else{
				bag.goods.push(item);
			}
		}		
		
	},
	initData(shopId) {
		service.findCommodityList({ shopId }, data => {
			if (data.firstErrorMessage) {
				xnShowWarn(data.firstErrorMessage);
				return;
			}
			console.log(data);
			if (data.categoryAndShowCommodityList.length) {

				let typeList = this.formatDataList(data.categoryAndShowCommodityList);
				this.setData({
					typeList
				}, () => {
					this.setHeight();
					//购物车弹框
					this.calHeight();
				});

			}

		})
	},
	formatDataList(data) {
		let dataList = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i].showCommodityList.length) {
				let obj = {
					name: data[i].categoryName,
					id: data[i].id,
					goods: []
				};

				for (let item of data[i].showCommodityList) {
					let good = {};
					good.name = item.clazzName;
					good.price = item.showPrice;
					good.pic = item.pictureUrl;
					good.id = item.id;
					good.showSpec = item.isSpec || !item.hasCategoryTagName;

					obj.goods.push(good);
				}
				dataList.push(obj);
			}
		}
		dataList.length ? dataList[0].active = true : '';
		return dataList;
	},
	formatSpec(data){
		let array=[];
		if (data.spec1AttrList.length){
			let obj={
				labels:[]
			},
				list = data.spec1AttrList;
				if(list.length){
					obj.name = list[0].attributeName;
				}
			for(let i=0;i<list.length;i++){
				obj.labels.push({
					id:list[i].valueId,
					text:list[i].valueName
				})
			}
			array.push(obj);
		}
		if (data.spec2AttrList.length) {
			let obj = {
				labels: []
			},
				list = data.spec2AttrList;
			if (list.length) {
				obj.name = list[0].attributeName;
			}
			for (let i = 0; i < list.length; i++) {
				obj.labels.push({
					id: list[i].valueId,
					text: list[i].valueName
				})
			}
			array.push(obj);
		}
		if (data.spec3AttrList.length) {
			let obj = {
				labels: []
			},
				list = data.spec3AttrList;
			if (list.length) {
				obj.name = list[0].attributeName;
			}
			for (let i = 0; i < list.length; i++) {
				obj.labels.push({
					id: list[i].valueId,
					text: list[i].valueName
				})
			}
			array.push(obj);
		}

		return array;
	}
})