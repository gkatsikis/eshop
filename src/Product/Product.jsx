import React from "react";
import './Product.css'
import { useStateValue } from "../StateProvider/StateProvider";

const Product = (props) => {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        image: props.image,
        price: props.price,
        rating: props.rating
      },
    })
  }

  return ( 
    <div key={props.id} className="product__container">
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__rating">
            {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
          </p>
          <p className="product__price">
            <small></small>
            <strong>${props.price}</strong>
          </p>
        </div>
        <img src={props.image} alt="product" />
        <p className="product__link"><a href={props.link}>Original Retailer</a></p>
        <button onClick={addToBasket}>Add to Basket</button>
          
      </div>
    </div>
   );
}
 
export default Product;