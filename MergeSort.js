// Time complexity: O(n log n)
// Space complexity: O(n)

const _Node = require("./Node");

function sortList(SLL) {
  let head = SLL.head;
  if (!head || !head.next) return head;

  let fast = head,
    slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let middle = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(middle));
}

const merge = (o, t) => {
  let d = new _Node(-1); //dummy and temp
  let tmp = d;

  while (o && t) {
    tmp.next = o.val < t.val ? o : t;
    tmp = tmp.next;
    if (o.val < t.val) o = o.next;
    else t = t.next;
  }
  
  if (o) tmp.next = o;
  if (t) tmp.next = t;
  return d.next;
};

module.exports = { sortList };
