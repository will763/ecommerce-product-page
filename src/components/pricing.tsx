import { PricingStyle } from "../styles/pricing";

function Pricing() {
    return(
        <PricingStyle>
            <div className="price-discount">
            <h1>$125.00</h1>
            <h5 className="pct">50%</h5>
            </div>
            <h5 className="off">$250.00</h5>
        </PricingStyle>
    )
}

export default Pricing;