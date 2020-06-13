const _Node = require("./Node");
const LinkedList = require("./LinkedLists");

mergeSort = (SLL) => {
  let list = SLL.head;

  if (list.next === null) {
    return list;
  }

  let count = 0;
  let countList = list;
  let leftPart = list;
  let leftPointer = list;
  let rightPart = null;
  let rightPointer = null;

  while (countList.next !== null) {
    count++;
    countList = countList.next;
  }

  let mid = Math.floor(count / 2);
  let count2 = 0;

  while (count2 < mid) {
    count2++;
    leftPointer = leftPointer.next;
  }

  rightPart = new LinkedList(leftPointer.next);
  leftPointer.next = null;

  return _mergeSort(mergeSort(leftPart), mergeSort(rightPart));
}

_mergeSort = (left, right) => {
  let result = new LinkedList();

  let resultPointer = result.head;
  let pointerLeft = left;
  let pointerRight = right;

  while (pointerLeft && pointerRight) {
    let tempNode = null;

    if (pointerLeft.node > pointerRight.node) {
      tempNode = pointerRight.node;
      pointerRight = pointerRight.next;
    } else {
      tempNode = pointerLeft.node;
      pointerLeft = pointerLeft.next;
    }

    if (result.head == null) {
      result.head = new _Node(tempNode);
      resultPointer = result.head;
    } else {
      resultPointer.next = new _Node(tempNode);
      resultPointer = resultPointer.next
    }
  }

  resultPointer.next = pointerLeft;
  while (resultPointer.next) {
    resultPointer = resultPointer.next;
    resultPointer.next = pointerRight;

    return result.head;
  }
}

module.exports = { mergeSort }

// Reference:
// https://www.geeksforgeeks.org/merge-sort-linked-lists-javascript/