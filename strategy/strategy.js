var performanceS = {};

/**
 * S级奖金策略
 * @param {*} salary 
 */
performanceS.prototype.calcurate = function (salary) {
  return 5 * salary;
}

var performanceA = {};

/**
 * A级奖金策略
 */
performanceA.prototype.calcurate = function (salary) {
  return 3 * salary;
}

var performanceB = {};

/**
 * B级别奖金策略
 */
performanceB.prototype.calcurate = function (salary) {
  return 2 * salary;
}

var Bonus = function () {
  // 基础工资
  this.salary = null;
  // 策略
  this.strategy = null;
}

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary;
}

Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
}

Bonus.prototype.getBonus = function () {
  return this.strategy.calcurate(this.salary)
}
