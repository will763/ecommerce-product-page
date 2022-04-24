
export function scrollCarousel() {

    const wrapper = document.querySelector<HTMLDivElement>(".wrapper");
    const next = document.querySelector<HTMLButtonElement>(".next");
    const prev = document.querySelector<HTMLButtonElement>(".prev");


    next?.addEventListener("click",event =>{
        if(wrapper){
            const offsetX = wrapper.offsetWidth;
            wrapper.scrollBy(offsetX,0)
        }
       
    })

    prev?.addEventListener("click",event =>{
        if(wrapper){
            const offsetX = wrapper.offsetWidth;
            const offX = Number(`-${offsetX}`)
            wrapper.scrollBy(offX,0)
        }
       
    })

}