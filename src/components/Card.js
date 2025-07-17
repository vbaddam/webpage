import React from "react"

// import scss file
import "../styles/card.scss"
import "../styles/include-media.scss"

const Card = ({ heading, imgurl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
        "url(" +
        imgurl +
        ")",
      }}
    >
      <div className="content">
        <span>
          <h3><a href ={projectLink ? projectLink : "#"}>{heading}</a></h3>
        </span>
      </div>
    </div>
  )
}

export default Card
