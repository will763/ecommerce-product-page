import styled from "styled-components";

export const MainStyle = styled.main`
   
   @media (min-width: 768px) {
       width:100% ;
       display:flex ;
       justify-content:center ;
       align-items:center ;
       margin-top:4rem ;
       column-gap:5% ;

       .product-bio {
         width:min(40%,30rem) ;
       }

       .pictures-items {
         width:min(40%,23rem) ;
       }
   }

`