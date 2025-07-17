import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Card from "../components/card"

// import scss file from styles folder

import "../styles/members.scss"
import "../styles/include-media.scss"



const Members = () => {
    return (
        <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
          <span>
          <a href = '/'>Home</a>
          </span>
            <Fade bottom cascade>
              <h1>Director</h1>
            </Fade>
          </div>
          <div className="card">
            <img className="image-wrapper" src={data.drhodaimg} alt="about"></img>
            </div>
            <span>
                <h3><a href = "https://people.cs.vt.edu/hdardiry/">Dr. Hoda Eldardiry</a></h3>
            </span>
          
          <Fade bottom cascade>
            <h2>PhD Members</h2>
            </Fade>
            <div className="grid">
            {data.members.map((members, index) => (
                <Card
                  key={index}
                  heading={members.title}
                  imgurl={members.img}
                  projectLink={members.url}
                ></Card> 
                ))}
            </div>
            <Fade bottom cascade>
            <h2>Alumni</h2>
            </Fade>
            <div className="grid">
            {data.alummembers.map((alummembers, index) => (
                <Card
                  key={index}
                  heading={alummembers.title}
                  imgurl={alummembers.img}
                  projectLink={alummembers.url}
                ></Card> 
                ))}
            </div>
            <div className = "peoplelist">
                <h3>Others</h3>
            <ul>
                <li>Yuan Chen</li>
                <li>Joshua Matthew</li>
                <li>Tran Chau</li>
                <li>Mia Taylor</li>
            </ul>
            </div>
            
        </div>
      </div>
    </div>
    )
}

export default Members

