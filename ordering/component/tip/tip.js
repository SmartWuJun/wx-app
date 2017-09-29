function Tip(obj) {
  let key = "tip";
  if(obj.key){
    key = obj.key;
  }
  let _compData = obj;

  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];

  let tempObj = {};
  tempObj[key] = _compData;
  curPage.setData(tempObj)

  setTimeout(function () {
    tempObj[key] = null;
    curPage.setData(tempObj);
  }, 2000)
}

module.exports = {
  Tip
}