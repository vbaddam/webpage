import React, {Component} from "react"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode' // Removed

import "../styles/navbar.scss"
import "../styles/include-media.scss"
import "bulma/css/bulma.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  handleClick = () => {
    this.setState({ active: !this.state.active });
   };
  render() {
  return (
    <div className="section">
      <div className="container1">
        <div className="navbar-wrapper">
          <div className="name">
            <a href = '/'>Home</a>
          </div>
          <span
            role="button"
            className={
              "navbar-burger burger " + (this.state.active ? "is-active" : "")
            }
            aria-label="menu"
            aria-expanded="false"
            onClick={this.handleClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>

          <div className={"links-wrapper"+ (this.state.active ? "is-active" : "")}>
            <ul>
            <li><a href="https://rllearn.netlify.app/">Blog</a></li>
            <li><a href= '/publications'>Publications</a></li>
            <li><a href="https://twitter.com/vasanthreddy18">Twitter</a></li>
            <li><a href="https://github.com/vbaddam">Github</a></li>
            <li><a href="https://www.linkedin.com/in/vasanth-reddy-778816108/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default Navbar

// <li><button onClick={() => scrollTo("#about")}>About</button></li>
