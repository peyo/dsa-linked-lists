/*
Middle of a list
Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class.The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.
*/

// Simple way - Using traversal, counting, and dividing by half:
/*
middle = (SLL) => {
  let curr = SLL.head;
  count = 0;

  let list = [];
  while (curr.next !== null) {
    list.push(curr.value);
    curr = curr.next;
    count++
  }
  list.push(curr.value);
  count++

  if (count % 2 !== 0) {
    let i = 0;
    while (i <= count / 2) {
      if (i < count / 2) {
        i++;
      }

      if (i = count / 2) {
        return console.log(list[i])
      }
    }
  }
  
  if (count % 2 == 0) {
    let i = 0;
    while (i <= count / 2) {
      if (i < count / 2) {
        i++;
      }

      if (i = count / 2) {
        return console.log(list[i - 1], list[i])
      }
    }
  }
}
*/

middle = (SLL) => {
  let fast = SLL.head
  let slow = SLL.head
  let curr = SLL.head;
  count = 0;

  let list = [];
  while (curr.next !== null) {
    list.push(curr.value);
    curr = curr.next;
    count++
  }
  list.push(curr.value);
  count++

  if (count % 2 !== 0) {
    while (fast && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return console.log(slow.value);
  }

  if (count % 2 == 0) {
    while (fast && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return console.log(slow.prev.value, slow.value);
  }

  return
}

module.exports = { middle }