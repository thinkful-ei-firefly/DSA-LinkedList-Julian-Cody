class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(newItem , key) {
    if (this.head.value === key || !this.head) {
      this.insertFirst(newItem);
    }else{ 
      // Start at the head
      let currNode = this.head;
      // Check for the item
      while (currNode.value !== key) {
        currNode = currNode.next;
        console.log(currNode.next);
        if (currNode.next.value === key) {
        
          currNode.next = newItem;
          
          new _Node(newItem, currNode.next)
          console.log("test")
        }
      }
    }
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst("Starbuck");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Squirrel");
  SLL.insertFirst("Apollo");
  SLL.insertFirst("Tauhida");
  SLL.insertBefore("New" , "Husker");
  console.log(SLL.find("New"));
}

main();
