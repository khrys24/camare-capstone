import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/Hero.css";

const Hero = () => {
  return (
    <div className="hero--section">
      <div className="hero--desc">
        <h2>Best Mocha Cake in Town</h2>
        <p>
          <em>
            You can never go wrong with a classic! Layers and layers of mocha
            chiffon with dark mocha filling topped with beautifully mocha
            whipped cream.
          </em>
        </p>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          sx={{ color: "#ce65cc", border: "1px solid #ce65cc", margin:"20px 0" }}
        >
          <Link
            to="/menu"
            style={{
              color: "#ce65cc",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            View
          </Link>
        </Button>
      </div>
      <div className="hero--photo">
        <img
          src="./images/mocha_cake_1.png"
          className="hero--photo"
          style={{ maxHeight: "500px" }}
        />
      </div>
    </div>
  );
};

export default Hero;
