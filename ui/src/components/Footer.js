import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Link, Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#f2a537",
        marginTop: "11px",
        padding: "20px 0",
      }}
    >
      <Grid container spacing={2} sx={{ width: "60%", margin: "auto" }}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            lineHeight: "2rem",
          }}
        >
          <Link
            to="/about"
            component={RouterLink}
            color="inherit"
            underline="none"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "1.1rem",
              "&:hover": { color: "#9c27b0" },
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            component={RouterLink}
            color="inherit"
            underline="none"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "1.1rem",
              "&:hover": { color: "#9c27b0" },
            }}
          >
            Contact
          </Link>
          <Link
            to="/FAQs"
            component={RouterLink}
            color="inherit"
            underline="none"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "1.1rem",
              "&:hover": { color: "#9c27b0" },
            }}
          >
            FAQs
          </Link>
          <Link
            to="/termsofservice"
            component={RouterLink}
            color="inherit"
            underline="none"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "1.1rem",
              "&:hover": { color: "#9c27b0" },
            }}
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            component={RouterLink}
            color="inherit"
            underline="none"
            sx={{
              fontWeight: "bold",
              color: "white",
              fontSize: "1.1rem",
              "&:hover": { color: "#9c27b0" },
            }}
          >
            Privacy
          </Link>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            Follow us
          </Typography>
          <div>
            <Link href="https://facebook.com/">
              <FacebookIcon
                sx={{
                  height: "50px",
                  width: "50px",
                  color: "white",
                  margin: "10px 15px",
                  "&:hover": { color: "#9c27b0" },
                }}
              />
            </Link>
            <Link href="https://instagram.com/">
              <InstagramIcon
                sx={{
                  height: "50px",
                  width: "50px",
                  color: "white",
                  margin: "10px 15px",
                  "&:hover": { color: "#9c27b0" },
                }}
              />
            </Link>
            <Link href="https://github.com/">
              <GitHubIcon
                sx={{
                  height: "50px",
                  width: "50px",
                  color: "white",
                  margin: "10px 15px",
                  "&:hover": { color: "#9c27b0" },
                }}
              />
            </Link>
          </div>
        </Grid>
        <Grid item xs={12}>
          <small style={{ fontWeight: "bold", color: "white" }}>
            Copyright Camare Cakes
          </small>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
