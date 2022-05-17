import React from "react";
import './Product.css'

const Product = (props) => {
  return ( 
    <div>
      <div className="product">
        <div className="product__info">
          <p>Las Lajas - Costa Rica - SL28</p>
          <p className="product__price">$36</p>
          <p className="product__rating">🌟🌟🌟🌟🌟</p>
        </div>
        <img src="//cdn.shopify.com/s/files/1/1707/3261/products/CostaRicaLasLajas-10oz_1200x.png?v=1648490427" alt="coffee product" />
        <button>Add to Basket</button>
      </div>
    </div>
   );
}
 
export default Product;