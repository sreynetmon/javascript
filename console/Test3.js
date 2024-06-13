    document.write("<h1>Hello JavaScript</h1>");
    let id,name,sex,school,cshap,web,ooAD,total;
    id = prompt("Input ID:❤️");
    name = prompt("Input Name:❤️");
    sex = prompt("Input sex:❤️");
    school = prompt("Input School:❤️");
    cshap =parseFloat(prompt("Input Cshap:❤️")) ;
    web = parseFloat(prompt("Input Web:❤️"));
    ooAD = parseFloat(prompt("Input ooAD:❤️"));
    total = cshap+web+ooAD;


    document.write(`<h2>ID is: ${id}</h2>`);
    document.write(`<h2>My Name is: ${name}</h2>`);
    document.write(`<h2>Sex: ${sex}</h2>`);
    document.write(`<h2>My School: ${school}</h2>`);
    document.write(`<h2>Cshap: ${cshap}</h2>`);
    document.write(`<h2>Web: ${web}</h2>`);
    document.write(`<h2>ooAD: ${ooAD}</h2>`);
    document.write(`<h2>Total : ${total}</h2>`);