/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");


class LinkedList{
    constructor(listHead){
        this.listHead= listHead;
    }

    append(value){
        if(!this.listHead) this.listHead=new _node__WEBPACK_IMPORTED_MODULE_0__.Node(value);
        let tail=this.getTail();
        tail.nextNode=new _node__WEBPACK_IMPORTED_MODULE_0__.Node(value);
        return tail;
    }

    prepend(value){
        if (!this.listHead) {
            this.listHead=new _node__WEBPACK_IMPORTED_MODULE_0__.Node(value);
            return this}
        let temp=this.listHead;
        this.listHead=new _node__WEBPACK_IMPORTED_MODULE_0__.Node(value,temp);
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

            currentNode=new _node__WEBPACK_IMPORTED_MODULE_0__.Node(value, previousNode.nextNode);
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



/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node{
    constructor(value, nextNode=null){
        this.value=value;
        this.nextNode=nextNode;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/linkedList.js");


const list=new _linkedList__WEBPACK_IMPORTED_MODULE_0__.LinkedList();

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHVDQUFJO0FBQ2pEO0FBQ0EsMEJBQTBCLHVDQUFJO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qix1Q0FBSTtBQUNsQztBQUNBO0FBQ0EsMEJBQTBCLHVDQUFJO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHVDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsWUFBWTs7QUFFdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRXhDLGVBQWUsbURBQVU7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWxpbmtlZC1saXN0cy8uL3NyYy9saW5rZWRMaXN0LmpzIiwid2VicGFjazovL3RvcC1saW5rZWQtbGlzdHMvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly90b3AtbGlua2VkLWxpc3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1saW5rZWQtbGlzdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1saW5rZWQtbGlzdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtbGlua2VkLWxpc3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLWxpbmtlZC1saXN0cy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuXG5jbGFzcyBMaW5rZWRMaXN0e1xuICAgIGNvbnN0cnVjdG9yKGxpc3RIZWFkKXtcbiAgICAgICAgdGhpcy5saXN0SGVhZD0gbGlzdEhlYWQ7XG4gICAgfVxuXG4gICAgYXBwZW5kKHZhbHVlKXtcbiAgICAgICAgaWYoIXRoaXMubGlzdEhlYWQpIHRoaXMubGlzdEhlYWQ9bmV3IE5vZGUodmFsdWUpO1xuICAgICAgICBsZXQgdGFpbD10aGlzLmdldFRhaWwoKTtcbiAgICAgICAgdGFpbC5uZXh0Tm9kZT1uZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0YWlsO1xuICAgIH1cblxuICAgIHByZXBlbmQodmFsdWUpe1xuICAgICAgICBpZiAoIXRoaXMubGlzdEhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdEhlYWQ9bmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXN9XG4gICAgICAgIGxldCB0ZW1wPXRoaXMubGlzdEhlYWQ7XG4gICAgICAgIHRoaXMubGlzdEhlYWQ9bmV3IE5vZGUodmFsdWUsdGVtcCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNpemUoKXtcbiAgICAgICAgbGV0IGNvdW50PTA7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZT0gdGhpcy5saXN0SGVhZDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgIGN1cnJlbnROb2RlPWN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICBnZXRIZWFkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RIZWFkO1xuICAgIH1cbiAgICBcbiAgICBnZXRUYWlsKCl7XG4gICAgICAgIGlmICghdGhpcy5saXN0SGVhZCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCB0YWlsPXRoaXMubGlzdEhlYWQ7XG4gICAgICAgIHdoaWxlICh0YWlsLm5leHROb2RlICE9PSBudWxsKSB0YWlsPXRhaWwubmV4dE5vZGU7XG4gICAgICAgIHJldHVybiB0YWlsO1xuICAgIH1cblxuICAgIGF0KGluZGV4KXtcbiAgICAgICAgbGV0IGNvdW50PTA7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZT10aGlzLmxpc3RIZWFkO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKGNvdW50PGluZGV4KXtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlPWN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfVxuXG4gICAgcG9wKCl7XG4gICAgICAgIGlmICghdGhpcy5saXN0SGVhZCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCB0YWlsPXRoaXMuZ2V0VGFpbCgpO1xuXG4gICAgICAgIGxldCBsaXN0U2l6ZT10aGlzLnNpemUoKTtcbiAgICAgICAgbGV0IGJlZm9yZUxhc3Q9dGhpcy5hdChsaXN0U2l6ZS0yKTtcbiAgICAgICAgYmVmb3JlTGFzdC5uZXh0Tm9kZT1udWxsO1xuXG4gICAgICAgIHJldHVybiB0YWlsO1xuICAgIH1cblxuICAgIGNvbnRhaW5zKHZhbHVlKXtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RIZWFkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZT10aGlzLmxpc3RIZWFkO1xuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dE5vZGUgIT0gbnVsbCl7XG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGUudmFsdWUgPT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlPWN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaW5kKHZhbHVlKXtcbiAgICAgICAgbGV0IGluZGV4PTA7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZT10aGlzLmxpc3RIZWFkO1xuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZSAhPSBudWxsKXtcbiAgICAgICAgICAgIGlmKGN1cnJlbnROb2RlLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgY3VycmVudE5vZGU9Y3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICAgICAgICBpbmRleCArKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpe1xuICAgICAgICBpZiAoIXRoaXMubGlzdEhlYWQpIHJldHVybiAnbGlzdCBlbXB0eSc7XG4gICAgICAgIGxldCBzdHJpbmc9Jyc7XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZT10aGlzLmxpc3RIZWFkO1xuICAgICAgICBkb3tcbiAgICAgICAgICAgIHN0cmluZz1zdHJpbmcuY29uY2F0KGAoJHtjdXJyZW50Tm9kZS52YWx1ZX0pIC0+IGApO1xuICAgICAgICAgICAgY3VycmVudE5vZGU9Y3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICAgIH0gd2hpbGUgKGN1cnJlbnROb2RlICE9IG51bGwpO1xuICAgICAgICBzdHJpbmc9c3RyaW5nLmNvbmNhdCgnbnVsbCcpO1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIGluc2VydEF0KHZhbHVlLCBpbmRleCl7XG4gICAgICAgIC8vaWYgdGhlIGluZGV4IGlzIHRvbyBoaWdoLCB0aGUgbmV3IG5vZGUgaXMgaW5zZXJ0ZWQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLnNpemUoKSkgcmV0dXJuIHRoaXMuaW5zZXJ0QXQodmFsdWUsIHRoaXMuc2l6ZSgpKTtcblxuICAgICAgICAvL2lmIGluZGV4IGlzIHplcm8sIHRoZSBuZXcgTm9kZSBpcyBwcmVwZW5kZWQsIGVsc2UgaW5zZXJ0ZWQgaW4gdGhlIGdpdmVuIHBvc2l0aW9uXG4gICAgICAgIGlmIChpbmRleCA9PSAwKSB0aGlzLnByZXBlbmQodmFsdWUpO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlPXRoaXMubGlzdEhlYWQ7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGluZGV4OyBpKyspe1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTm9kZT1jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZT1jdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudE5vZGU9bmV3IE5vZGUodmFsdWUsIHByZXZpb3VzTm9kZS5uZXh0Tm9kZSk7XG4gICAgICAgICAgICBwcmV2aW91c05vZGUubmV4dE5vZGU9Y3VycmVudE5vZGU7XG4gICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVBdChpbmRleCl7XG4gICAgICAgIGlmIChpbmRleCA+dGhpcy5zaXplKCkpIHJldHVybiBjb25zb2xlLmxvZyhgSW5kZXggdmFsdWUgaGFzIHRvIGJlIGluIHRoZSByYW5nZSAwLSR7dGhpcy5zaXplKCl9YCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnROb2RlPXRoaXMubGlzdEhlYWQ7XG4gICAgICAgIGxldCBwcmV2aW91c05vZGU7XG5cbiAgICAgICAgaWYgKGluZGV4PT0wKXtcbiAgICAgICAgICAgIHRoaXMubGlzdEhlYWQ9Y3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5uZXh0Tm9kZT1udWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8aW5kZXg7IGkrKyl7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlPWN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlPWN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXNOb2RlLm5leHROb2RlPWN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge0xpbmtlZExpc3R9IiwiY2xhc3MgTm9kZXtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbmV4dE5vZGU9bnVsbCl7XG4gICAgICAgIHRoaXMudmFsdWU9dmFsdWU7XG4gICAgICAgIHRoaXMubmV4dE5vZGU9bmV4dE5vZGU7XG4gICAgfVxufVxuXG5leHBvcnQge05vZGV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0xpbmtlZExpc3R9IGZyb20gXCIuL2xpbmtlZExpc3RcIjtcblxuY29uc3QgbGlzdD1uZXcgTGlua2VkTGlzdCgpO1xuXG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuXG5jb25zb2xlLmxvZyhsaXN0LnByZXBlbmQoMSkpO1xuY29uc29sZS5sb2cobGlzdC50b1N0cmluZygpKTtcbmNvbnNvbGUubG9nKGxpc3QuYXQoMCkpO1xuY29uc29sZS5sb2cobGlzdC5hdCgxKSk7XG5jb25zb2xlLmxvZyhsaXN0LnNpemUoKSk7XG5jb25zb2xlLmxvZyhsaXN0LmFwcGVuZCgyKSk7XG5jb25zb2xlLmxvZyhsaXN0LmFwcGVuZCgzKSk7XG5jb25zb2xlLmxvZyhsaXN0LmFwcGVuZCg0KSk7XG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuY29uc29sZS5sb2cobGlzdC5zaXplKCkpO1xuY29uc29sZS5sb2cobGlzdC5nZXRIZWFkKCkpO1xuY29uc29sZS5sb2cobGlzdC5nZXRUYWlsKCkpO1xuY29uc29sZS5sb2cobGlzdC5hdCgyKSk7XG5jb25zb2xlLmxvZyhsaXN0LnBvcCgpKTtcbmNvbnNvbGUubG9nKGxpc3Quc2l6ZSgpKTtcbmNvbnNvbGUubG9nKGxpc3QuY29udGFpbnMoMikpO1xuY29uc29sZS5sb2cobGlzdC5maW5kKDMpKTtcbmNvbnNvbGUubG9nKGxpc3QudG9TdHJpbmcoKSk7XG5saXN0Lmluc2VydEF0KDg4LCAyKTtcbmxpc3QuaW5zZXJ0QXQoNjYsMCk7XG5jb25zb2xlLmxvZyhsaXN0LnNpemUoKSk7XG5saXN0Lmluc2VydEF0KDU1LCA4KTtcbmNvbnNvbGUubG9nKGxpc3QudG9TdHJpbmcoKSk7XG5saXN0LnJlbW92ZUF0KDIpO1xuY29uc29sZS5sb2cobGlzdC50b1N0cmluZygpKTtcbmxpc3QucmVtb3ZlQXQoMCk7XG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuY29uc29sZS5sb2cobGlzdC5nZXRIZWFkKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==