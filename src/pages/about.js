import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

// import scss from news
import "../styles/about.scss"
import "../styles/include-media.scss"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
          <span>
          <a href = '/'>Home</a>
          </span>
            <Fade bottom cascade>
              <h2>Machine Learning Laboratory</h2>
            </Fade>
            <p>
            The Machine Learning Laboratory research focuses on building human-machine collaborative AI systems that can learn context-aware and explainable models from multisource and interconnected data. We are developing graph-based deep learning techniques for time-series prediction, natural language processing, and control. We develop our research in the context of various applications including neuroscience, multiagent systems, healthcare, finance, transportation, intelligent assistance, cloud computing, communication networks, and video summarization.
            </p>
            <div>
                <h3>Can Catch us at:</h3>
            </div>
            <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About