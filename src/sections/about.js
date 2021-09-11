import React from "react";
import Vasanth_dp from "../images/Vasanth_dp.jpg";
import "../about.css";


export default function About() {
  return (
    <div className="card">
      <img className = "img-header" src={Vasanth_dp} alt="profile" />
      <div className = "name-section">
        <span className="fullname">Vasanth Reddy</span>
        <span class="title">
          <font weight="500">
            PhD Student
            <br />
            <a className="title" href="http://www.vt.edu">
              Computer Science
            </a>
            <a className="title" href="http://www.vt.edu">
              Virginia Tech
            </a>
            <br />
          </font>
        </span>
      </div>
    </div>
  );
}

