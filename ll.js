class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head
    // If the list is empty
    if (!this.head) {
      return null
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null
      } else {
        // Otherwise, keep looking
        currNode = currNode.next
      }
    }
    // Found it
    return currNode
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next
      return
    }
    // Start at the head
    let currNode = this.head
    // Keep track of previous
    let previousNode = this.head

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    previousNode.next = currNode.next
  }

  insertBefore(newItem, key) {
    if (this.head.value === key || !this.head) {
      this.insertFirst(newItem)
    } else {
      // Start at the head
      let currNode = this.head
      // Check for the item
      while (currNode.value !== null) {
        // console.log(currNode)
        if (currNode.next.value === key) {
          currNode.next = new _Node(newItem, currNode.next)
          return
        }
        currNode = currNode.next
      }
    }
  }

  insertAfter(newItem, key) {
    if (this.head.value === key || !this.head) {
      this.insertFirst(newItem)
    } else {
      // Start at the head
      let currNode = this.head
      // Check for the item
      while (currNode.value !== null) {
        currNode = currNode.next
        // console.log(currNode.next)
        if (currNode.value === key) {
          currNode.next = new _Node(newItem, currNode.next)
          return
        }
      }
    }
  }

  insertAt(newItem, key){
    if (this.head.value === key || !this.head) {
      this.insertFirst(newItem)
    } else {
      // Start at the head
      let currNode = this.head
      let counter = 1
      // Check for the item
      while (currNode.value !== null) {
        if (counter === key) { 
          currNode.next = new _Node(newItem, currNode)
          return
        }
        currNode = currNode.next
        counter++ 
      }
    }
  }
}

function main() {
  let SLL = new LinkedList()
  SLL.insertFirst('Starbuck') // 7
  SLL.insertFirst('Husker')   // 6
  // Hotdog
  SLL.insertFirst('Helo')     // 5
  SLL.insertFirst('Boomer')   // 4
  // Athena
  SLL.insertFirst('Squirrel') // 3
  // Kat
  SLL.insertFirst('Apollo')   // 2
  SLL.insertFirst('Tauhida')  // 1

  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 3)

  console.log(SLL.find('Athena').next)  // Husker
  console.log(SLL.find('Hotdog').next)  // Boomer
  console.log(SLL.find('Kat').next)     // Squirrel
}

main()
