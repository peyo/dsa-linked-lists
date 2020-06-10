/*
Reverse a list

Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.
*/

// Iterative
reverse = (SLL) => {
  let prev = null
  let curr = SLL.head
  let next = null

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Recursive
/*
reverse = (SLL) => {
  if (SLL.head == null || SLL.head.next == null) {
   return head; 
  }

  let curr = reverse(SLL.head.next);
  SLL.head.next.next = SLL.head;
  SLL.head.next = undefined;
  return curr;
}
*/

module.exports = { reverse };