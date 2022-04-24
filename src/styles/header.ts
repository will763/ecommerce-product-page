import styled from "styled-components";

interface Props {
    isActive : boolean
    showCart : boolean
}

export const HeaderStyle = styled.header<Props>`
    position: relative;
    padding:0 5% ;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    height:3.5rem ;

   .container-menu-logo {
      display: flex ;
   }

   .container-menu-logo .icon-menu .menu-items {
       padding:5rem 5% 0;
       width:15rem ;
       height:125vh ;
       position:absolute ;
       background-color:white ;
       top:0 ;
       left:-100% ;
       z-index:2 ;
       display:flex;
       flex-direction:column ;
       pointer-events:none ;
       transition:all .5s ease-in-out ;
   }

   .container-menu-logo .icon-menu .menu-items::after {
       content:"" ;
       background-color:${props => props.isActive ? "rgba(0,0,0,.8)" : "transparent"} ;
       position:absolute ;
       left:100% ;
       top:0 ;
       bottom:0 ;
       transition:all .6s ease-in-out ;
       width:100vmin ;
   }

   .show {
      left:0 !important;
   }

   .container-menu-logo .icon-menu .menu-items a{
       color:hsl(220, 13%, 13%) ;
       text-decoration:none;
       font-weight:700 ;
       margin-top:1rem ;
       cursor: pointer;
       pointer-events:all ;
       transition:color .1s ease-in ;
   }

   .container-menu-logo .icon-menu .menu-items a:hover{
       color:hsl(219, 9%, 45%) ;
   }

   .container-menu-logo .icon-menu{
       cursor: pointer;
       margin-right:1rem ;
       display:flex ;
       align-items:flex-end ;
   }

   .container-menu-logo .icon-menu img{
       max-height:100% ;
       z-index:3 ;
   }

   .container-menu-logo .icon-logo {
       display:grid ;
       place-items:center ;
   }

   .container-cart-avatar {  
      display:flex ;
      justify-content:flex-end ;
      max-height:100% ;
   }

   .container-cart-avatar .icon-cart {
       margin-right:1rem ;
       display:grid ;
       place-items:center ;
   }

   .container-cart-avatar .icon-cart .container-icon {
      position:relative ;
      cursor: pointer;
      display:grid ;
      place-items:center ;
   }

   .container-cart-avatar .icon-cart .container-icon .notifications {
       position:absolute ;
       top:-8px ;
       right:-8px ;
       background-color:hsl(26, 100%, 55%) ;
       border-radius:50% ;
       color:white ;
       font-weight:700 ;
       font-size:.6rem ;
       width:1rem ;
       height:1rem;
       line-height:1rem ;
       text-align:center ;    
   }

   .container-cart-avatar .icon-cart .container-icon .img-cart {
       transition:filter .12s ease-in ;
       height:1rem ;
   }

   .container-cart-avatar .icon-cart .container-icon .img-cart:hover {
       filter:brightness(0);   
   }

   .container-cart-avatar .store-cart {
      overflow-y:scroll ;
      display:block ;
      position:absolute;
      width:90%;
      height:16rem ;
      top:120%;
      border-radius:.8rem ;
      right:-100% ;
      z-index:1 ;
      background-color:white ;
      transition:all .6s ease-out;
      ::-webkit-scrollbar { display:none;}
   }

   .container-cart-avatar .store-cart h5{
      margin:1.5rem 0  1.2rem 5%;
      color:hsl(220, 13%, 13%);
      font-size:1rem ;
   }

   .container-cart-avatar .store-cart h5::after {
      content:"";
      width:100% ;
      position:absolute ;
      left:0 ;
      margin-top:2.2rem ;
      height:.1rem ;
      background-color:rgba(174,174,174,.3) ;
  }

  .container-cart-avatar .store-cart .show-cart {
      padding-bottom:10% ;
      display: flex ;
      flex-direction:column ;
  }


    .show-cart {
      right : 5% !important ;
   } 


   .container-cart-avatar .icon-avatar {
       width:16.5% ;
       display:grid ;
       place-items:center ;
       border-radius:50% ;
       cursor: pointer;
       transition:all .1s ease-out ;
   }

   .container-cart-avatar .icon-avatar:hover {
       outline:solid 3px hsl(26, 100%, 55%) ;
   }

   .container-cart-avatar .icon-avatar img {
       max-height:100% ;
       max-width:100% ;
   }

   @media (min-width: 768px) {
    border-bottom:1px solid rgba(0,0,0,.1) ;
    height:5rem ;

    .container-cart-avatar .icon-cart .container-icon .img-cart {
        height:1.2rem ;
     }
    
    .container-cart-avatar .icon-avatar {
        width:2.5rem;
        margin-left:1.8rem ;
     }

     .container-menu-logo .icon-menu img {
        display:none ;
     }

     .container-menu-logo .icon-menu .menu-items::after {
         display:none ;
     }

     .container-menu-logo .icon-menu .menu-items {
         padding:0;
         width:30% ;
         max-width:20rem ;
         height:100% ;
         position:absolute ;
         left:0 ;
         background-color:transparent ;
         z-index:1 ;
         flex-direction:row ;
         align-items:center ;
         transform:translateX(100%);
     }

     .container-menu-logo .icon-menu .menu-items a{
       height:100% ;
       display:grid ;
       place-items:center ;
       position: relative;
       color:gray;
       text-decoration:none;
       font-weight:400 ;
       margin-top:0 ;
       font-size:.8rem ;
       margin-right:min(7%,10%);
   }

   .container-menu-logo .icon-menu .menu-items a:hover {
       color: hsl(220, 13%, 13%);
   }

   .container-menu-logo .icon-menu .menu-items a::after {
       content:"" ;
       position:absolute ;
       left:50% ;
       top:95% ;
       transform:translateX(-50%);
       background-color:hsl(26, 100%, 55%);
       width:0% ;
       height:5% ;
       transition:width .28s ease-in ;
    }

    .container-menu-logo .icon-menu .menu-items a:hover::after{
        width:100% ;
    }

    .container-cart-avatar .store-cart {
        max-width:20rem ;
        top:100%;
        box-shadow:0px 8px 20px 1px rgba(0,0,0,.4) ;
        height:14rem ;
    }

    
   }

`