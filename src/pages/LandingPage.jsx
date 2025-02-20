import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(/images/background.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      ></div>

      <div
        className="d-flex flex-column justify-content-center align-items-center text-white "
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          className="display-3 fw-bold"
          style={{
            WebkitTextStroke: "1px black",
            color: "white",
          }}
        >
          Paradise Nursery
        </h1>

        <h6 style={{ maxWidth: "600px", margin: "20px", textAlign: "center" }}>
          Welcome to Paradise Nursery, your one-stop shop for beautiful and
          healthy houseplants. We offer a wide variety of plants to brighten up
          your home and improve your indoor air quality.
        </h6>

        <Link to="/products">
          <button className="btn btn-success btn-lg">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
