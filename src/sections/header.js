//import "./syles.css";
import React from "react";
import twitter from "../images/twitter.gif";
import linkedin from "../images/linkedin.gif";
import github from "../images/github.gif";
import Publications from "../images/Publications.gif";
import home from "../images/home.gif";

{/*
export default function Header() {
  return (
    <nav className="nav-style">
      <div>
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          Home
        </a>
        <img className="extras-gif" src={home} alt="" />
      </div>
      <div>
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          Publications
        </a>
        <img className="extras-gif" src={Publications} alt="" />
      </div>
      <div>
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          Twitter
        </a>
        <img className="extras-gif" src={twitter} alt="" />
      </div>
      <div>
        {" "}
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          Github
        </a>
        <img className="extras-gif" src={github} alt="" />{" "}
      </div>
      <div>
        {" "}
        <a className="marquee" href="https://twitter.com/vasanthreddy18">
          LinkedIn
        </a>
        <img className="extras-gif" src={linkedin} alt="" />{" "}
      </div>
    </nav>
  );
}
*/}

export default function Header() {
  return (
    <nav className="navbar">
      <div className="home">Home</div>
      <a href = '#' class = "toggle-button">
        <span class = "bar"></span>
        <span class = "bar"></span>
        <span class = "bar"></span>
        <span class = "bar"></span>
      </a>
      <div className='navbar-links'>
        <ul>
          <li><a href="https://scholar.google.com/citations?user=RvuhSGQAAAAJ&hl=en">Publications</a><img className = "extras-gif" src={Publications} alt="" /></li>
          <li><a href="https://twitter.com/vasanthreddy18">Twitter</a><img className = "extras-gif" src={twitter} alt="" /></li>
          <li><a href="https://github.com/vbaddam">Github</a><img className = "extras-gif" src={github} alt="" /></li>
          <li><a href="https://www.linkedin.com/in/vasanth-reddy-778816108/">LinkedIn</a><img className = "extras-gif" src={linkedin} alt="" /></li>
        </ul>
      </div>

    </nav>
  );
}