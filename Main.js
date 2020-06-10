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

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  //SLL.find("Husker");
  //SLL.remove("Husker")
  //SLL.insertBefore("Athena", "Boomer")
  //SLL.insertAfter("Hotdog", "Helo")
  //SLL.insertAt("Kat", 3);
  //SLL.remove("Tauhida");
  //display(SLL);
  //isEmpty(SLL);
  //listSize(SLL);
  //findPrevious("Helo", SLL);
  //findLast(SLL);
  //reverse(SLL);
  middle(SLL);

  return SLL;
}

console.log(main());

module.exports = main