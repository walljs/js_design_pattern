/**
 * 实例管理逻辑
 * @param {*} fn 
 */
var getSingle = function (fn) {
  var result;
  return function() {
    return result || (result = fn.apply(this, arguments));
  }
}

/**
 * 业务逻辑
 */
var createDiv = getSingle(function() {
  var div = document.createElement('div');
  div.innerHTML = '我是一个登录框';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
});

var signin = function() {
  var div = createDiv();
  div.style.display = 'block';
}

document.getElementById('show').addEventListener('click', signin);