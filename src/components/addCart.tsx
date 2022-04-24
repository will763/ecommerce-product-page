import { useEffect, useState } from "react"
import { AddCartStyle } from "../styles/addCart"
import Cart from "/assets/images/icon-cart.svg"
import Minus from "/assets/images/icon-minus.svg"
import Plus from "/assets/images/icon-plus.svg"
import { useDispatch } from 'react-redux'
import { Add } from "../store/items.actions"

function AddCart() {

   const [counter,setCounter] = useState<number>(0)
   const dispatch = useDispatch();

   function plus() {
     setCounter(counter + 1)
   }

   function minus() {
     if(counter == 0)
     return

    setCounter(counter - 1)
  }

  function addItem() {
    dispatch(Add(counter))
  }

    return(
        <AddCartStyle className="conatiner">

          <div className="select">
          <img className="minus" src={Minus} alt="icon minus" onClick={minus} />
          <span>{counter}</span>
          <img src={Plus} alt="icon plus" onClick={plus} />
          </div>
          <div className="button" onClick={addItem}>
            <img src={Cart} alt="icon cart" />
            <span >Add to cart</span>
          </div>
        </AddCartStyle>
    )
}

export default AddCart;