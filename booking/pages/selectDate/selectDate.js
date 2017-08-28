// selectDate.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dates: [
            {
                day: '星期二',
                date: '8-22',               
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期三',
                date: '8-23',
                worksheet: [{
                    time: '8:00',
                    free: false
                }, {
                    time: '9:00',
                    free: false
                }, {
                    time: '10:00',
                    free: false
                }, {
                    time: '11:00',
                    free: false
                }, {
                    time: '12:00',
                    free: false
                }, {
                    time: '13:00',
                    free: false
                }, {
                    time: '14:00',
                    free: false
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期四',
                date: '8-24',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期五',
                date: '8-25',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期六',
                date: '8-26',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期日',
                date: '8-27',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期一',
                date: '8-28',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期二',
                date: '8-29',
                active: true,
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期三',
                date: '8-30',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期四',
                date: '8-31',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期五',
                date: '9-1',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期六',
                date: '9-2',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期日',
                date: '9-3',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            },
            {
                day: '星期一',
                date: '9-4',
                worksheet: [{
                    time: '8:00',
                    free: false,
                    active: false
                }, {
                    time: '9:00',
                    free: true
                }, {
                    time: '10:00',
                    free: true
                }, {
                    time: '11:00',
                    free: true
                }, {
                    time: '12:00',
                    free: true
                }, {
                    time: '13:00',
                    free: true
                }, {
                    time: '14:00',
                    free: true
                }, {
                    time: '15:00',
                    free: true
                }, {
                    time: '16:00',
                    free: true
                }, {
                    time: '17:00',
                    free: true
                }, {
                    time: '18:00',
                    free: true
                }, {
                    time: '19:00',
                    free: true
                }, {
                    time: '20:00',
                    free: true
                }, {
                    time: '21:00',
                    free: true
                }, {
                    time: '22:00',
                    free: true
                }, {
                    time: '23:00',
                    free: true
                }]
            }
        ],
        worksheet: [{
            time: '8:00',
            free: false,
            active: false
        }, {
            time: '9:00',
            free: true
        }, {
            time: '10:00',
            free: true
        }, {
            time: '11:00',
            free: true
        }, {
            time: '12:00',
            free: true
        }, {
            time: '13:00',
            free: true
        }, {
            time: '14:00',
            free: true
        }, {
            time: '15:00',
            free: true
        }, {
            time: '16:00',
            free: true
        }, {
            time: '17:00',
            free: true
        }, {
            time: '18:00',
            free: true
        }, {
            time: '19:00',
            free: true
        }, {
            time: '20:00',
            free: true
        }, {
            time: '21:00',
            free: true
        }, {
            time: '22:00',
            free: true
        }, {
            time: '23:00',
            free: true
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initDate();
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
    initDate(){
        this.data.dates[0].active=true;
        const worksheet=this.data.dates[0].worksheet;
        this.setData({
            dates:this.data.dates,
            worksheet:worksheet
        })
    },
    changeDate(e){
        console.log(e);
        var index = e.currentTarget.dataset.index;
        const dates=this.data.dates;
        if(dates[index].active){
            return;
        }
        
        dates.forEach((item)=>{
            item.active=false;
        });
        dates[index].active = true;
        const worksheet=dates[index].worksheet;
        this.setData({
            dates,
            worksheet
        })
    },
    chooseTime(e){
        var index = e.currentTarget.dataset.index;
        var worksheet=this.data.worksheet;
        if (!worksheet[index].free){
            return ;
        }
        worksheet.forEach((item)=>{
            item.active=false;
        })
        worksheet[index].active=true;

        this.setData({
            worksheet
        });

    }
})