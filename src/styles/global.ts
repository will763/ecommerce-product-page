import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`

/*     
- Orange: hsl(26, 100%, 55%)
- Pale orange: hsl(25, 100%, 94%)

### Neutral

- Very vark blue: hsl(220, 13%, 13%)
- Dark grayish blue: hsl(219, 9%, 45%)
- Grayish blue: hsl(220, 14%, 75%)
- Light grayish blue: hsl(223, 64%, 98%)
- White: hsl(0, 0%, 100%)
- Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
*/

    * {
        outline:none ;
        box-sizing:border-box;
        margin:0 ;
        padding:0 ;
    }

    html,body {
        min-height:100vh ;
        width:100% ;
        font-family: 'Kumbh Sans', sans-serif;
        font-weight:400;
        scrollbar-width: none;
        overflow-x:hidden;
        -ms-overflow-style: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ::-webkit-scrollbar { display: none;}
    }

`

export default Global;