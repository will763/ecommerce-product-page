import Menu from "/assets/images/icon-menu.svg"
import Logo from "/assets/images/logo.svg"
import Avatar from "/assets/images/image-avatar.png"
import Cart from "/assets/images/icon-cart.svg"
import { HeaderStyle } from "../styles/header"
import { useEffect, useState } from "react"
import { Switch } from "../utils/switchMenu"
import StoreItem from "./storeItem"
import { ShowCartItems } from "../utils/showCart"
import NoItems from "./noItemsCart"
import { useSelectAllItems } from "../store/Hooks/SelectAllItems"

function Header() {

   const [active,setActive] = useState<boolean>(false);
   const [showCart,setShowCart] = useState<boolean>(false)
   const items = useSelectAllItems();

    useEffect(()=>{
      Switch(active);
    },[active])

    useEffect(()=>{
      ShowCartItems(showCart);
    },[showCart])

    return (
        <HeaderStyle isActive={active} showCart={showCart} >
            <div className="container-menu-logo">
               <div className="icon-menu" onClick={() => setActive(!active)}>
                  <img className="icon" src={Menu} alt="icon menu" />
                  <div className="menu-items">
                     <a href="#">Collections</a>
                     <a href="#">Men</a>
                     <a href="#">Women</a>
                     <a href="#">About</a>
                     <a href="#">Contact</a>
                  </div>
               </div>
               <div className="icon-logo">
                  <img src={Logo} alt="icon logo" />
               </div>
            </div>
            <div className="container-cart-avatar">
               <div className="icon-cart">
                  <div className="container-icon">
                    <img className="img-cart" src={Cart} alt="icon cart" onClick={() => setShowCart(!showCart)} />
                    {items.length > 0 && <span className="notifications">{items.length}</span> }
                  </div>
                  <div className="store-cart">
                      <h5>Cart</h5>
                      <div className="show-cart">
                        {items.length <= 0 ? <NoItems />
                          : items.map((value,index)=> {
                             return <StoreItem key={index} idx={index} counter={value.pcr} total={value.total} />
                          })      
                        }
                      </div>
                  </div>
               </div>
               <div className="icon-avatar">
                  <img src={Avatar} alt="image avatar" />
               </div>
            </div>

        </HeaderStyle>
    )
}

export default Header