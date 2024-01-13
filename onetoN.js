// start n th number sum 
let num=prompt("enter the num :-");
 let arr=[];

 for(let i=1;i<=num;i++){
  arr[i-1]=i;
 }
 console.log(arr);

 //applying reduce meethod for addition 

let result=arr.reduce((prev,curr)=>{
  return prev+curr;

})
console.log("the sum is :-"+result);

//for multiplication 1st to n i.e factorial 

let mul=arr.reduce((prev,curr)=>{
return prev*curr;
})
console.log("the product is :-"+mul);