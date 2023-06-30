import { Node } from "./node";

class LinkedList{
    constructor(listHead){
        this.listHead= listHead;
    }

    append(value){
        if(!this.listHead) this.listHead=new Node(value);
        let tail=this.getTail();
        tail.nextNode=new Node(value);
        return tail;
    }

    prepend(value){
        if (!this.listHead) {
            this.listHead=new Node(value);
            return this}
        let temp=this.listHead;
        this.listHead=new Node(value,temp);
        return this;
    }

    size(){
        let count=0;
        let currentNode= this.listHead;
        while (currentNode !== null) {
            count ++;
            currentNode=currentNode.nextNode;
        }
        return count;
    }

    getHead(){
        return this.listHead;
    }
    
    getTail(){
        if (!this.listHead) return null;
        let tail=this.listHead;
        while (tail.nextNode !== null) tail=tail.nextNode;
        return tail;
    }

    at(index){
        let count=0;
        let currentNode=this.listHead;
        
        while (count<index){
            currentNode=currentNode.nextNode;
            count++;
        }
        return currentNode;
    }

    pop(){
        if (!this.listHead) return null;
        let tail=this.getTail();

        let listSize=this.size();
        let beforeLast=this.at(listSize-2);
        beforeLast.nextNode=null;

        return tail;
    }

    contains(value){
        if (!this.listHead) return false;
        let currentNode=this.listHead;
        while (currentNode.nextNode != null){
            if (currentNode.value === value) return true;
            currentNode=currentNode.nextNode;
        }
        return false;
    }

    find(value){
        let index=0;
        let currentNode=this.listHead;
        while(currentNode != null){
            if(currentNode.value === value) return index;
            currentNode=currentNode.nextNode;
            index ++;
        }
        return null;
    }

    toString(){
        if (!this.listHead) return 'list empty';
        let string='';
        let currentNode=this.listHead;
        do{
            string=string.concat(`(${currentNode.value}) -> `);
            currentNode=currentNode.nextNode;
        } while (currentNode != null);
        string=string.concat('null');
        return string;
    }

    insertAt(value, index){
        //if the index is too high, the new node is inserted at the end of the list
        if (index > this.size()) return this.insertAt(value, this.size());

        //if index is zero, the new Node is prepended, else inserted in the given position
        if (index == 0) this.prepend(value);
          else {
            let currentNode=this.listHead;
            let previousNode;
        
            for(let i=0; i<index; i++){
                previousNode=currentNode;
                currentNode=currentNode.nextNode;
            }

            currentNode=new Node(value, previousNode.nextNode);
            previousNode.nextNode=currentNode;
          }
    }
    
    removeAt(index){
        if (index >this.size()) return console.log(`Index value has to be in the range 0-${this.size()}`);

        let currentNode=this.listHead;
        let previousNode;

        if (index==0){
            this.listHead=currentNode.nextNode;
            currentNode.nextNode=null;
        } else {
            for(let i=0; i<index; i++){
                previousNode=currentNode;
                currentNode=currentNode.nextNode;
            }
            previousNode.nextNode=currentNode.nextNode;
        }
    }
}

export {LinkedList}