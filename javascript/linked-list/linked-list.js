//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { threadId } from "worker_threads";

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.tail) return null;

    const value = this.tail.value;

    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }

    this.length--;
    return value;
  }

  shift() {
    const value = this.head.value;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.tail = null;
      this.head = null;
    }

    this.length--;
    return value;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  delete(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (value === currentNode.value) {
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = this.head.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = this.tail.prev;
        }

        this.length--;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  count() {
    return this.length;
  }
}
