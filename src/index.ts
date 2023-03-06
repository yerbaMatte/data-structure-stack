class _Node<T> {
  public val: T;
  public next: _Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class _Stack<T> {
  private length: number;
  private first: _Node<T> | null;
  private last: _Node<T> | null;

  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  public push(val: T) {
    const newItem = new _Node(val);
    if (this.length === 0) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last!.next = newItem;
      this.last = newItem;
    }
    this.length++;
    return this;
  }
}

const newStack = new _Stack();
