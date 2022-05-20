import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css"

const Checkout = (props) => {
  return ( 
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://i.imgur.com/0bV4A9r.png" alt="checkout add" className="checkout__ad"/>
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">

      </div>
    </div>
   );
}
 
export default Checkout;