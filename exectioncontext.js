let coder =  "i am a coder";

function outerFunction() {
    
    let content = " i am a exnternal coder";


    console.log(coder);
    console.log(content);
   
}

outerFunction();

//creation phase 
/* 
globalExectioncontext ={
lexicalEnvironment:{
EnvironmentRecord:{
type:object
coder:undefined;
    function outerfunction(){....}
}
  outer:"null"
  this:"window object"
}
  //execution phase
}
globalExectioncontext ={
lexicalEnvironment:{
EnvironmentRecord:{
type:object
coder:"i am a coder"
function outerfunction(){....}
}
  outer:"null"
  this:"window object"
}


//CREATION PHASE 

FunctionExecutioncontext{
lexicalEnvironment:{
environmentrecord:{
type:object
content:undefined

}
outer:"gse"
this:outerFunction()
}

}
//CREATION PHASE
FunctionExecutioncontext{
lexicalEnvironment:{
environmentrecord:{
type:object
content:" i am a exnternal coder"

}
outer:"gse"
this:outerFunction()
*/