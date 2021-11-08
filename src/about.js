import './App.css'
import Vasanth_dp from './download (2).png'

function About() {
  return (
    <div className = 'card'>
        <img className = "img-header" src={Vasanth_dp} alt="profile" />
      <div>
        <span className="fullname">Vasanth Reddy</span>
        <span className = 'title'>
          <font weight="500">
            PhD Student
            <br />
            <a  className = 'title' href="http://www.vt.edu">
              Computer Science
            </a>
            <a  className = 'title' href="http://www.vt.edu">
              Virginia Tech
            </a>
            <br />
          </font>
        </span>
      </div>
    </div>
    );
}

export default About;
