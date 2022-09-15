import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#9c27b0", position:"fixed", top:"0" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
              <Link
                to="/"
                component={RouterLink}
                color="inherit"
                underline="none"
                sx={{margin:"auto"}}
              >
                <img src='./images/camare_cakes_logo_4.svg' style={{height:"70px"}}/>
              </Link>
            
            <Button color="inherit">
              <ShoppingCartIcon />
            </Button>
            <Button color="inherit">
              <Link to="/register" component={RouterLink} color="inherit">
                <PersonIcon />
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
