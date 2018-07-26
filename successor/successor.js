/**
 * ========================================================
 * 手机售卖电商网站
 * 针对支付过500元定金的用户，赋予100元优惠券
 * 针对支付过200元定金的用户，赋予50元优惠券
 * 普通用户无优惠，并且在库存有限的情况下不一定能买得到
 * ========================================================
 * orderType(订单类型) 1: 500元定金 2:200元定金 3：普通用户
 * pay(是否已支付定金)
 * stock库存数量
 */

var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay) {
    console.log('500元定金用户，优惠100元');
  } else {
    return "nextSuccessor";
  }
};

var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay) {
    console.log('200元定金用户，优惠50元');
  } else {
    return "nextSuccessor";
  }
};

var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通用户，库存充足，购买成功');
  } else {
    console.log('库存不足，购买失败');
  }
};

var Chain = function (fn) {
  this.fn = fn;
  this.successor = null
};

Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor;
};

Chain.prototype.passRequest = function () {
  var ret = this.fn.apply(this, arguments);

  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments);
  }

  return ret;
}

var chainOrder500 = new Chain(order500);
var chainOrder200 = new Chain(order200);
var chainOrderNormal = new Chain(orderNormal);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

// test
chainOrder500.passRequest(1, true, 500);
chainOrder500.passRequest(2, false, 100);
chainOrder500.passRequest(2, true, 100);
chainOrder500.passRequest(3, true, 0);
chainOrder500.passRequest(3, false, 100);
