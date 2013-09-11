var Tree = require('./tree').Tree;
var Apple = require('./apple').Apple;

var tree = new Tree();
console.log("Initial apples count: " + tree.appleCount);
tree.grow();
console.log("Apples after grow: " + tree.appleCount);
tree.shake();
console.log("Apples after shake: " + tree.appleCount);
