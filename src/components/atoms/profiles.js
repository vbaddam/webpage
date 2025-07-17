import React from "react"

// import css from styles folder

const Profiler = ({img}) => {
  return (
    <div className="card">
        <img className="image-wrapper" src={img} alt="about"></img>
    </div>
  )
}

export default Profiler