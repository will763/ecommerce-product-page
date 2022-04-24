import { useDispatch } from "react-redux";
import { Remove } from "../store/items.actions";
import { ItemStyle } from "../styles/Item";
import Delete from "/assets/images/icon-delete.svg"
import ProductIcon from "/assets/images/image-product-1-thumbnail.jpg"

interface Props {
    idx : number
    total:number
    counter : number
}
  
function StoreItem({total,counter,idx}:Props) {

    const dispatch = useDispatch();

    function handle() {
        dispatch(Remove(idx))
    }

    return(
        <ItemStyle className="item">
          <div className="description-item">
              <img className="image-product" src={ProductIcon} alt="image item" />
               <div className="info-product">
                   <p className="product-name">Fall Limited Edition Sneakers</p>
                   <p>$125.00 x {counter} <span>${total.toFixed(2)}</span></p>
               </div>
              <img className="icon-delete" src={Delete} onClick={handle} alt="icon delete" />
          </div>
          <button >Checkout</button>
        </ItemStyle>
    )
}

export default StoreItem;