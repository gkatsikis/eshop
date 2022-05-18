import React from "react";
import './Product.css'

const Product = (props) => {
  return ( 
    <div key={props.id} className="product__container">
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__price">
            <small></small>
            <strong>${props.price}</strong>
          </p>
          <p className="product__rating">
            {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
          </p>
        </div>
        <img src={props.image} alt="product" />
        <p className="product__link"><a href={props.link}>Original Retailer</a></p>
        <button>Add to Basket</button>
          
      </div>
    </div>
   );
}
 
export default Product;