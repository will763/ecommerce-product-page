import { items } from "./itemsProducts";

export function Select(){
    
    const n = document.querySelectorAll(".thumbnail");
    const m = document.querySelector(".product-logo");

    n.forEach((el,idx)=>{
        el.addEventListener("click",(e)=>{
            if(m){m.setAttribute("src",items[idx])}
            
        })
        
    })
}