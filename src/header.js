import './App.css'
import Publications from './Publications.gif'
import twitter from './twitter.gif'
import github from './github.gif'
import linkedin from './linkedin.gif'


function Header () {
  return (
    <nav className = 'navbar'>
        <div className = 'home'>
            Home
        </div>
        <a href = '#' className = "toggle-button">
            <span className = "bar"></span>
            <span className = "bar"></span>
            <span className = "bar"></span>
            <span className = "bar"></span>
        </a>
        <div className = 'navbar-links'>
            <ul>
                <li><a href="https://scholar.google.com/citations?user=RvuhSGQAAAAJ&hl=en">Google Scholar</a><img className = "extras-gif" src={Publications} alt="" /></li>
                <li><a href="https://twitter.com/vasanthreddy18">Twitter</a><img className = "extras-gif" src={twitter} alt="" /></li>
                <li><a href="https://github.com/vbaddam">Github</a><img className = "extras-gif" src={github} alt="" /></li>
                <li><a href="https://www.linkedin.com/in/vasanth-reddy-778816108/">LinkedIn</a><img className = "extras-gif" src={linkedin} alt="" /></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;