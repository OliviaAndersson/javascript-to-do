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

    let sortToDoButton = document.getElementById("sort-todo-list");
    sortToDoButton.addEventListener("click", sortToDoList);

    // let sortDoneButton = document.getElementById("sort-done-list");
    // sortDoneButton.addEventListener("click", sortDoneList);

    let deleteButton = document.getElementById("deleteList");
    deleteButton.addEventListener("click", deleteList);

    document.querySelectorAll(".class").forEach(items => {
        items.addEventListener("click", toDoToDone)})

    document.querySelectorAll(".list-disabled").forEach(items => {
        items.addEventListener("click", doneToToDo)})
   
}

let toDoList = ["Träna", "Städa", "Laga mat"];
// let toDoList = [];
let doneList = ["Tanka bilen"];
let listNumber = 0;

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

    //Pushar input-värdet till toDo-listan, om man inte skriver in något 
    //värde kommer ett alert upp
    
    if (addToList.value === ""){
        alert("Du måste skriva in något i rutan!")
    }
    else{
        let addToList = document.getElementById("addToList");
        toDoList.push(addToList.value);

        document.getElementById("addToList").value = "";

        console.log(toDoList);

        createToDoElements();
    }
    

}

function createToDoElements(){

    //Skapar en lista i HTML
    let ulList = document.getElementById("to-do-list");

    let createElement = document.createElement("li");

    for (let i = 0; i < toDoList.length; i++) {

        createElement.id = "list-active";
        createElement.className = "class";
        createElement.innerHTML = toDoList[i];

        ulList.appendChild(createElement);    
    }
}

function toDoToDone(e){
    //Raderar från HTML-sidan
    let removeElement = e.target;
    removeElement.parentNode.removeChild(removeElement);
    
    //Raderar från listan
    let index = toDoList.indexOf(e.target.innerHTML);
    if (index > -1) {
        toDoList.splice(index, 1);
    }

    //Pusha från TO-DO till avklarad-listan       
    let ulDoneList = document.getElementById("done-list");

    doneList.push(e.target.innerHTML);

    console.log("Done-list: " + doneList);

     //Skapa HTML i done-listan   
    let createDeletedElement = document.createElement("li");

    for (let i = 0; i < doneList.length; i++) {
        createDeletedElement.className = "list-disabled";
        createDeletedElement.innerHTML = e.target.innerHTML;    
        
        ulDoneList.appendChild(createDeletedElement);    
    }

    //Nu blir den klickbar & vid klick triggas funktionen doneToToDo
    document.querySelectorAll(".list-disabled").forEach(items => {
    items.addEventListener("click", doneToToDo)})
   
}

function doneToToDo(e){

    //Raderar från HTML-sidan
    let removeElement = e.target;
    removeElement.parentNode.removeChild(removeElement);

    //Raderar från listan
    let findIndex = doneList.indexOf(e.target.innerHTML);
    if (findIndex > -1) {
        doneList.splice(findIndex, 1);
     }

    //Pushar värdet från doneList till toDoList
    toDoList.push(e.target.innerHTML);

    createToDoElements(e);
}

function sortToDoList(){
    
    //Tar bort den förgående HTML-listan 
    let listContainer = document.getElementById("to-do-list");

    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    //Sorterar listan efter bokstavsordning
    //Fungerar även vid blandning av små och stora tecken
    //sv + {sensitivity: "case"} gör att även åäö fungerar, innan sorterades ä som a osv. 
    toDoList = toDoList.sort( (a, b) => a.localeCompare(b, 'sv', {sensitivity: "case"}));
    console.log(toDoList);
    
    //Tillverkar en ny lista med sorterade element:
    let ulList = document.getElementById("to-do-list");

    for (let i = 0; i < toDoList.length; i++) {
        let createElement = document.createElement("li");

        createElement.id = "list-active";
        createElement.className = "class";
        createElement.innerHTML = toDoList[i];

        ulList.appendChild(createElement);    
    }

    //Nu blir den klickbar & vid klick triggas funktionen toDotoDone
    document.querySelectorAll(".class").forEach(items => {
        items.addEventListener("click", toDoToDone)})


}

function deleteList(){

    //Skapar en delete-lista
    let deleteList = document.getElementById("done-list");

    //Raderar alla element i HTML-listan
    while (deleteList.firstChild) {
        deleteList.removeChild(deleteList.firstChild);
    }
    
    //Tömmer listan: doneList
    for (let i = 0; i < doneList.length; i++) {
        doneList.pop();
        console.log(doneList);
        
    }

    //Nu blir den klickbar & vid klick triggas funktionen toDotoDone
    document.querySelectorAll(".class").forEach(items => {
        items.addEventListener("click", toDoToDone)})

}
