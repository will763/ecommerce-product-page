

export function ShowCartItems(state:boolean) {
      const b = document.querySelector<HTMLDivElement>(".img-cart");
      const w =  document.querySelector<HTMLDivElement>(".store-cart");
      
      if(b && w) state ? w.classList.add("show-cart") : w.classList.remove("show-cart");
            
      }
