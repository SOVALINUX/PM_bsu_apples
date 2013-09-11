Tree = function (apples) {
  this.appleCount = apples || 0;
}

Tree.prototype.shake = function () {
  this.appleCount -= Math.round(Math.random() * this.appleCount);
}

Tree.prototype.grow = function () {
  this.appleCount += Math.round(Math.random() * 100);
}

exports.Tree = Tree;
