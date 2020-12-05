// 5. Implement different tree traversals
// Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

const BinarySearchTree = require("./bst");

let tree = new BinarySearchTree;
tree.insert(25);
tree.insert(15);
tree.insert(50);
tree.insert(10);
tree.insert(24);
tree.insert(35);
tree.insert(70);
tree.insert(4);
tree.insert(12);
tree.insert(18);
tree.insert(31);
tree.insert(44);
tree.insert(66);
tree.insert(90);
tree.insert(22);

// A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
function preOrder(tree, values=[]) {
    values.push(tree.key);
    if (tree.left) {
        values = preOrder(tree.left, values);
    }
    if (tree.right) {
        values = preOrder(tree.right, values);
    }
    return values;
}

console.log(preOrder(tree));

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
function inOrder(tree, values=[]) {
    if (tree.left) {
        values = inOrder(tree.left, values);
    }
    values.push(tree.key);
    if (tree.right) {
        values = inOrder(tree.right, values);
    }
    return values;
}

console.log(inOrder(tree));

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
function postOrder(tree, values=[]) {
    if (tree.left) {
        values = postOrder(tree.left, values);
    }
    if (tree.right) {
        values = postOrder(tree.right, values);
    }
    values.push(tree.key);
    return values;
}

console.log(postOrder(tree));