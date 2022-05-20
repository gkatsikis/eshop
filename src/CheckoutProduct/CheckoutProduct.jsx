import React from "react";
import "./CheckoutProduct.css"

const CheckoutProduct = (props) => {
  return ( 
      <div className="checkoutProduct">
        <img src="https://cdn.shopify.com/s/files/1/1707/3261/products/CostaRicaLasLajas-10oz_1200x.png?v=1648490427" alt="" className="checkoutProduct__image" />

        <div className="product__info">
          <p className="checkoutProduct__title">
            Onyx - Las Lajas
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>36</strong>
          </p>
          <div className="checkoutProduct__rating">
            ✡✡✡✡✡ 
          </div>
          <button>remove from basket</button>
        </div>
      </div>
   );
}
 
export default CheckoutProduct;