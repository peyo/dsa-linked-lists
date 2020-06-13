// Time complexity: O(n^2)
// Space complexity: O(1)

const _Node = require("./Node");

/*
Sorting a list
Write an algorithm that will sort a given linked list. For example given a list such as 3 -> 2 -> 5 -> 7 -> 1, your program will output the sorted version of this list which will be 1 -> 2 -> 3 -> 5 -> 7. You may not use another list or any other data structure such as an array to store the data.
*/

insertionSort = (SLL) => {
  let result = null;
  let curr = SLL.head;
  let next = null;

  while (curr !== null) {
    next = curr.next;

    result = sortedInsert(result, curr);
    curr = next;
  }

  SLL.head = result;
  return result;
}

// Sorting the list.
let sortedInsert = (sorted, newNode) => {
  // Temporary node to swap the elements.
  let temp = new _Node();
  let curr = temp;
  temp.next = sorted;

  // Sort the list based on the specified order.
  while (curr.next !== null && curr.next.value < newNode.value ) {
    curr = curr.next;
  }

  // Swap the elements
  newNode.next = curr.next;
  curr.next = newNode;
  newNode.prev = curr.prev;

  // Return the sorted list.
  return temp.next;
}

module.exports = { insertionSort };

// Resource:
// https://learnersbucket.com/examples/algorithms/sorting-a-linked-list/