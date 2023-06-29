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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHVDQUFJO0FBQ2pEO0FBQ0EsMEJBQTBCLHVDQUFJO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qix1Q0FBSTtBQUNsQztBQUNBO0FBQ0EsMEJBQTBCLHVDQUFJO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRXhDLGVBQWUsbURBQVU7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1saW5rZWQtbGlzdHMvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly90b3AtbGlua2VkLWxpc3RzLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vdG9wLWxpbmtlZC1saXN0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtbGlua2VkLWxpc3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtbGlua2VkLWxpc3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLWxpbmtlZC1saXN0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1saW5rZWQtbGlzdHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcblxuY2xhc3MgTGlua2VkTGlzdHtcbiAgICBjb25zdHJ1Y3RvcihsaXN0SGVhZCl7XG4gICAgICAgIHRoaXMubGlzdEhlYWQ9IGxpc3RIZWFkO1xuICAgIH1cblxuICAgIGFwcGVuZCh2YWx1ZSl7XG4gICAgICAgIGlmKCF0aGlzLmxpc3RIZWFkKSB0aGlzLmxpc3RIZWFkPW5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgbGV0IHRhaWw9dGhpcy5nZXRUYWlsKCk7XG4gICAgICAgIHRhaWwubmV4dE5vZGU9bmV3IE5vZGUodmFsdWUpO1xuICAgICAgICByZXR1cm4gdGFpbDtcbiAgICB9XG5cbiAgICBwcmVwZW5kKHZhbHVlKXtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RIZWFkKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RIZWFkPW5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzfVxuICAgICAgICBsZXQgdGVtcD10aGlzLmxpc3RIZWFkO1xuICAgICAgICB0aGlzLmxpc3RIZWFkPW5ldyBOb2RlKHZhbHVlLHRlbXApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzaXplKCl7XG4gICAgICAgIGxldCBjb3VudD0wO1xuICAgICAgICBsZXQgY3VycmVudE5vZGU9IHRoaXMubGlzdEhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZT1jdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuXG4gICAgZ2V0SGVhZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0SGVhZDtcbiAgICB9XG4gICAgXG4gICAgZ2V0VGFpbCgpe1xuICAgICAgICBpZiAoIXRoaXMubGlzdEhlYWQpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgdGFpbD10aGlzLmxpc3RIZWFkO1xuICAgICAgICB3aGlsZSAodGFpbC5uZXh0Tm9kZSAhPT0gbnVsbCkgdGFpbD10YWlsLm5leHROb2RlO1xuICAgICAgICByZXR1cm4gdGFpbDtcbiAgICB9XG5cbiAgICBhdChpbmRleCl7XG4gICAgICAgIGxldCBjb3VudD0wO1xuICAgICAgICBsZXQgY3VycmVudE5vZGU9dGhpcy5saXN0SGVhZDtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChjb3VudDxpbmRleCl7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZT1jdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH1cblxuICAgIHBvcCgpe1xuICAgICAgICBpZiAoIXRoaXMubGlzdEhlYWQpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgdGFpbD10aGlzLmdldFRhaWwoKTtcblxuICAgICAgICBsZXQgbGlzdFNpemU9dGhpcy5zaXplKCk7XG4gICAgICAgIGxldCBiZWZvcmVMYXN0PXRoaXMuYXQobGlzdFNpemUtMik7XG4gICAgICAgIGJlZm9yZUxhc3QubmV4dE5vZGU9bnVsbDtcblxuICAgICAgICByZXR1cm4gdGFpbDtcbiAgICB9XG5cbiAgICBjb250YWlucyh2YWx1ZSl7XG4gICAgICAgIGlmICghdGhpcy5saXN0SGVhZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgY3VycmVudE5vZGU9dGhpcy5saXN0SGVhZDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLm5leHROb2RlICE9IG51bGwpe1xuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZT1jdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmluZCh2YWx1ZSl7XG4gICAgICAgIGxldCBpbmRleD0wO1xuICAgICAgICBsZXQgY3VycmVudE5vZGU9dGhpcy5saXN0SGVhZDtcbiAgICAgICAgd2hpbGUoY3VycmVudE5vZGUgIT0gbnVsbCl7XG4gICAgICAgICAgICBpZihjdXJyZW50Tm9kZS52YWx1ZSA9PT0gdmFsdWUpIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlPWN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgaW5kZXggKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKXtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RIZWFkKSByZXR1cm4gJ2xpc3QgZW1wdHknO1xuICAgICAgICBsZXQgc3RyaW5nPScnO1xuICAgICAgICBsZXQgY3VycmVudE5vZGU9dGhpcy5saXN0SGVhZDtcbiAgICAgICAgZG97XG4gICAgICAgICAgICBzdHJpbmc9c3RyaW5nLmNvbmNhdChgKCR7Y3VycmVudE5vZGUudmFsdWV9KSAtPiBgKTtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlPWN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICB9IHdoaWxlIChjdXJyZW50Tm9kZSAhPSBudWxsKTtcbiAgICAgICAgc3RyaW5nPXN0cmluZy5jb25jYXQoJ251bGwnKTtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG59XG5cbmV4cG9ydCB7TGlua2VkTGlzdH0iLCJjbGFzcyBOb2Rle1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBuZXh0Tm9kZT1udWxsKXtcbiAgICAgICAgdGhpcy52YWx1ZT12YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0Tm9kZT1uZXh0Tm9kZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Tm9kZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7TGlua2VkTGlzdH0gZnJvbSBcIi4vbGlua2VkTGlzdFwiO1xuXG5jb25zdCBsaXN0PW5ldyBMaW5rZWRMaXN0KCk7XG5cbmNvbnNvbGUubG9nKGxpc3QudG9TdHJpbmcoKSk7XG5cbmNvbnNvbGUubG9nKGxpc3QucHJlcGVuZCgxKSk7XG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuY29uc29sZS5sb2cobGlzdC5hdCgwKSk7XG5jb25zb2xlLmxvZyhsaXN0LmF0KDEpKTtcbmNvbnNvbGUubG9nKGxpc3Quc2l6ZSgpKTtcbmNvbnNvbGUubG9nKGxpc3QuYXBwZW5kKDIpKTtcbmNvbnNvbGUubG9nKGxpc3QuYXBwZW5kKDMpKTtcbmNvbnNvbGUubG9nKGxpc3QuYXBwZW5kKDQpKTtcbmNvbnNvbGUubG9nKGxpc3QudG9TdHJpbmcoKSk7XG5jb25zb2xlLmxvZyhsaXN0LnNpemUoKSk7XG5jb25zb2xlLmxvZyhsaXN0LmdldEhlYWQoKSk7XG5jb25zb2xlLmxvZyhsaXN0LmdldFRhaWwoKSk7XG5jb25zb2xlLmxvZyhsaXN0LmF0KDIpKTtcbmNvbnNvbGUubG9nKGxpc3QucG9wKCkpO1xuY29uc29sZS5sb2cobGlzdC5zaXplKCkpO1xuY29uc29sZS5sb2cobGlzdC5jb250YWlucygyKSk7XG5jb25zb2xlLmxvZyhsaXN0LmZpbmQoMykpO1xuY29uc29sZS5sb2cobGlzdC50b1N0cmluZygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=