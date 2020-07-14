/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ListCartContext } from "../context/StateCart";
function Header() {
  const { listCart } = useContext(ListCartContext);
  return (
    <header>
      <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
        <ul className="nav navbar-nav nav-flex-icons ">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle waves-effect waves-light"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-bars" /> Menu
            </a>
            <div
              className="dropdown-menu dropdown-menu-left"
              aria-labelledby="dropdownMenu1"
            >
              <Link className="dropdown-item waves-effect waves-light" to="/">
                Home
              </Link>
              <Link
                className="dropdown-item waves-effect waves-light"
                to="/iphone"
              >
                Iphone
              </Link>
              <Link
                className="dropdown-item waves-effect waves-light"
                to="/samsung"
              >
                SamSung
              </Link>
              <Link className="dropdown-item waves-effect waves-light" to="/">
                Contact
              </Link>
            </div>
          </li>
        </ul>

        <ul className="nav navbar-nav nav-flex-icons ml-auto">
          <Link to="/cart">
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
          </Link>
          <span className="cart-number">{listCart.length}</span>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
