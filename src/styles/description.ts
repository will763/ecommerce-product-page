import styled from "styled-components";


export const DescriptionStyle = styled.div`
  padding: 0 5%;
  text-align:left ;
  font-size:.9em ;

  h5 {
      color:hsl(26, 100%, 55%);
      font-weight:700 ;
      text-transform:uppercase;
      margin:.8rem 0 ;
      letter-spacing:.1rem ;
  }

  h1 {
      margin-bottom:.8rem ;
  }

  p {
      line-height:1.3rem ;
      width:min(95%,30rem);
      color:hsl(219, 9%, 45%);
  }

  @media (min-width: 768px) {
      h1 {
          width:calc(100% - 5%) ;
          font-size:clamp(1.8rem,3vw,3rem) ;
      }
  }

`