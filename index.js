
// class _Node {
//     constructor(value, next) {
//         this.value = value;
//         this.next = next;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insertFirst(item) {
//         this.head = new _Node(item, this.head);
//     }

//     insertLast(item) {
//         if (this.head === null) {
//             this.insertFirst(item);
//         }
//         else {
//             let tempNode = this.head;
//             while (tempNode.next !== null) {
//                 tempNode = tempNode.next;
//             }
//             tempNode.next = new _Node(item, null);
//         }
//     }

//     find(item) { 
//         // Start at the head
//         let currNode = this.head;
//         // If the list is empty
//         if (!this.head) {
//             return null;
//         }
//         // Check for the item 
//         while (currNode.value !== item) {
//             /* Return null if it's the end of the list 
//                and the item is not on the list */
//             if (currNode.next === null) {
//                 return null;
//             }
//             else {
//                 // Otherwise, keep looking 
//                 currNode = currNode.next;
//             }
//         }
//         // Found it
//         return currNode;
//     }

//     remove(item){ 
//         // If the list is empty
//         if (!this.head) {
//             return null;
//         }
//         // If the node to be removed is head, make the next node head
//         if (this.head.value === item) {
//             this.head = this.head.next;
//             return;
//         }
//         // Start at the head
//         let currNode = this.head;
//         // Keep track of previous
//         let previousNode = this.head;

//         while ((currNode !== null) && (currNode.value !== item)) {
//             // Save the previous node 
//             previousNode = currNode;
//             currNode = currNode.next;
//         }
//         if (currNode === null) {
//             console.log('Item not found');
//             return;
//         }
//         previousNode.next = currNode.next;
//     }
// }

// const main = function() {
//     let SLL = new LinkedList();
//     const arr = [ 'Helo', 'Husker', 'Starbuck']

//     SLL.insertFirst('Apollo')
//     SLL.insertLast(arr[0])
//     SLL.insertLast(arr[1])


//     console.log(SLL)

//     SLL.remove('Apollo')
//     console.log(SLL)
// }

// console.log(main())

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

// const n1 = new Node(100)


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // Insert the first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    // Insert the last node
    insertLast(data) {
        let node = new Node(data)
        let current

        // if empty, make head
        if(!this.head) {
            this.head = node
        } else {
            current = this.head

            while(current.next) {
                current = current.next
            }

            current.next = node
        }

        this.size++
    }

    // Insert the at Index
    insertAt(data, index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return
        }
        // if first index
        if(index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        const node = new Node(data)
        let current, previous

        // set current to first
        current =  this.head
        let count = 0

        while(count < index) {
            previous = current // Node before index
            count++
            current = current.next // node after index
        }

        node.next = current 
        previous.next = node

        this.size++
    }

    //  Get at index
    getAt(index) {
        let current = this.head
        let count = 0

        while(current) {
            if(count == index) {
                console.log(current.data)
            }
            count++
            current = current.next
        }

        return null
    }

    // remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return
        }

        let current = this.head
        let previous
        let count = 0

        // Remove first 
        if(index === 0) {
            this.head = current.next
        } else {
            while(count < index) {
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }

        this.size--
    }

    //  Clear List
    clearList() {
        this.head = null
        this.size = 0
    }

    //  Print the List data
    printListData() {
        let current = this.head

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }

}

const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500, 2)


ll.clearList()
// ll.printListData()
// ll.removeAt(22)
ll.printListData()