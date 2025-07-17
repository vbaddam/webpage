import React from "react"
import Fade from "react-reveal/Fade"
import group_image from "../images/vasanth_dp.jpg"

// import scss for headr
import "../styles/Header.scss"
import "../styles/include-media.scss"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade top>
            <div className="card1">
              <img className="image-header" src={group_image} alt="group" />
            </div>
          </Fade>
          <Fade top>
            <span className="fullname">Vasanth Reddy</span>
            <p>
                      <i>
            <br />
            Hey there! I’m Vasanth, a Ph.D. candidate in Computer Science at Virginia Tech, where I spend my time convincing robots to be a little smarter (and hopefully not take over the world). Advised by the brilliant
             <a className="links" href="https://people.cs.vt.edu/hdardiry/"> Dr. Hoda Eldardiry</a> and <a className="links" href="https://ece.vt.edu/people/profile/boker">Dr. Almuatazbellah (Muataz) Boker</a>. 
            my research dives into Multi-Agent Reinforcement Learning (MARL) and control systems. In simpler terms—I teach robots to work together without stepping on each other’s toes (most of the time).

            I explore things like sparse communication, dynamic curriculum learning, and human-robot interaction, with applications in social navigation and large-scale autonomous systems. When I’m not debugging (or questioning my life choices when training models overnight), I write about cool research topics on my <a className="links" href="https://rllearn.netlify.app/">blog</a>.

            Outside of research, you’ll probably find me playing Volleyball or Table Tennis, where I apply my multi-agent coordination skills in real life—sometimes successfully, sometimes embarrassingly.
          </i>
            </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
