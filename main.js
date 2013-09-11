var Tree = require('./tree').Tree;
var Apple = require('./apple').Apple;

var tree = new Tree();
console.log("Initial apples count: " + tree.appleCount + ", flowers count: " + tree.flowerCount);
tree.bloom();
console.log("Apples after bloom: " + tree.appleCount + ", flowers: " + tree.flowerCount);
tree.grow();
console.log("Apples after grow: " + tree.appleCount + ", flowers: " + tree.flowerCount);
tree.shake();
console.log("Apples after shake: " + tree.appleCount + ", flowers: " + tree.flowerCount);
