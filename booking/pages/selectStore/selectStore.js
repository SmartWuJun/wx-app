// selectStore.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        stores: [{
                id: '1',
                name: '1号店',
                location: '竹园路209号',
                long: '120.563295',
                lat: '31.269059',
                distance: '8',
                active: true
            },
            {
                id: '2',
                name: '2号店',
                location: '三香路',
                long: '120.590541',
                lat: '31.302257',
                distance: '16'
            },
            {
                id: '3',
                name: '3号店',
                location: '奥体路',
                long: '120.558911',
                lat: '31.299982',
                distance: '16'
            },
            {
                id: '4',
                name: '34号店',
                location: '汾湖路地铁站',
                long: '120.548541',
                lat: '31.283704',
                distance: '16'
            },
            {
                id: '5',
                name: '35号店',
                location: '三香路体育馆',
                lat: '31.2943600000',
                long: '120.5772500000',
                distance: '16'
            },
            {
                id: '6',
                name: '36号店',
                location: '奥体路',
                distance: '16'
            },
            {
                id: '7',
                name: '37号店',
                location: '奥体路',
                distance: '16'
            },
            {
                id: '8',
                name: '38号店',
                location: '奥体路',
                distance: '16'
            },
            {
                id: '9',
                name: '39号店',
                location: '奥体路',
                distance: '16'
            }

        ],
        markers: [{

        }],
        long: '', //经度
        lat: '', //纬度
        distance: '10',
        time: '30',
        location: '上海浦东新区'

    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
    },
    sure() {

        this.moveToLocation();
    },
    chooseStore(e) {
        const long = e.currentTarget.dataset.long;
        const lat = e.currentTarget.dataset.lat;
        const id = e.currentTarget.dataset.id;
        const stores = this.data.stores.map((item) => {
            if (item.id == id) {
                item['active'] = true;
            } else {
                item['active'] = false;
            }
            return item;
        });
        console.log(stores);
        console.log(long, lat);

        this.setData({
            long,
            lat,
            stores
            // markers: [{
            //     id: 'store',
            //     latitude: lat,
            //     longitude: long,
            //     iconPath: '/images/tag.png'
            // }]
        });


    },
    moveToLocation: function() {
        this.mapCtx.moveToLocation()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var self = this;
        //获取当前定位
        wx.getLocation({
            type: 'wgs84',
            success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
                console.log(res);
                console.log(self);
                self.setData({
                    long: longitude,
                    lat: latitude

                });


                setTimeout(() => {
                    self.moveToLocation();
                }, 300)
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        this.mapCtx = wx.createMapContext('map');

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})