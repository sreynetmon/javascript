let options = document.getElementById("options_flag");
function changFlag(){
    let name;
    let pic;
    if(options.value === "Cambodia"){
        name = "Cambodia";
        document.querySelector(".name").innerHTML = name;
        document.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/640px-Flag_of_Cambodia.svg.png";
    }else if(options.value === "Canada"){
        name = "Canada";
        document.querySelector(".name").innerHTML = name;
        document.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg";
    }
    else if(options.value === "China"){
        name = "China";
        document.querySelector(".name").innerHTML = name;
        document.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png";
    }
    else if(options.value === "Korea"){
        name = "Korea";
        document.querySelector(".name").innerHTML = name;
        document.querySelector("img").src = "https://asiasociety.org/sites/default/files/styles/1200w/public/K/korean-flag.jpg";
    }
    else if(options.value === "Thailand"){
        name = "Thailand";
        document.querySelector(".name").innerHTML = name;
        document.querySelector("img").src = "https://img.freepik.com/free-vector/illustration-thailand-flag_53876-27145.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=ais_user";
    }
    else if(options.value === "Vietnam"){
        name = "Vietnam";
        document.querySelector(".name").innerHTML = name;
        document.querySelector("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF-Ly3Re3LxcOi4Bz61Rqj9iR2_DAX4EanQ&s";
    }
}
console.log(changFlag());