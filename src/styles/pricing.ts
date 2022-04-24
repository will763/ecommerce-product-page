import styled from "styled-components";


export const PricingStyle = styled.div`
  height:4rem ;
  padding:0 5% ;
  display:flex ;
  align-items:center ;
  font-size:.9rem ;
  margin-top:.6rem ;

  .price-discount {
    display: flex ;
    align-items:center ;
  }

  .pct {
    font-size:.9rem ;
    border-radius:.3rem ;
    padding: .20rem .6rem ;
    margin-left:1rem ;
    color:hsl(26, 100%, 55%);
    background-color:hsl(25, 100%, 94%) ;
  }

  .off {
      margin-left:auto ;
      text-decoration:line-through ;
      color:hsl(220, 14%, 75%) ;
  }

  @media (min-width: 520px) {
    display:block ;
    margin-top:1rem ;

    .off {
      margin-top:.3rem ;
    }
  }

`