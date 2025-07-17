import React from "react"
import Fade from "react-reveal/Fade"

import "../styles/skills.scss"
import "../styles/include-media.scss"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <hr />
          <Fade top>
          <h1>Latest News</h1>
          </Fade>
          <li>Paper accepted for publication at the IEEE/ACM International Conference on Human-Robot Interaction (HRI'25):  In Search of a Lost Metric: Human Empowerment as a Pillar of Socially Conscious Navigation [<a href="https://arxiv.org/abs/2501.01539">Link</a>]</li>

          <li>Paper accepted for publication at the American Control Conference (ACC'24):  Bottom-Up Approach for Searching for Sparse Controllers with a
          Budget [<a href="https://ieeexplore.ieee.org/abstract/document/10644330">Link</a>]</li>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default Skills
