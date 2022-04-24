import Menu from "/assets/images/icon-menu.svg"
import Close from "/assets/images/icon-close.svg"


export function Switch(active:boolean) {
    const icon = document.querySelector(".icon");
    const menu = document.querySelector<HTMLDivElement>(".menu-items");
    if(active && menu){
        menu.classList.add("show")
        icon?.setAttribute("src",Close)
    } else if (!active && menu) {
        icon?.setAttribute("src",Menu)
        menu.classList.remove("show")
    }
}