import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../style/Checkout.css";
import { CheckoutProduct } from "./CheckoutProduct";
import { Subtotal } from "./Subtotal";
export const Checkout = () => {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2>Your Shopping Basket</h2>
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
         <Subtotal />
      </div>
    </div>
  );
};
