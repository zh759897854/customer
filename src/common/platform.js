/**
 * author: ZH
 * @description : 匹配平台 如果当前是移动端返回true  否则是false
 * @return : Boolean
 */
const isMobile = function() {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag !== null;
};

module.exports = isMobile;

