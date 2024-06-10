let a=92.999;
let b=25;

// //ceil
// const result = Math.ceil(a);

// //pow
// const result = Math.pow(b,2);

//floor
let result = Math.floor(a);
//console.log(result);
var id = Math.floor(Math.random()*100+1);
//console.log(id.toFixed(0));
console.log(id);

var Array = [10,500,45,90];
const result1 = Math.max(...Array);
console.log(result1);
console.log(a.toFixed(2)); //toFixed កំណត់ចំនួនខាងក្រោយខ្បៀស

 //(...) spread operator in javascript: 
 // 1. combining array
 let A1 = [20,30,40];
 let A2 = [30,400,60];
 let A3 = [...A1,...A2];
 console.log(A3);

//2. passing Arguement
function Num(x,y){
    return x*y;
}
    //console.log(Num(30,40)); 
let A4 = [20,30];
console.log(Num(...A4));

//3. Add Array
let Array1 = [...A4,20,...A2];
console.log(Array1);


