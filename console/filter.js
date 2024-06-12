let Array =[
    {Name:"Nith",Age:16,Sex:"Male"},
    {Name:"Nu",Age:12,Sex:"Female"},
    {Name:"Na",Age:7,Sex:"Female"},
    {Name:"Net",Age:20,Sex:"Female"},
    {Name:"Khim",Age:40,Sex:"Female"},
    {Name:"Thy",Age:43,Sex:"Male"}
];
let result =Array.filter((ev)=>ev.Age>=18 && ev.Sex=="Male").map((ev)=>ev);
console.log(result);