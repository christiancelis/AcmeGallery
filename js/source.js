
const btn = document.getElementById("hbg-btn");

btn.addEventListener("click",(e)=>{
    
    const menu = document.getElementById("menu-contextual");

    if(menu.classList.contains("disabled")){
        menu.classList.remove("disabled");
        menu.classList.add("enabled");
    }else{
        menu.classList.remove("enabled");
        menu.classList.add("disabled");
    }
    
    e.stopPropagation();
    e.preventDefault();
    
})