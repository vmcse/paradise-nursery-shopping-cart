import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Shopping Cart</h1>
      <div className="d-flex justify-content-between mb-3">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`/images/${item.image}`}
                    alt={item.name}
                    className="img-fluid rounded-start"
                    style={{
                      height: "150px",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      ${item.price} x {item.quantity}
                    </p>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-center">
        <button className="btn btn-primary me-2">Checkout (Coming Soon)</button>
        <Link to="/products">
          <button className="btn btn-secondary">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
