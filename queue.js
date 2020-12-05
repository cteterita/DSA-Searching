class _Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        let newNode = new _Node(data);
        if (this.first === null) {
            this.first = newNode;
        }
        if (this.last !== null) {
            this.last.next = newNode;
        }
        this.last = newNode;
    }
    dequeue() {
        if (this.first === null) return null;
        let firstNode = this.first;
        this.first = firstNode.next;
        if (this.last === firstNode) {
            this.last === null;
        }
        return firstNode.data;
    }
}

module.exports = Queue;