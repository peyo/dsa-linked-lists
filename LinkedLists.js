const _Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(item) {
    if (this.head !== null) {
      const newHead = new _Node(item);
      let oldHead = this.head;

      oldHead.prev = newHead;
      newHead.next = oldHead;
      this.head = newHead;
    } else {
      this.head = new _Node(item, this.head);
    }

    this.size++;
  }

  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      // *** I have no idea why prev becomes [Circular] ***
      tempNode.next = new _Node(item, null, tempNode);
    }
    this.size++
  }

  find(item) {
    let currentNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return console.log(`**${item} not found.**`)
      } else {
        currentNode = currentNode.next;
      }
    }

    return console.log(`**Found ${currentNode.value}.**`)
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;
    while ((currentNode !== null) && (currentNode.value !== item)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log(`**${item} is not found.**`);
      return;
    }

    previousNode.next = currentNode.next;
    console.log(`**Removed ${item}.**`)
    this.size--;
  }

  insertAt(item, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(item);
      return;
    }

    const newNode = new _Node(item);
    let currentNode = this.head;
    let previousNode = this.head;

    currentNode = this.head;
    let count = 0;

    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    previousNode.next = newNode;
    newNode.next = currentNode;
    this.size++;
  }

  insertBefore(item, existingItem) {
    const newNode = new _Node(item);
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.value !== existingItem) {
      currentNode = currentNode.next;
    }
    previousNode.next = newNode;
    newNode.next = currentNode;
    this.size++;
  }

  insertAfter(item, existingItem) {
    const newNode = new _Node(item);
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== existingItem) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.size++;
  }
}

module.exports = LinkedList;
