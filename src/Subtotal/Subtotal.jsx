// React
import React from "react";
import CurrencyFormat from "react-currency-format";

// CSS 
import "./Subtotal.css"

const Subtotal = (props) => {
  return ( 
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>$0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}

        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
      />
    </div>
   );
}
 
export default Subtotal;