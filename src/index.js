import {LinkedList} from "./linkedList";

const list=new LinkedList();

console.log(list.prepend(1));
console.log(list.at(0));
console.log(list.at(1));
console.log(list.size());
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.size());