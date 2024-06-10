// let Stuname = ["net","nit","nu"];
// //push mean insert
// Stuname.push("na");
// Stuname.push("na");
// console.log(Stuname);


// var obj =
// [
//     {id:1001,Name:"Net",School:"RUPP"},
//     {id:1002,Name:"Nit",School:"RUPP"}
// ]
// console.table(obj);

// //mathod map(Call back Function)
// var obj =
// [
//     {id:1001,Name:"Net",School:"RUPP"},
//     {id:1002,Name:"Nit",School:"RUPP"}
// ]
// var id= obj.map((e)=>e.id);
// var Name= obj.map((e)=>e.Name);
// var School= obj.map((e)=>e.School);
// console.log(Name);


// //method Filter(Deplicate Function)
// var obj =
// [
//     {id:1001,Name:"Net",School:"RUPP"},
//     {id:1002,Name:"Nit",School:"RUPP"}
// ]
// var resultName=obj.filter((e)=>e);
// console.log(resultName);


// var obj =
// [
//     {id:1001,Name:"Net",School:"RUPP"},
//     {id:1002,Name:"Nit",School:"RUPP"},
//     {id:9,Name:"Nit",School:"RUPP"}
// ]
// var resultMap=obj.map((e)=>e);
// var resultName=obj.filter((e)=>e.id<=1001).map((e)=>e);
// console.log(resultName);


//Method pop(Remove the last element)
var obj =
[
    {id:1001,Name:"Net",School:"RUPP"},
    {id:1002,Name:"Nit",School:"RUPP"},
    {id:9,Name:"Nu",School:"RUPP"}
]
obj.pop();
console.log(obj);