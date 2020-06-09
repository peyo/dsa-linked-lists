const _Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(item) {
    // {Question} How do I add an IF statement, if there is a head?
    if (this.head !== null) {
      const newHead = new _Node(item, this.head);
      let currentNode = this.head;

      currentNode.prev = newHead;
      newHead.next = currentNode;
    } else {
      this.head = new _Node(item, this.head);
    }

    this.size++;
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
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

    // {Question} Why can't newNode be this.head like in insertFirst previous functions?
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
    // {Question} Why can't lines 124 and 125 be switched?
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.size++;
  }

  display() {
    let currentNode = this.head;
    
    if (!this.head) {
      return null;
    }

    let list = [];

    while (currentNode.next !== null) {
        list.push(currentNode.value);
        currentNode = currentNode.next;
      }
      
    list.push(currentNode.value);
    return console.log(list);
  }

  isEmpty() {
    if (!this.head) {
      return console.log("List is empty.");
    }

    if (this.head) {
      return null;
    }
  }

  listSize() {
    let currentNode = this.head;

    if (!this.head) {
      return console.log(`Size: 0`);
    }

    let list = [];

    while (currentNode.next !== null) {
      if (currentNode.next == null) {
        list.push(currentNode.value);
      } else {
        list.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }

    let count = 0
    for (let i = 0; i <= list.length; i++) {
      count++;
    }

    return console.log(`size: ${count}`)
  }

  findPrevious(item) {
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    console.log(`${item}'s previous node: ${previousNode.value}`)
  }

  findLast() {
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    console.log(`last node: ${currentNode.value}`)
  }
}

module.exports = LinkedList;
