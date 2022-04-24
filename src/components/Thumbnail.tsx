import IconPrevious from "/assets/images/icon-previous.svg"
import IconNext from "/assets/images/icon-next.svg"
import { items } from "../utils/itemsProducts";
import { ThumbnailStyle } from "../styles/thumbnail";
import { useEffect } from "react";
import { scrollCarousel } from "../utils/carouselScroll";
import { thumbnails } from "../utils/itemsProducts";
import { Div } from "../styles/thumbnails";
import Product1 from "/assets/images/image-product-1.jpg"
import { Select } from "../utils/SelectPicture";
import SelectThumbnail from "../utils/SelectThumbnail";

function Thumbnail() {

    useEffect(()=>{
        scrollCarousel()
      })

    useEffect(()=>{
         Select()
         SelectThumbnail()
    },[])

    return (
        <div style={{width:"100%"}}>
        <ThumbnailStyle>
            <div className="wrapper">
               {items.map((item,index)=>{
                 return <img key={index} className="image-product" src={item} alt="image thumbnail" />
                })}
           </div>
           <div className="container-buttons">
               <div className="button prev">
                  <img src={IconPrevious} alt="button previous" /> 
               </div>
               <div className="button next">
                  <img src={IconNext} alt="button previous" /> 
               </div>             
           </div>
           <div className="wrapper-picures">
               <img src={Product1} className="product-logo" alt="lean" />
           </div>
        </ThumbnailStyle>
        <Div className="wrapper-thumbnail">
           {thumbnails.map((value,idx)=>{
               return (
                  <div className="container-thumbnail"> 
                    <img key={idx} className="thumbnail" src={value} alt="thumbnail product" />
                  </div>
                )      
           })}
        </Div>

        </div>
    )
}

export default Thumbnail;