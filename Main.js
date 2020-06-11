const LinkedList = require("./LinkedLists");
const {
  display,
  isEmpty,
  listSize,
  findPrevious,
  findLast
} = require("./Supplemental");
const { reverse } = require("./Reverse");
const { middle } = require("./Middle");
const { insertionSort } = require("./InsertionSort");
const { sortList } = require("./MergeSort");

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst(5);
  SLL.insertLast(7);
  SLL.insertLast(9);
  SLL.insertLast(10);
  SLL.insertLast(1);
  SLL.insertLast(3);

  // Find
  //SLL.find("Husker");

  // Remove
  //SLL.remove("Husker")

  // Insert before
  //SLL.insertBefore("Athena", "Boomer")

  // Insert after
  //SLL.insertAfter("Hotdog", "Helo")

  // Insert at
  //SLL.insertAt("Kat", 3);

  // Remove
  //SLL.remove("Tauhida");

  // Display
  //display(SLL);

  // Is empty
  //isEmpty(SLL);

  // List size
  //listSize(SLL);

  // Find previous
  //findPrevious("Helo", SLL);

  // Find last
  //findLast(SLL);

  // Reverse
  //reverse(SLL);

  // Insertion sort
  //let sorted = insertionSort(SLL);
  //while (sorted !== null) {
  //  console.log(sorted.value);
  //  sorted = sorted.next;
  //}

  // Merge sort
  let sorted = sortList(SLL);
  while (sorted !== null) {
    console.log(sorted.value);
    sorted = sorted.next;
  }

  return SLL;
}

console.log(main());

module.exports = main