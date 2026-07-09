class Nodes {
  public data: number;
  public next: Nodes | null;

  constructor(data: number, next: Nodes | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  public head: Nodes | null;

  constructor() {
    this.head = null;
  }

  public append(data: number): void {
    const newNode = new Nodes(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  public printList(): void {
    let current = this.head;

    while (current !== null) {
      console.log(current.data + " ");
      current = current.next;
    }
  }

  public changeNum(): void {
    while (this.head !== null) {
      if (this.head.data % 2 !== 0) {
        if (this.head.data < 0) {
          this.head.data = -1;
        } else {
          this.head.data = 1;
        }
      }
      this.head = this.head.next;
    }
  }
}

const list = new LinkedList();

for (let i = 0; i < 10; i++) {
  list.append(Math.floor(Math.random() * 3) + 1);
  i++;
}

list.printList();
list.changeNum();
list.printList();
