/*
function openClose() {
    var element = document.getElementById("dropdown");
    var open = document.getElementById("down-hide");
    
    if (open.classList == "down-hide"){
        open.classList.add("down");
        open.classList.remove("down-hide");
    } else {
        
        if (open.classList == "down"){
        open.classList.add("down-hide");
        open.classList.remove("down");
        }
    }
}
*/

function openClose() {
    var element = document.getElementById("down");  
    var dropdrown = document.getElementById("dropdown")  

    if (element.classList == "down"){
        element.classList.add("down-hide");
        element.classList.remove("down");
        dropdrown.classList.remove("dropdown-rotate");
    } else {
        if (element.classList == "down-hide"){
            element.classList.add("down");
            element.classList.remove("down-hide");
            dropdrown.classList.add("dropdown-rotate");
        }
        }
    }

function hamburguer(){
    var hamburguer = document.getElementById("menu-itens")
    
    if (hamburguer.classList == "menu-itens"){
        hamburguer.classList.remove("menu-itens")
        hamburguer.classList.add("menu-itens-hide")
    } else {
        if (hamburguer.classList == "menu-itens-hide"){
            hamburguer.classList.remove("menu-itens-hide")
            hamburguer.classList.add("menu-itens")
        }
    }
    
}

