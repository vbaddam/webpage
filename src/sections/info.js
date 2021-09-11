import React from "react";
import "../about.css";

export default function Info() {
  return (
    <div className = 'extrabox1'>

      <h2 className="about-me">About Me</h2>
      <p className="about-me">
        I am a PhD student of Computer Science department at the Virgina Tech. I
        received my BTech degree in electrical engineering from National
        Institute of Technology, Jaipur in 2019. My current research interests
        combines the Reinforcement learning in control systems, developing
        learning methods to learn the control with less data in large scale
        systems.
      </p>
      <p className="about-me">
        I am currently being advised my "
        <a className="links" href="https://people.cs.vt.edu/hdardiry/">
          Dr. Hoda Eldardiry"
        </a>{" "}
        and "
        <a className="links" href="https://ece.vt.edu/people/profile/boker">
          Dr. Almuatazbellah (Muataz) Boker"
        </a>
      </p>
    </div>
  );
}
