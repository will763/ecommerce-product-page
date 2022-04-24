import styled from "styled-components";

export const ItemStyle = styled.div`
  display:grid ;
  place-items:center ;
  padding:0 5%;
  color:hsl(219, 9%, 45%) ;
  position: relative;
  margin-top:1.5rem ;

  .description-item {
      display:flex ;
      align-items:center ;
      justify-content:space-between;
      font-size:.9em ;
      line-height:1.4rem ;
      width:100% ;
      margin-bottom:1.5rem ;
  }

  .description-item .image-product {
      max-width:3rem ;
      max-height:3rem ;
      border-radius:.4rem ;
      background-color:red ;
  }

  .description-item .info-product p > span {
      color:black ;
      font-weight:700 ;
  }

  .description-item .info-product .product-name {
      text-overflow:ellipsis ;
      overflow:hidden ;
      white-space:nowrap ;
      width:90% ;
    
  }

  .description-item .icon-delete {
     cursor: pointer;
     transition:filter .18s ease-out;
  }

  .description-item .icon-delete:hover {
     filter:brightness(0) invert(0);
  }
  
  button {
     height:3rem ;
     width:100% ;
     background-color:hsl(26, 100%, 55%);
     border:none ;
     border-radius:.4rem ;
     color:white ;
     font-weight:700;
     font-size:.9rem ;
     cursor: pointer;
   }
`