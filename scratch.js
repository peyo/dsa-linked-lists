class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  insertFirst(item) {
    let oldHead = this.head;

    if (!this.head) {
      this.head = new _Node(item, this.head);
    } else {
      this.head = new _Node(item, this.head);
      // {Question 1} Can you switch these around?
      oldHead.prev = this.head;
      // {Question 2} Can you switch these around?
      this.head.next = oldHead;
    }
  }

  insertLast(item) {
    let tempNode = this.head;

    if (tempNode.next === null) {
      insertFirst(item);
    } else {
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  /*
  insertLast(item) {
    if (!this.tail) {
      this.tail = new _Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new _Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }
  */

  search(item) {
    let currentNode = this.head;

    if (!this.head) {
      return null
    }
    
    while (currentNode) {
      if (currentNode.value === item) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }

    return null
  }

  remove(item) {
    let currentNode = this.head;
    let previousNode = this.head;

    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log("Item is not found.");
      return;
    }

    previousNode.next = currentNode.next;
  }
}