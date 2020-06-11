var sortList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  // close first half list
  prev.next = null;

  const l1 = sortList(head);
  const l2 = sortList(slow);
  return merge(l1, l2);
};

function merge(l1, l2) {
  const head = new ListNode();
  let current = head;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  current.next = (l1 === null) ? l2 : l1;

  return head.next;
}