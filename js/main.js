window.onload = function(){

    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", createMenu);

    let cross = document.getElementById("cross");
    cross.addEventListener("click", closeMenu);

    document.getElementById("menu-option-one").addEventListener("click", closeMenuByOptionOne);
    document.getElementById("menu-option-two").addEventListener("click", closeMenuByOptionTwo);
    document.getElementById("menu-option-three").addEventListener("click", closeMenuByOptionThree);
    document.getElementById("menu-option-four").addEventListener("click", closeMenuByOptionFour);


}

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