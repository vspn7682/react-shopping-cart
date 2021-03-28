import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context/Context'
import firebase from 'firebase/app'
import './Home.css'

const Header = () => {

  const history = useHistory()
  const [{ basket, user }, dispatch] = useContext(Context)

  const logout = () => {
    firebase
      .auth()
      .signOut()

    dispatch({
      type: 'RESET_CART',

    })
    history.push('/')
  }

  const toggle = () => {
    const ham = document.querySelector('.ham__menu');
    ham.classList.toggle('show')
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" id="brand">
            S
          </Link>
          <span>
            <i className="fa fa-user"> </i> {user ? `Hello ${user.email}` : 'Hello User'}
          </span>
        </div>
        <div className="menu">
          {user ? (
            <Link to="/" onClick={logout} id="login">
              <i className="fa fa-sign-out"></i> Logout
            </Link>
          ) : (
              <Link to="/login" id="login">
                <i className="fa fa-sign-in"></i> Login
              </Link>
            )}
          <Link to="/cart" id="cart">
            <i className="fa fa-shopping-cart"></i> Cart ({basket.length})
          </Link>
        </div>
        <div onClick={toggle} className="hamburger">
          <div className="line"></div>
        </div>
        <div className="ham__menu">
          {user ? (
            <Link to="/" onClick={logout} id="login">
              <i className="fa fa-sign-out"></i> Logout
            </Link>
          ) : (
              <Link to="/login" id="login">
                <i className="fa fa-sign-in"></i> Login
              </Link>
            )}
          <Link to="/cart" id="cart">
            <i className="fa fa-shopping-cart"></i> Cart ({basket.length})
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
