//modal 模态提示框
let _compData = {
    '__modal__.isHide': true,
    '__modal__.content': '',
    '__modal__.okText': '确定',
    '__modal__.cancelText': '取消',
    '__modal__.showCancel': true,
    '__modal__.type':'confirm' , //两种类型 confirm 为 确认框 submit 为提交框
    '__modal__.placeholder':'',
    '__modal__.inputValue':'' 
}
let _compEvent = {
    __modal_close: function () {
       
        this.modal.hide();
    },
    __modal_ok: function () {
        console.log('ok');
        typeof this.modal._configs.ok == "function" &&
            this.modal._configs.ok(this.data.__modal__);
            this.modal.hide();
    },
    __modal_cancel:function(){
        typeof this.modal._configs.cancel == "function" &&
            this.modal._configs.cancel();
        this.modal.hide();
    },
    __modal_inputChange:function(e){
      
        this.setData({'__modal__.inputValue':e.detail.value});
    }
}
// 小程序最新版把原型链干掉了。。。换种写法
let modal = {
    show: function (data) {
        // this.__page.setData({ '__modal__.isHide': false, '__modal__.okText': '去添加'});
        this.__page.setData(_compData);
        let __modal__=this.__page.data.__modal__;
         __modal__.isHide=false;
         Object.assign(__modal__,data);
         this.__page.setData({__modal__});

        if (data) {
            Object.assign(this._configs, data)
        }
    },
    hide(){
        this.__page.setData({ '__modal__.isHide': true });
        typeof this._configs.close == "function" &&
            this._configs.close();
    }
}
function Modal() {
    // 定义组件的一些回调
    this._configs = {
        ok: null,
        cancel: null
    }
    // 拿到当前页面对象
    let pages = getCurrentPages()
    let curPage = pages[pages.length - 1]
    // 把组件的事件“合并到”页面对象上
    Object.assign(curPage, _compEvent)
    this.__page = curPage

    
    // 附加到page上，方便访问
    curPage.modal = this
    Object.assign(curPage.modal, modal) // 小程序最新版把原型链干掉了。。。换种写法
    // 把组件的数据“注入”到页面的data对象中
    curPage.setData(_compData)
    return this
}

module.exports = {
    Modal
}