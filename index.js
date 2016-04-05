'use strict';

function Circuit(prefunc) {
  this.series = prefunc || [];
}

Circuit.prototype.add = function add(func, params) {
  this.series.push([func, params || []]);
};

Circuit.prototype.run = function run() {
  let chain = this.series[0][0](...this.series[0][1]);
  const stack = [];
  for (const item of this.series.slice(1)) {
    chain = chain.then(res => {
      stack.push(res);
      return item[0](...item[1]);
    });
  }
  return chain.then(() => stack);
};

module.exports = Circuit;
