// id represented by {#}
// by id 
let row=document.getElementById("Headings");
console.log(row);
console.dir(row);

let row1=document.getElementById("headings2");
console.log(row1);
console.dir(row1);
 // class reprented by dot(.)
// by class
let row3=document.getElementsByClassName("Headings");
console.log(row3);
console.dir(row3);

let row4=document.getElementsByClassName("headings2");
console.log(row4);
console.dir(row4);

// by tag 
let row5=document.getElementsByTagName("p");
console.log(row5);
console.dir(row5);

let row6=document.getElementsByTagName("p1");
console.log(row6);
console.dir(row6);

//by query selector for single tag
let row7=document.querySelector("p1");
console.log(row7);
console.dir(row7);

//by query selector for all tag

let row8=document.querySelectorAll("p1");
console.log(row8);
console.dir(row8);