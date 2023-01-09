var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tab_link_name){
    for(let tablink of tabLinks){
        tablink.classList.remove("bottom-line");
    }

    for(let tabcontent of tabContents){
        tabcontent.classList.remove("tabContent_displayBlock");
    }

    event.currentTarget.classList.add("bottom-line");
    document.getElementById(tab_link_name).classList.add("tabContent_displayBlock");
}


// for hamburger effect by me------------------------------------

// let sideMenu = document.querySelector("#sideMenu");
// let openMenu = document.querySelector(".fa-bars");
// let closeMenu = document.querySelector(".fa-xmark");

// openMenu.addEventListener("click", ()=>{
//     sideMenu.style.right = "0";
// })

// closeMenu.addEventListener("click", ()=>{
//     sideMenu.style.right = "-200px";
// })


// this is by onclick method

let sideMenu = document.querySelector("#sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}

