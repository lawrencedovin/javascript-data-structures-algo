/** Node class for item in linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /** print(): traverse & console.log each item. */
    print() {
        let current = this.head;

        while (current !== null) {
        console.log(current.val);
        current = current.next;
        }
    }

    /** find(val): is val in list? */
    find(val) {
        let current = this.head;

        while (current !== null) {
        if (current.val === val) return true;

        current = current.next;
        }

        return false;
    }

    /** push(val): add node w/val to end of list. */
    push(val) {
        let newNode = new Node(val);

        if (this.head === null) this.head = newNode;

        if (this.tail !== null) this.tail.next = newNode;

        this.tail = newNode;
    }
}