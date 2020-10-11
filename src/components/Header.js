import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../context/StateProvider";

export const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span>Hello</span>
            <span>Sign In</span>
          </div>
        </Link>
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>

        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
