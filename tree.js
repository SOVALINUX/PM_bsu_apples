Tree = function (apples, flowers) {
  this.appleCount = apples || 0;
  this.flowerCount = flowers || 0;
}

Tree.prototype.shake = function () {
  this.appleCount -= Math.round(Math.random() * this.appleCount);
}

Tree.prototype.grow = function () {
  this.appleCount += this.flowerCount;
  this.flowerCount = 0;
}

Tree.prototype.bloom = function () {
  this.flowerCount += Math.round(Math.random() * 100);
}

exports.Tree = Tree;
