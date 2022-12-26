"use strict";
console.log('chtoo-to');

//21 leetcode
// ? example with iterator/ chapter 6
// ? by generators?
var mergeTwoLists = function(list1, list2) {
    let resultList = {};
    function nextElement() {
        let cur = {};
        while ((list1.next !== null)&&(list2.next !== null)) {
            if (list1.val > list2.val) {
            // result.next.val = list2.val;
            cur.val = list2.val;
            list2 = list2.next;
            } else {
                cur.val = list1.val;
                list1 = list1.next;
            }
            resultList.next = resultList;
            // resultList.next = mergeTwoLists(list1, list2);
        }
        if (list1.next === null) {
            cur.val = list1.val;
            cur.next = list2;
        } else {
            cur.val = list2.val;
            cur.next = list1;
        } 
        return cur;
    }

    resultList = nextElement();

    return resultList;
};

let list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};
let list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};
/* let node = {};
function makingNode(nodee) {
    nodee.val = 1;
    nodee.next = null;
    return nodee;
};
node = makingNode(node); */
// console.log(node);
// console.log(mergeTwoLists(list1, list2));

// !!! ZADACHA  elst node list - v obratnom poryadke sdelat ego

let list3 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4, 
                next: null
            }
        }
    }
};

console.dir(list3, { depth: null });
function deleteLastNode(list) {
    let copy = list;
    while(list.next !== null) {
        if (list.next.next === null) {
            list.next === null;
        }
        list = list.next;
    }
    return copy;
}
console.log('deleting last one');
console.dir(deleteLastNode(list3), {depth: null});
console.dir(list3, {depth: null});
// сделать в обратном порядке
//посмотрю=еть готовые решения, если не получится

function reverseList(list) {
    let output = {};
    let listCopy = list;
    function rev(list) {
        output.val = list.val;
        // output.next = list;
        if (list.val == 1) {
            output.next = null;
        }
        if (list.next !== null) {
        }
            let newNode = {};
            newNode.val = list.val;
            newNode.next = output;
        return newNode;
    }
    while (list.next !== null) {
        rev(listCopy);
    }
    // return 
    return output;
}

function reverseList2(list) {
    let output = {};
    function rev(nodes) {
        let obj = {};
        if (nodes.next !== null) {
            nodes = nodes.next;
            output.next = rev(nodes);
            output.val = nodes.val;
        }else {
            /* output.val = nodes.val;
            output.next = null; */
            obj.val = nodes.val;
            obj.next = null;
        }
        /* output.next = output;
        output.val = nodes.val; */
        // output.next = output;
        return obj;
    }
    rev(list);
    return output;
}
    /* class ListNode {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class LinkedList {
        constructor(head = null) {
            this.head = head;
        }
    }
    let node1 = new ListNode(2);
    let node2 = new ListNode(3);
    node1.next = node2;
    let lisst = new LinkedList(node1); */
    console.log('changed version:');
    console.dir(reverseList2(list3), {depth: null});
    
    /* function counter(n) {
        return {
            get count() { return n++ },
        set count(m) { 
            if (m > n) n = m;
            else throw Error('счетчик можно устанавливать только большее значение');
        }
    };
}

let c = counter(1000);
console.log(c.count);
console.log(c.count);
c.count = 1129;
console.log(c.count);
console.log(c.count);

function addPrivateProperty(o, name, predicate) {
    let value;

    o[`get${name}`] = function() {return value; };

    o[`set${name}`] = function(v) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: недопустимое значение ${v}`)
    } else {
        value = v;
    }
};
}
let o = {};
addPrivateProperty(o, "Name", x => typeof x === "string");

o.setName("Frank");
console.log(o.getName());
o.setName(0); */
let a = {
    name: 'andrey'
};
let b = {
    name: 'vova'
}
let c = a;
/* console.log('two objects:');
console.log('object a:', a);
console.log('object b:', b);
console.log('object c like a:', c);
console.log('changing a object');
a = {
    name: 'avgust'
};
console.log('object a:', a);
console.log('object c like a?:', c); */

var generate = function(numRows) {
    let out = [];
    // function buildRow();
    let rowArray = [1];
    let currentRow = 0;
    let row = [];
    if ( numRows > 0 ) {
        out.push(rowArray);
    }
    function getEl(array, index) {
        if ((array[index] === undefined)||(index < 0)) {
            return 0;
        }else return array[index];
    }
    while( currentRow < numRows ) {
        row = [];
        // currentRow++;
        for(let i = 0; i <= currentRow; i++) {
            row[i] = getEl(rowArray, i) + getEl(rowArray, i-1);
        }
        out[currentRow++] = row;
        rowArray = row;
    }
    /*else {
        generate(numRows-1);
    }
     */
    // rowArray.push(1);
    return out;
};
// console.log(generate(6));
// console.log([0, 2, 3][1]);