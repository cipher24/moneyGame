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

// сделать в обратном порядке
//посмотрю=еть готовые решения, если не получится

function reverseList(list) {
    let output = {};
    let listCopy = list;
    while(list.next !== null) {
        list = list.next;
    }    
    output.val = list.val;
    output.next = null;
    function rev(listCopy) {
        if () {
            
        }
    }
    return list;
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
    console.dir(reverseList(list3), {depth: null});
    
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
