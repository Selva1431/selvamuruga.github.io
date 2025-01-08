const Days=document.querySelector("#day");
const hours=document.querySelector("#hours");
const mintues=document.querySelector("#mintues");
const seconds=document.querySelector("#seconds");
function UpdateTime(){
    const currentYear = new Date().getFullYear;
    const newyear=new Date(`january 15 ${currentYear+1} 00:00:00`);
    const currentDate=new Date();
    const diff=newyear-currentDate;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
 
 Days.innerHTML= d ;
 hours.innerHTML= h ;
 mintues.innerHTML=m ;
 seconds.innerHTML= s;

}