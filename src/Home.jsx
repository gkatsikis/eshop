import React from "react";
import "./Home.css"

const Home = (props) => {
  return ( 
    <div>
      <div className="home">
        <div className="home__container">
          <img src="https://images.pexels.com/photos/2858682/pexels-photo-2858682.png" alt="espresso machine mid-extraction" className="home__image" />
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