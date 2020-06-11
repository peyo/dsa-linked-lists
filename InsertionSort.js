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
  let next;

  // Iterate the loop.
  while (curr !== null) {
    next = curr.next;

    // Sort the linked list until the current value and store it.
    result = sortedInsert(result, curr);
    curr = next;
  }

  return result;
}

// Sorting the list.
let sortedInsert = (sorted, newNode) => {
  console.log(sorted);
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

  // Return the sorted list.
  return temp.next;
}

module.exports = { insertionSort };