import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-2893_SVOD_DiamondMultititleSept/Amazon_GW_DesktopTallHero_RB-2893_SVOD_DiamondMultititleSept_3000x1200._CB407883641_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Lean StartUp"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={2}
          />
          <Product
            title="All-new Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Glacier White"
            price={249.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51auhlvkYoL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            title="Amazon Luna is a cloud gaming service that lets you play games on compatible Fire TV, PC, and Mac devices"
            price={156.62}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-ODBjMzQ0OTct-w758._SY608_CB404253618_.jpg"
            rating={5}
          />
          {/* Product*/}
        </div>
        <div className="home__row">
          <Product
            title="Mafia Definitive Edition - PlayStation 4"
            price="Temporarily Out of stock"
            image="https://images-na.ssl-images-amazon.com/images/I/71Q5ezvVzWL._AC_UL200_SR200,200_.jpg"
            rating={3}
          />
          <Product
            title="Introducing Amazon eero 6 dual-band mesh Wi-Fi 6 router, with built-in Zigbee smart home hub"
            price={125.41}
            image="https://images-na.ssl-images-amazon.com/images/I/41rSmY1PmrL._SL1000_.jpg"
            rating={5}
          />
          <Product
            title="Echo Wall Clock - Disney Mickey Mouse Edition - see timers at a glance - requires compatible Echo device"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71f3ZEEfgBL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            title="French Press Coffee Maker "
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71jJNJoIgyL._AC_SL1500_.jpg"
            rating={2}
          />
          {/* Product*/}
          {/* Product*/}
          {/* Product*/}
        </div>
        <div className="home__row">
          <Product
            title="Women's Halloween Costumes"
            price={32.06}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/EDITORIAL/HALLOWEEN/Women_Header_DT_2x.jpg"
            rating={3}
          />
          {/* Product*/}
          {/* Product*/}
        </div>
        <div className="home__row">
          <Product
            title="Arquer Modern French Arc Floor Lamp "
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81IWIFfPRUL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            title="Boho Black Metal Plant Hanger "
            price={32.96}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZH3%2BWLg8L._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            title=" Natural Candlescape Set "
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/613p5-7ED9L._AC_SL1001_.jpg"
            rating={4}
          />
          <Product
            title="Playstation 4 Pro "
            price={450.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71x5L6Vx6WL._AC_SL1500_.jpg"
            rating={5}
          />
          {/* Product*/}
          {/* Product*/}
        </div>
      </div>
    </div>
  );
}
