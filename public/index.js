"use strict";
class _Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class _Stack {
    constructor() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }
    push(val) {
        const newItem = new _Node(val);
        if (this.length === 0) {
            this.first = newItem;
            this.last = newItem;
        }
        else {
            this.last.next = newItem;
            this.last = newItem;
        }
        this.length++;
        return this;
    }
}
const newStack = new _Stack();
