// Global Execution Context
var globalVar = "I am a global variable";
var value=20;
var add=value+value;

function outerFunction() {
    // Function Execution Context for outerFunction
    var outerVar = "I am an outer variable";
    
        
    
    function innerFunction() {
        // Function Execution Context for innerFunction
        var innerVar = "I am an inner variable";
        let functionscope = " I am a function variable";
        console.log(globalVar); // Accessible
        console.log(outerVar);  // Accessible
        console.log(innerVar);  // Accessible
    }

    innerFunction();
}

outerFunction();

/*
Global Execution context:

1.creation phase:

2.execution phase:

creation phase:

 1.lexical Environment  2.variable Environment
                           
1.lexical Environment

Environment Record:

1. decalartive and object;

var globalVar = undefined

var outerVar = undefined

var value = undefined

 innerVar = undifined; 

 type = object

outer = outerFunction()
inner= innerFunction
}
outer = null;

thisBinding": Window {...}  // 'this' refers to the global window object
}

2.variable Environment

Environment Record:{
tpe:declaravtive
var add = UnDefined
}
outer = null;
thisBinding": Window {...}  // 'this' refers to the global window object
}

*/
/*

Function execution context

1.lexical Environment 2.variable Environment

Lexical Environment{

Environment Record:{
type=object
 outerFunction = outFunction(){
}

outer =GCE ;

thisBinding":outerfunction()
}
Lexical Environment{
Environment Record:{
type:decalarative
functionscope : Undefined;
}

outer =outerFunction ;

thisBinding":innerfunction()

*/
/* 
EXECUTION PHASE

Global Execution Context

1.Lexical Environment 2.Variable Environment

1.Lexical Environment{
Environment Record{
type: decalartive 

var globalVar ="I am a global variable";

var outerVar =  "I am an outer variable";

var value = 20;

 innerVar = "I am an inner variable";; 
 type: object
outer = outer function()
 
inner= inner Function(){
}
outer = null;

thisBinding": Window {...}  // 'this' refers to the global window object
}

2.variable Environment

Environment Record:{

type:decalartive 

var add = Value+value;

outerFunction = outerFunction(){
}

outer = null;

thisBinding": Window {...}  // 'this' refers to the global window object
}
*/
/*
Function Execution Context 

1.lexical Environment 2.variable Environment

Lexical Environment{

Environment Record{
type:decalaravtive
 outerFunction = outFunction(){}
{

outer =GCE ;

thisBinding":outerfunction()

Environment Record:

let functionscope = " I am a function variable";
{
outer =outerFunction ;
thisBinding":innerfunction()
 */