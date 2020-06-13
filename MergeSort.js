// Time complexity: O(n log n)
// Space complexity: O(n)

const _Node = require("./Node");

function sortList(SLL) {
  let head = SLL.head;
  if (!head || !head.next) {
    // Return head if there is no head or no head.next.
    return head;
  }

  let fast = head,
    slow = head;
  // While fast.next and fast.next.next is not null...
  while (fast.next && fast.next.next) {
    // Traverse...
    fast = fast.next.next;
    slow = slow.next;
  }

  let middle = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(middle));
}

const merge = (n, m) => {
  // dummy and temp
  let d = new _Node(-1);
  let tmp = d;

  // This is merging the lists based on if < is true or false.
  // While n and m are not null...
  while (n && m) {
    // When n is less than m, tmp.next is equal to:
    // when True: n
    // when False: m
    tmp.next = n.val < m.val
      ? n
      : m;
    // Traverse...
    tmp = tmp.next;

    // If n is less than m...
    if (n.val < m.val) {
      // Traverse n to n.next because n would've been set as tmp...
      n = n.next;
    } else {
      // Else traverse m to m.next because m would've been set as tmp...
      m = m.next;
    }
  }

  // If the last node that is remaining is n, then set tmp.next as n.
  if (n) {
    tmp.next = n;
  }

  // If the last node that is remaining is m, then set tmp.next as m.
  if (m) {
    tmp.next = m;
  }

  return d.next;
};

module.exports = { sortList };
