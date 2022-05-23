import React from "react";
import "./CheckoutProduct.css"

const CheckoutProduct = (props) => {


  return ( 
      <div className="checkoutProduct">
        <img src={props.image} alt="" className="checkoutProduct__image" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
            {props.title}
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}  
          </div>
          <button>remove from basket</button>
        </div>
      </div>
   );
}
 
export default CheckoutProduct;