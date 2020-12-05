// 6. Find the next commanding officer
// Suppose you have a tree representing a command structure of the Starship USS Enterprise.
// This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.

// This is simply a breadth-first search algorithm.

const BinarySearchTree = require('./bst');
const Queue = require('./queue');

function lineOfSuccession(tree) {
    let values = [];
    let q = new Queue;
    q.enqueue(tree);
    while (q.first) {
        let node = q.dequeue();
        values.push(node.value);
        if (node.left) {
            q.enqueue(node.left);
        }
        if (node.right) {
            q.enqueue(node.right);
        }
    }
    return values;
}

const commanders = new BinarySearchTree;

commanders.insert(10,'Captain Picard');
commanders.insert(5,'Commander Riker');
commanders.insert(3,'Lt. Cmdr. Worf');
commanders.insert(7, 'Lt. Cmdr. LaForge');
commanders.insert(1,'Lieutenant security-officer');
commanders.insert(15,'Commander Data');
commanders.insert(20,'Lt. Cmdr. Crusher');
commanders.insert(18,'Lieutenant Selar');

console.log(lineOfSuccession(commanders));
