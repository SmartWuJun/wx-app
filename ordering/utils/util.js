function formatTime(number) {
  if (number) {
    var date = new Date(parseInt(number));
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + " " + [hour, min, sec].map(formatNumber).join(':');

  }
}

function formatDay(number){
  if (number){
    var date = new Date(parseInt(number));
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return [year, month, day].map(formatNumber).join('/');
  }
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 ** 加法函数，用来得到精确的加法结果
 ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 ** 调用：accAdd(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
var accAdd = function (arg1, arg2) {
  var r1, r2, m, c;
  try {
    r1 = arg1.toString().split(".")[1].length;
  }
  catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  }
  catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    var cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", "")) * cm;
    } else {
      arg1 = Number(arg1.toString().replace(".", "")) * cm;
      arg2 = Number(arg2.toString().replace(".", ""));
    }
  } else {
    arg1 = Number(arg1.toString().replace(".", ""));
    arg2 = Number(arg2.toString().replace(".", ""));
  }
  return (arg1 + arg2) / m;
};


/**
 ** 减法函数，用来得到精确的减法结果
 ** 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 ** 调用：accSub(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
var accSub = function (arg1, arg2) {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  }
  catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  }
  catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
};


/**
 ** 乘法函数，用来得到精确的乘法结果
 ** 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 ** 调用：accMul(arg1,arg2)
 ** 返回值：arg1乘以 arg2的精确结果
 **/
var accMul = function (arg1, arg2) {
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  }
  catch (e) {
  }
  try {
    m += s2.split(".")[1].length;
  }
  catch (e) {
  }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
};


/**
 ** 除法函数，用来得到精确的除法结果
 ** 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 ** 调用：accDiv(arg1,arg2)
 ** 返回值：arg1除以arg2的精确结果
 **/
var accDiv = function (arg1, arg2) {
  var t1 = 0, t2 = 0, r1, r2;
  try {
    t1 = arg1.toString().split(".")[1].length;
  }
  catch (e) {
  }
  try {
    t2 = arg2.toString().split(".")[1].length;
  }
  catch (e) {
  }
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
};

var toAmount = function (num) {
  var amount = num - 0;
  if (amount) {
    amount = Math.round(amount * 100000) / 100000 + "";
    var list = amount.split(".");
    if (list.length == 1) {
      return list[0] + ".00";
    } else {
      for (var i = list[1].length - 1; i > 1; i--) {
        if ('0' == list[1].charAt(i)) {
          list[1] = list[1].substring(0, i);
        } else {
          break;
        }
      }
      if (list[1].length == 0) {
        list[1] = "00";
      }
      if (list[1].length == 1) {
        list[1] += "0";
      }
      return list[0] + "." + list[1];
    }
  } else {
    return "0.00";
  }

};

var getOrderStatus = function (status) {
  var result = "";
  switch(status){
    case "UN_PAID":
      result = "待付款";
      break;
    case "UN_FINISHED":
      result = "已预订";
      break;
    case "UN_EVALUATIONED":
      result = "已完成";
      break;
    case "EVALUATIONED":
      result = "已评价";
      break;
    case "CANCELLED":
      result = "已取消";
      break;
  }
  return result;
};

let xnShowWarn = function (title){
  wx.showToast({
    image: "/images/warn.png",
    title: title
  })

}

module.exports = {
  formatTime: formatTime,
  formatDay: formatDay,
  accAdd: accAdd,
  accSub: accSub,
  accMul: accMul,
  accDiv: accDiv,
  toAmount: toAmount,
  getOrderStatus: getOrderStatus,
  xnShowWarn: xnShowWarn
}
