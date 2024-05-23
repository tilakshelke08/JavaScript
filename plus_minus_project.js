// const contentvalue=document.querySelector("#content");
// const increment=()=>{
// let value =parseInt(contentvalue.innerText);
// value=value+1;
// contentvalue.innerText=value;
// };

// const decrement=()=>{
//   // get the value 
//   let value =parseInt(contentvalue.innerText);
//   // update the value
//   value=value-1;
//   // set the value 
//   contentvalue.innerText=value;
//   };


const contentvalue=document.querySelector("#content");

const increment=()=>{
let value =parseInt(contentvalue.innerText);
value=value+1;
contentvalue.innerText=value;
};
const decrement=()=>{
  let value=parseInt(contentvalue.innerText);
  value=value-1;
  contentvalue.innerText=value;
};