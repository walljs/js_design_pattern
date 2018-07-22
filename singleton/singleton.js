/**
 * 单例模式实现思路：
 *   用一个变量来标志当前是否已经为某个类创建了实例
 */

var Singleton = function(name) {
  this.name = name;
  this.instance = null;
}

Singleton.prototype.getName = function() {
  return this.name;
}

Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

var a = Singleton.getInstance('test1');
var b = Singleton.getInstance('test2');

console.log(a === b); // true