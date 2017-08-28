// coupon.js
import {barcode} from '../../utils/code/index'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        couponList: [{
            id: '12345567',
            picUrl: '/images/logo.jpg',
            title:'第一针',
            descriptionList: [{
                content: '本券仅限幼犬使用本券仅限幼犬使用本券仅限幼犬使用'
            }, {
                content: '本券仅限幼犬使用1'
            }, {
                content: '本券仅限幼犬使用2'
            }, {
                content: '本券仅限幼犬使用3'
            },]

        },
            {
                id: '123455672',
                picUrl: '/images/logo.jpg',
                title: '第一针',
                descriptionList: [{
                    content: '本券仅限幼犬使用本券仅限幼犬使用本券仅限幼犬使用'
                }, {
                    content: '本券仅限幼犬使用1'
                }, {
                    content: '本券仅限幼犬使用2'
                }, {
                    content: '本券仅限幼犬使用3'
                },]

            },
            {
                id: '123455633s7',
                picUrl: '/images/logo.jpg',
                title: '第一针',
                descriptionList: [{
                    content: '本券仅限幼犬使用本券仅限幼犬使用本券仅限幼犬使用'
                }, {
                    content: '本券仅限幼犬使用1'
                }, {
                    content: '本券仅限幼犬使用2'
                }, {
                    content: '本券仅限幼犬使用3'
                },]

            }]
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
        // barcode('barcode','1234567879',300,100);
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.data.couponList.forEach((item,i)=>{
            barcode('barcode-'+i, '1234567879', 300, 100);
        })

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

    }
})