import React from "react";
import "../style/Home.css";
import { Product } from "./Product";

export const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg/digital/video/merch2016/Hero/Covid19/Generic/"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="The Super Health Diet - The Last Diet You Will Ever Need!"
          image="https://m.media-amazon.com/images/I/51NKBVOeTVL.jpg"
          price="30"
          rating="4"
        />
        <Product
          id="2"
          title="Amazon Smart Plug, works with Alexa – A Certified for Humans Device"
          image="https://images-na.ssl-images-amazon.com/images/I/311jEWXjjoL._AC_US218_.jpg"
          price="24.99"
          rating="5"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Azpen G1058 10.1 4G LTE Quad Core Android Unlocked Tablet with Bluetooth GPS Dual Cameras"
          image="https://m.media-amazon.com/images/I/615NVy7+5lL._AC_UY218_.jpg"
          price="83.70"
          rating="3"
        />
        <Product
          id="4"
          title="Dell XPS 13 9360 13.3in Full HD Anti-Glare InfinityEdge Display (non-touch) Laptop - Silver, Intel Core i5-8250U, 8GB LPDDR3-1866, 256GB Solid State Drive SSD (Renewed)"
          image="https://m.media-amazon.com/images/I/619zxIDdlPL._AC_UY218_.jpg"
          price="902"
          rating="3"
        />
        <Product
          id="5"
          title="Pagani Design Japan Movement Automatic Mechanical Waterproof Men's Watches-Fashion Classic Stainless Steel Watches"
          image="https://m.media-amazon.com/images/I/61PoIJkZjcL._AC_UL320_.jpg"
          price="105.99"
          rating="5"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="ProsourceFit Multi-Grip Chin-Up/Pull-Up Bar, Heavy Duty Doorway Trainer for Home Gym (ps-1109-cu), Black"
          image="https://m.media-amazon.com/images/I/71lEJ+fgvVL._AC_UL320_.jpg"
          price="27.59"
          rating="4"
        />
      </div>
    </div>
  );
};
