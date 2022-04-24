import styled from "styled-components";


export const ThumbnailStyle = styled.div`
  width:100% ;
  position:relative ;
  height:100% ;

 .wrapper { 
   position:relative ;
   display:flex;
   overflow-x:hidden ;
   scroll-behavior:smooth ;
   scroll-snap-type: x mandatory ;
 }


 .image-product {
   scroll-snap-align: start ;
   flex:none ;
   height:20em;
   width:100%;
   object-fit:cover ;
 }

 .container-buttons {
    display:flex ;
    justify-content:space-between ;
    width:90% ;
    position:absolute ;
    top:50% ;
    left:5% ;
 }

 .container-buttons .button {
    cursor: pointer;
    display:grid ;
    place-content:center ;
    background-color:white ;
    border-radius:50%;
    width:2.5rem ;
    height:2.5rem ;
    transition:all .2s ease ;
 }

 .container-buttons .button:hover {
    box-shadow:0px 0px 10px 1px rgba(0,0,0,.3) ;
 }

 .wrapper-picures {
   display:none ;
 }

 @media (min-width: 520px) {
   width:90% ;
   margin:0 auto ;

   .wrapper {
     border-radius:.5rem ;
   }
   
 }

 @media (min-width: 768px) {
  width:100% ;
  margin:0 ;

   .wrapper {
     display:none ;
   }

   .wrapper-picures {
   display:block ;
 }

   .container-buttons {
     display:none ;
   }

   .wrapper-picures {
      width:100% ;
      border-radius:.8rem ;
      height:24rem ;
   }

   .wrapper-picures img {
     max-width:100% ;
     height:100% ;
     border-radius:.8rem ;
   }

 }

`