window.onload = function(){

    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", createMenu);

    let cross = document.getElementById("cross");
    cross.addEventListener("click", closeMenu);

    document.getElementById("menu-option-one").addEventListener("click", closeMenuByOptionOne);
    document.getElementById("menu-option-two").addEventListener("click", closeMenuByOptionTwo);
    document.getElementById("menu-option-three").addEventListener("click", closeMenuByOptionThree);
    document.getElementById("menu-option-four").addEventListener("click", closeMenuByOptionFour);

    let addButton = document.getElementById("addButton");
    addButton.addEventListener("click", createElementInToDo);
}

let listNumber = 0;
let toDoList = [];
let numbersOfClick = 0;


function createMenu(){
    document.getElementById("hamburger-wrapper").style.display = "block";
}

function closeMenu(){
    document.getElementById("hamburger-wrapper").style.display = "none";
}

function closeMenuByOptionOne(){
    document.getElementById("hamburger-wrapper").style.display = "none";
}

function closeMenuByOptionTwo(){
    document.getElementById("hamburger-wrapper").style.display = "none";
}

function closeMenuByOptionThree(){
    document.getElementById("hamburger-wrapper").style.display = "none";
}

function closeMenuByOptionFour(){
    document.getElementById("hamburger-wrapper").style.display = "none";
}

function  createElementInToDo(){

    if (addToList.value === ""){
        alert("Du måste skriva in något i rutan!")
    }
    else{

        let addToList = document.getElementById("addToList");
        let ulList = document.getElementById("to-do-list");

        toDoList.push(addToList.value);

        let createElement = document.createElement("li"); 

        for (let i = 0; i < toDoList.length; i++) {
            createElement.id = "list-active";
            createElement.className = "class";
            createElement.innerHTML = addToList.value;
            ulList.appendChild(createElement);        
        }

        document.getElementById("addToList").value = "";
        console.log(toDoList);

        document.querySelectorAll(".class").forEach(items => {
        items.addEventListener("click", changeBetweenActiveDisabled)})
    }
}

function changeBetweenActiveDisabled(ev){
    ev.target.classList.toggle("list-disabled");                 
}


