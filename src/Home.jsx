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
            <Product
              id="12345" 
              title="Onyx - Las Lajas"
              price={36}
              rating={5}
              image="//cdn.shopify.com/s/files/1/1707/3261/products/CostaRicaLasLajas-10oz_1200x.png?v=1648490427"
              link="https://onyxcoffeelab.com/products/costa-rica-las-lajas-natural-sl-28"
            />
            <Product
              id="4534543" 
              title="George Howell - Guduba Light"
              price={20}
              rating={4}
              image="https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1607661056/solidus/xdz96gqs8ixqkl13vuqb.png"
              link="https://store.georgehowellcoffee.com/coffees/guduba.html"
            />
          </div>
          <div className="home__row">
            <Product 
              id="345356324" 
              title="Maquina Coffee - El Progreso"
              price={24.45}
              rating={4}
              image="https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1652378364/solidus/u0hitishfllb0zzfcajd.png"
              link="https://www.drinktrade.com/el-progreso/p/3997"
              />
            <Product 
              id="3532525" 
              title="Tandem - La Piramide"
              price={20}
              rating={4}
              image="https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1613794493/solidus/tada4bi49i65fgicanok.png"
              link="https://www.drinktrade.com/la-piramide-axztnqfl/p/3030"
              />
            <Product 
              id="af35345" 
              title="Sightglass - Nueva Esperanza, David Munoz"
              price={23.50}
              rating={3}
              image="https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1646341875/solidus/iuu5b2uhioebaz043y8g.png"
              link="https://sightglasscoffee.com/products/nueva-esperanza-david-munoz"
              />
          </div>
          <div className="home__row">
          <Product 
            id="353678895" 
            title="Square Mile - Aqi Badu"
            price={22.30}
            rating={5}
            image="//cdn.shopify.com/s/files/1/0017/1562/products/Coffee-SQUARE_bcade9b3-534c-4b1c-8eb6-3341a4dc45e7_large.jpg"
            link="https://shop.squaremilecoffee.com/products/aqi-badu"
            />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Home;