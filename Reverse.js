/*
Reverse a list

Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.
*/

// Iterative
/*
reverse = (SLL) => {
  let prev = null;
  let curr = SLL.head;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    curr.prev = next;
    prev = curr;
    curr = next;
  }

  SLL.head = prev
  return prev;
}
*/

// Recursive

reverse = (SLL) => {
  let curr = SLL.head

  if (!curr) {
    return;
  }

  if (!curr.next) {
    SLL.head = curr;
    return;
  }

  let tmp = reverse(curr.next);
  curr.next.next = curr;
  curr.next = null;
  return tmp;
}


module.exports = { reverse };