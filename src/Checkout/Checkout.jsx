// React 
import React, { useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider"

// Components
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

// CSS
import "./Checkout.css"
import { ListItemAvatar } from "@material-ui/core"

const Checkout = (props) => {
  const [{basket}, dispatch] = useStateValue()

  return ( 
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://i.imgur.com/0bV4A9r.png" alt="checkout add" className="checkout__ad"/>
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
   );
}
 
export default Checkout;