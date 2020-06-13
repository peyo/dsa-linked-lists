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
const { mergeSort } = require("./Scratch");

function main() {
  let SLL = new LinkedList();

  //SLL.insertFirst("Apollo");
  //SLL.insertLast("Boomer");
  //SLL.insertLast("Helo");
  //SLL.insertLast("Husker");
  //SLL.insertLast("Starbuck");
  //SLL.insertLast("Tauhida");

  SLL.insertFirst(5);
  SLL.insertLast(9);
  SLL.insertLast(8);
  SLL.insertLast(3);
  SLL.insertLast(1);
  SLL.insertLast(7);

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
  reverse(SLL);
  display(SLL);

  // Insertion sort
  //insertionSort(SLL);
  //display(SLL);

  // Merge sort
  //mergeSort(SLL);

  return SLL;
}

console.log(main());

module.exports = main