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
        let beforeLast=this.at(listSize-1);
        beforeLast.nextNode=null;

        return tail;
    }
}

export {LinkedList}