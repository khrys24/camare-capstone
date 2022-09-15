import React from "react";
import { Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


const ContactHome = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "150px",
      }}
    >
      <Typography variant="h3" component="div" className="contact--home">
        Got a message for us?
      </Typography>
      <div style={{ lineHeight: "2rem", margin: "20px 0" }}>
        <p>We'd love to hear from you!</p>
        <p>
          If you have any questions or concerns, feel free to shoot us a message
          and we'll make sure to reply to you as soon as possible.
        </p>
      </div>
      <div>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          sx={{ color: "#ce65cc", border: "1px solid #ce65cc" }}
        >
          <Link
            to="/contact"
            component={RouterLink}
            color="inherit"
            underline="none"
            sx={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              "&:hover": { color: "#ce65cc" },
            }}
          >
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ContactHome;
