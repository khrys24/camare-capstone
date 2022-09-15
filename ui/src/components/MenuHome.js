import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/MenuHome.css";
import { Link } from "react-router-dom";

const MenuHome = () => {
  return (
    <div className="container my-5">
      <Typography variant="h3" component="div" sx={{ margin: "30px" }}>
        Best Sellers
      </Typography>
      <div className="menu--selections gap-5">
        <Card sx={{ maxWidth: 400 }} className="featured">
          <CardMedia
            className="featured--photo"
            component="img"
            alt="Mocha Cake"
            height="400"
            image="./images/mocha_cake_1.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="large" color="secondary" sx={{ color: "#ce65cc" }}>
              View
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400 }} className="featured">
          <CardMedia
            className="featured--photo"
            component="img"
            alt="Mocha Cake"
            height="400"
            image="./images/mocha_cake_1.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="large" color="secondary" sx={{ color: "#ce65cc" }}>
              View
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400 }} className="featured">
          <CardMedia
            className="featured--photo"
            component="img"
            alt="Mocha Cake"
            height="400"
            image="./images/mocha_cake_1.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button size="large" color="secondary" sx={{ color: "#ce65cc" }}>
              View
            </Button>
          </CardActions>
        </Card>
      </div>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        sx={{ color: "#ce65cc", border: "1px solid #ce65cc" }}
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
          View All
        </Link>
      </Button>
    </div>
  );
};

export default MenuHome;
