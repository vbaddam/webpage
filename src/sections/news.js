import React from "react";
import "../about.css";
import New from "../images/New.gif";

export default function News() {
  return (
    <div>
      <h2 className="news-me"> Extras </h2>
      <div id="content"></div>
      <div className="extrabox">
        <div>
        <a className="marquee" href="vt.edu">
            {" "}
            Joined as a Research Intern at Siemens (2021){" "}
          </a>{" "}
          <img className="extras-gif" src={New} alt="" />
          <hr className="extras-hr" />
          <a className="marquee" href="vt.edu">
            {" "}
            Joined as a PhD student in computer science department at Virginia
            Tech (2020){" "}
          </a>{" "}
          <img className="extras-gif" src={New} alt="" />
          <hr className="extras-hr" />
          <a className="marquee" href="vt.edu">
            {" "}
            Joined a MS student in computer science department at Virgina Tech
            (2019)){" "}
          </a>{" "}
          <hr className="extras-hr" />
        </div>
      </div>
    </div>
  );
}
