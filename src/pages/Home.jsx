import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Usunobu </h2>
        <div className="prompt">
          <p>A student with a passion for coding and creating.</p>
          <Link to="https://www.linkedin.com/in/usunobu-edeaghe-omijie-86708519b/">
            <LinkedIn />
          </Link>

          <a href="mailto:usunobu.omijie@gmail.com">
            <Email />
          </a>

          <Link to="https://github.com/usuu03">
            <GitHub />
          </Link>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, JavaScript, JQuery, React, React Native, NPM,
              BootStrap, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, PHP CodeIgniter, Python Flask,
              MySQL, PostgreSQL, AWS RDS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, Java, PHP, Python, C#, Haskell, Solidity, English,
              Spanish
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
