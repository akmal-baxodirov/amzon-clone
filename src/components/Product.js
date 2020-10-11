import React from "react";
import "../style/Product.css";
import { useStateValue } from "../context/StateProvider";

export const Product = ({ id, title, image, price, rating }) => {

  const [ state,  dispatch] = useStateValue()

  const addToBasket = () =>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id,
        title,
        image,
        price,
        rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="product__rating">
          {Array(+rating)
            .fill()
            .map((_, index) => (
              <p key={index}>
                <span role="img" aria-label="star">
                  ⭐️
                </span>
              </p>
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt="" />
      <button type="button"  onClick={addToBasket} >Add to basket</button>
    </div>
  );
};
