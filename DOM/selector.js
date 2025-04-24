document.getElementById('paragraph').innerText = "hello";
document.querySelector('.box').innerHTML = "<h1>Hello</h1>";
document.querySelector('.box').innerHTML += "<h5>Hello</h5>"; // if you want to add multiple html you have use add operator "+=";
document.querySelector('.box').innerHTML += "<h5>Helldfg</h5>"; // if you want to add multiple html you have use add operator "+=";
let text = document.querySelectorAll('.box h5');
text[0].innerText = "asdsfdgdfsadfdgdsdfg";
text[1].innerText = "changed";


/*
What i learned from here:- 

    JavaScript follows camelCase;
    4 ways of select tag or node from html in js
        1. getElementById(' ');
        2. getElementByClass(' ');
        3.querySelector(' .div & #id');
        4.quertSelectorAll('.div & #id ,h1...');

    if you want to add multiple element into a single div you have to use "+= " operator.

    querySelectorAll()-> return nodeList type and it is static.

    For live updates, you would use getElementsBy* methods (like getElementsByClassName), but those return a live NodeList (which updates as the DOM changes).
    
*/