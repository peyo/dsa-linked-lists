const LinkedList = require("./LinkedLists");

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.find("Husker");
  SLL.remove("Husker")
  SLL.insertBefore("Athena", "Boomer")
  SLL.insertAfter("Hotdog", "Helo")
  SLL.insertAt("Kat", 3);
  SLL.remove("Tauhida");
  SLL.display();
  SLL.isEmpty();
  SLL.listSize();
  SLL.findPrevious("Boomer");
  SLL.findLast();

  return SLL;
}

console.log(main());
