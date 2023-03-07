"use strict";
class _Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class _Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    push(val) {
        const newItem = new _Node(val);
        if (this.size === 0) {
            this.first = newItem;
            this.last = newItem;
        }
        else {
            const temp = this.first;
            this.first = newItem;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }
    pop() {
        if (!this.size)
            return null;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        const poppedItem = this.first;
        this.first = this.first.next;
        this.size--;
        return this;
    }
}
const newStack = new _Stack();
newStack.push('ABC');
newStack.push(123);
newStack.push('Tomek');
newStack.push('jebac kranca');
