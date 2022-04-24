import styled from "styled-components";

export const AddCartStyle = styled.div`
   padding: 0 5% ;
   margin: .6rem 0 3.8rem;
   color:white ;
   font-weight:700;
   font-size:.85rem ;

   .select {
    padding: 0 5% ;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    height:3rem ;
    border-radius:.5rem ;
    background-color:hsl(223, 64%, 98%) ;
    margin-bottom:.8rem ;
   }

   .select img {
       cursor: pointer;
       height:.8rem ;
       width:.8rem ;
   }

   .select .minus {
       height:.25rem ;
       width:.8rem ;
   }

  .select span{
    font-size:1rem ;
    color:black ;
   }

  .button {
    position: relative;
    display:flex;
    justify-content:center ;
    align-items:center ;
    height:3rem ;
    border-radius:.5rem ;
    background-color: hsl(26, 100%, 55%);
    cursor: pointer;
    transition:all .1s;
  }

  .button:hover {
    filter:brightness(110%);
  }

  .button::after {
    content:"";
    position: absolute;
    top:100% ;
    width:85% ;
    z-index:-1 ;
    opacity:0 ;
    height:.8rem ;
    background-color:hsla(26, 100%, 55%,.2);
    border-bottom-left-radius:1rem ;
    border-bottom-right-radius:1rem ;
    box-shadow: 0px 0px 10px 10px  hsla(26, 100%, 55%,.2);
    transition:all .18s ease-out;
  }

  .button:hover::after {
    opacity:1 ;
  }

  .button img {
    filter:brightness(0) invert(1);
    height:1rem ;
  }
  

  .button span {
      margin-left:1rem ;
  }

  @media (min-width: 520px) {
     display:flex ;
     flex-direction:column ;
     align-items:flex-start ;


    .button,.select {
      width:min(60%,20rem) ;
    }

}

  @media (min-width: 768px) {
    flex-direction:row ;
    column-gap:1rem ;
    .button {
      width:14rem ;
    }

    .select {
      width:9rem ;
    }
  }


`