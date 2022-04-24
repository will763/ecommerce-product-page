
export default function(){
    const container = document.querySelectorAll(".container-thumbnail")
        container[0].classList.add("selected");

        container.forEach((el)=>{
            el.addEventListener("click",()=>{
                for(let el of container) {
                    if(el.classList.contains("selected")){
                        el.classList.remove("selected")
                    }
                }

                el.classList.add("selected")
            })
        })
}