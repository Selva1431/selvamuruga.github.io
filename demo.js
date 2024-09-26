console.log("task1")

console.log("task 2")

console.log("task3")

setTimeout(() => console.log("hello"), 2000); 
/* variable */
var a;
var b;
var c;
var d;
function functionscope() {
    a=10;
    b=20;
    c=30;
    d=null;

    console.log(a)
    console.log(b)
    console.log(c+b)
    console.log(d)
}

functionscope();
/* let */
 let name="selva";  
 let age="20";
 let education="bsc"

 console.log("20")
 console.log("selva")
 console.log("bsc")

 age="30";
 console.log(age)
 /* const */

 const fruits = ["Apple", "Banana", "Mango"]
 console.log(fruits);




