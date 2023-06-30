import {LinkedList} from "./linkedList";

const list=new LinkedList();

console.log(list.toString());

console.log(list.prepend(1));
console.log(list.toString());
console.log(list.at(0));
console.log(list.at(1));
console.log(list.size());
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.toString());
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.size());
console.log(list.contains(2));
console.log(list.find(3));
console.log(list.toString());
list.insertAt(88, 2);
list.insertAt(66,0);
console.log(list.size());
list.insertAt(55, 8);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
console.log(list.getHead());