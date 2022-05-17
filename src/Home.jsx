import React from "react";
import "./Home.css"
import Product from "./Product";

const Home = (props) => {
  return ( 
    <div>
      <div className="home">
        <div className="home__container">
          <img src="https://images.pexels.com/photos/4226802/pexels-photo-4226802.jpeg" alt="espresso machine mid-extraction" className="home__image" height="300"/>
          <div className="home__row">
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
          <Product />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Home;