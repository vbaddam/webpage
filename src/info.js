import './App.css'


function Info (){
    return (
      <div className = 'extrabox'>
  
        <h2 className="about-me">About Me</h2>
        <p className="about-me">
        Graduated from BTech in electrical engineering from the National Institute of Technology in Jaipur (2019), I am currently pursuing a PhD in Computer Science at Virginia Tech university. Being monitored by <a className="links" href="https://people.cs.vt.edu/hdardiry/">
            Dr. Hoda Eldardiry"
          </a>{" "} and <a className="links" href="https://ece.vt.edu/people/profile/boker">
            Dr. Almuatazbellah (Muataz) Boker"
          </a>, my current research is based on the Reinforcement learning of/in(you should know if its in or of) control systems. The main objective is to develop the learning methods in order to be able to control lesser data in larger scale systems.
        </p>
      </div>
    );
  }

export default Info;