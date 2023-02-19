import React from "react";

function Pricelabel(props){
    return(
        <div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
          <span className="disChip-label">{props.sellPrice} NTL</span>
        </div>
    )
};

export default Pricelabel;