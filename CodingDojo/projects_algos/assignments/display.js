class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }


    addFront(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            return this;
        }  
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeFront(){
        if(!this.head){
            return this;
        }
        let temp = this.head.next
        this.head = null;
        this.head = temp;
        return this;
    }

    front(){
        if (!this.head){
            return this;
        }  
        return this.head.data;
    }

    display(){
        let curr = this.head;
        let myList = "";
        if(!curr){
            return curr;
        }

        while(curr != null){
            myList += curr.data;
            curr = curr.next; 
        }
        return myList;
    }
}

let testList = new SLL();
testList.addFront(8);
testList.addFront(2); 
testList.addFront(4); 
testList.addFront(3);

let someString = testList.display();
console.log(someString);
