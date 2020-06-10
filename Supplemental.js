display = (SLL) => {
  let currentNode = SLL.head;

  if (!SLL.head) {
    return null;
  }

  let list = [];

  while (currentNode.next !== null) {
    list.push(currentNode.value);
    currentNode = currentNode.next;
  }

  list.push(currentNode.value);
  return console.log(list);
};

isEmpty = (SLL) => {
  if (!SLL.head) {
    return console.log("List is empty.");
  }

  if (SLL.head) {
    return null;
  }
}

listSize = (SLL) => {
  let currentNode = SLL.head;

  if (!SLL.head) {
    return console.log(`Size: 0`);
  }

  let list = [];

  while (currentNode.next !== null) {
    if (currentNode.next == null) {
      list.push(currentNode.value);
    } else {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  let count = 0
  for (let i = 0; i <= list.length; i++) {
    count++;
  }

  return console.log(`size: ${count}`)
}

findPrevious = (item, SLL) => {
  let currentNode = SLL.head;
  let previousNode = SLL.head;

  while (currentNode && currentNode.value !== item) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  return console.log(`${item}'s previous node: ${previousNode.value}`)
}

findLast = (SLL) => {
  let currentNode = SLL.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  return console.log(`last node: ${currentNode.value}`)
}

module.exports = { display, isEmpty, listSize, findPrevious, findLast };