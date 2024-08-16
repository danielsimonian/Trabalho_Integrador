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