const LinkedList = require("./LinkedLists");
const _Node = require("./Node");

mergeSort = (list) => {
  if (list.next === null)
    return list;

  let count = 0;
  let countList = list
  let leftPart = list;
  let leftPointer = list;
  let rightPart = null;
  let rightPointer = null;

  // Counting the nodes in the received linkedlist 
  while (countList.next !== null) {
    count++;
    countList = countList.next;
  }

  // Counting the mid of the linked list 
  let mid = Math.floor(count / 2)
  let count2 = 0;

  // Separating the left and right part with 
  // respect to mid node in tke linked list 
  while (count2 < mid) {
    count2++;
    leftPointer = leftPointer.next;
  }

  rightPart = new LinkedList(leftPointer.next);
  leftPointer.next = null;

  // Here are two linked list which 
  // contains the left most nodes and right 
  // most nodes of the mid node 
  return this._mergeSort(this.mergeSort(leftPart),
    this.mergeSort(rightPart.head))
}

// Merging both lists in sorted manner 
_mergeSort = (left, right) => {

  // Create a new empty linked list 
  let result = new LinkedList()

  let resultPointer = result.head;
  let pointerLeft = left;
  let pointerRight = right;


  // If true then add left most node value in result, 
  // increment left pointer else do the same in 
  // right linked list. 
  // This loop will be executed until pointer's of 
  // a left node or right node reached null 
  while (pointerLeft && pointerRight) {
    let tempNode = null;

    // Check if the right node's value is greater than 
    // left node's value 
    if (pointerLeft.node > pointerRight.node) {
      tempNode = pointerRight.node
      pointerRight = pointerRight.next;
    }
    else {
      tempNode = pointerLeft.node
      pointerLeft = pointerLeft.next;
    }

    if (result.head == null) {
      result.head = new _Node(tempNode)
      resultPointer = result.head
    }
    else {
      resultPointer.next = new _Node(tempNode)
      resultPointer = resultPointer.next
    }
  }

  // Add the remaining elements in the last of resultant 
  // linked list 
  resultPointer.next = pointerLeft;
  while (resultPointer.next)
    resultPointer = resultPointer.next

  resultPointer.next = pointerRight

  // Result is  the new sorted linked list 
  return result.head;
} 

module.exports = { mergeSort }

// Reference:
// https://www.geeksforgeeks.org/merge-sort-linked-lists-javascript/