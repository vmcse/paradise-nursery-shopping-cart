import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

// Product Data
const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Low Maintenance",
    image: "snake-plant.jpg",
  },
  {
    id: 2,
    name: "Monstera",
    price: 25,
    category: "Tropical",
    image: "monstera.jpg",
  },
  {
    id: 3,
    name: "Pothos",
    price: 10,
    category: "Low Maintenance",
    image: "pothos.jpg",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 30,
    category: "Tropical",
    image: "fiddle-leaf.jpg",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 20,
    category: "Low Maintenance",
    image: "zz-plant.jpg",
  },
  {
    id: 6,
    name: "Peace Lily",
    price: 18,
    category: "Flowering",
    image: "peace-lily.jpg",
  },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Group products by category
  const groupedProducts = products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});

  return (
    <div className="container mt-5">
      {/* Render each category */}
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="mb-5">
          {/* Category Name */}
          <h2 className="text-center mb-4">{category}</h2>

          {/* Products in the Category */}
          <div className="row">
            {groupedProducts[category].map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="card-h-top"
                    style={{
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => dispatch(addItem(product))}
                      disabled={cartItems.some(
                        (item) => item.id === product.id
                      )}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Go to Cart Button */}
      <div className="text-center mt-4">
        <Link to="/cart">
          <button className="btn btn-secondary">Go to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductListingPage;
