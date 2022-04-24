import AddCart from "./addCart";
import Description from "./description";
import Pricing from "./pricing";
import Thumbnail from "./Thumbnail";
import { MainStyle } from "../styles/Main";

function Main() {
    return(
        <MainStyle>
            <div className="pictures-items">
              <Thumbnail />
            </div>
            <div className="product-bio">
              <Description />
              <Pricing />
              <AddCart />
            </div>
        </MainStyle>
    )
}

export default Main;