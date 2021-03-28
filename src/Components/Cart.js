import React, { useContext } from "react";
import Header from "./Header";
import "./Cart.css";
import { Context } from '../Context/Context'
import { Link, useHistory } from 'react-router-dom'


const Cart = () => {

  const history = useHistory()

  const [{ basket, user }, dispatch] = useContext(Context)

  const total = basket.reduce((accum, currVal) => {
    return accum + currVal.price
  }, 0)

  const deleteItem = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id
    })
  }

  const placeOrder = () => {
    if (user) {
      dispatch({
        type: 'RESET_CART'
      })
      history.push('/order')
    } else {
      history.push('/login')
    }
  }

  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart__wrapper">
          {basket.length !== 0 ?
            <>
              <div className="cart__items">
                {
                  basket.map((item) => (
                    <div className="items" key={item.id}>
                      <div className="cart__items__img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="cart__items__desc">
                        <h1 className="product__title">{item.title}</h1>
                        <p className="product__price">{item.price}</p>
                        <button onClick={() => deleteItem(item.id)} className="delete">Delete</button>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="cart__total">
                <div className="cart__total__wrapper">
                  <div className="cart__total__head">
                    <h1>Subtotal:</h1>
                    <p>Discount (if any):</p>
                    <p>Delivery Charge:</p>
                    <h1>Grand Total:</h1>
                  </div>
                  <div className="cart__total__info">
                    <h1>Rs. {total}</h1>
                    <p>Rs. 0</p>
                    <p>Rs. 70</p>
                    <h1>Rs. {total + 70}</h1>
                  </div>
                </div>
                <button onClick={placeOrder} className="proceed">Place Order</button>
              </div>
            </>
            :
            <div className="cart__empty">
              <h1>Your cart is empty</h1>
              <p>To add items to your cart click 'Add to Cart' button in the products section. Go to <Link to='/' id='go__back'>Products</Link></p>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Cart;
