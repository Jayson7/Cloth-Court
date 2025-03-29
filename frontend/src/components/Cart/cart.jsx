import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../../reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Ensure totalAmount is correctly calculated
  const totalAmount = cartItems
    .reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
    .toFixed(2);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrease = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="cart-container mt-5">
      <br />
      <br />
      <br />
      <h2 className="cart-title mt-5">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <button className="btn btn-primary" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.main_image}
                  alt={item.name}
                  className="cart-image"
                />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₦{Number(item.price).toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Total: ₦{(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="cart-actions">
                  <button
                    className="btn btn-success"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total Amount: ₦{totalAmount}</h3>
            <button
              className="btn btn-danger mx-4 my-2"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button
              className="btn btn-primary mx-4 my-2"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
