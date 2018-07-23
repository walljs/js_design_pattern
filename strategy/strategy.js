var performanceS = {};

performanceS.prototype.calcurate = function (salary) {
  return 5 * salary;
}

var performanceA = {};

performanceA.prototype.calcurate = function (salary) {
  return 3 * salary;
}

var performanceB = {};

performanceB.prototype.calcurate = function (salary) {
  return 2 * salary;
}

var Bonus = function () {
  this.salary = null;
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
