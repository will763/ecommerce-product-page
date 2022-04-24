import styled from "styled-components";

export const Div = styled.div`
  display:none ;

@media (min-width: 768px) {
  display:block ;
  margin-top:1.8rem ;
  display:flex ;
  column-gap:5% ;
  width:90% ;
  max-width:23rem ;

  .container-thumbnail {
    display:flex;
    width:100% ;
    border-radius:.4rem ;
  }

  .container-thumbnail .thumbnail {
     width:100% ;
     object-fit:contain ;
     cursor: pointer;
     border-radius:inherit ;
     transition:all .2s ;
  }

  .thumbnail:hover {
    opacity:.7 ;
  }

  .selected {
    transition:all .2s ease-out;
    border:2px solid hsl(26, 100%, 55%);
  }

  .selected .thumbnail {
    opacity:.3 ;
  }
}
`