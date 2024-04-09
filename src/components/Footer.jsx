import { LinkedIn } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.linkedin.com/in/usunobu-edeaghe-omijie-86708519b/">
          <LinkedIn />
        </Link>
      </div>
      <p> &copy; 2024 Usunobu Edeaghe </p>
    </div>
  );
}
