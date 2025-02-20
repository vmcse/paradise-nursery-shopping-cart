import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg  bg-success ">
      <div className="container-fluid justify-content-between">
        <Link to="/" className="navbar-brand text-white mx-3">
          Paradise Nursery
        </Link>
        <Link to="/cart" className="btn btn-primary position-relative me-3 ">
          Cart
          {totalItems > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
