import { LinkedIn } from "@mui/icons-material";
import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedIn />
      </div>
      <p> &copy; 2024 Usunobu Edeaghe </p>
    </div>
  );
}
