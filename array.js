let marks=[85,97,44,37,76,60];
let sum=0;
let avg;
//for of loop
for(let val of marks){

//sum  
  sum=sum+val;
  //avg
  avg=sum/marks.length;
}
console.log(marks);
console.log(sum);
console.log(avg);