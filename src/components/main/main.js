import React, { useEffect, useState } from 'react';
import "./main.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import LoadingPage from '../loadingPage/loadingPage';
import img from "../../me.jpg";
import { Link, Element } from 'react-scroll';

export default function Main() {
  const skills = [
    "sql", "css", "rwd", "html", "figma", "react.js", "node.js", "express.js", "javascript", "mongoDB", "tailwindcss", "microsoft-360"
  ]
  const [isLoading, setIsLoading] = useState(false);
  const [darkmode, setDarkMode] = useState(true);
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    fetch("https://sheetdb.io/api/v1/qmylb2ke3t804")
      .then(response => response.json())
      .then(data => setOpinions(data));
  }, []);

  const darkmodeSwitch = () => {
    const dmE = document.getElementById("dmElement").style;
    if(darkmode === true) {
      dmE.marginLeft = "40px";
      document.documentElement.style.setProperty('--bcg', '#fff');
      document.documentElement.style.setProperty('--txt', '#111');
      document.documentElement.style.setProperty('--nav', '#111');
      document.documentElement.style.setProperty('--shadow', 'rgb(0, 81, 255)');
      setDarkMode(false)
    } else {
      dmE.marginLeft = "0px";
      document.documentElement.style.setProperty('--bcg', '#111');
      document.documentElement.style.setProperty('--txt', '#fff');
      document.documentElement.style.setProperty('--nav', '#fff');
      document.documentElement.style.setProperty('--shadow', 'rgb(255, 0, 0)');
      setDarkMode(true)
    }
  }

  return (
    <div>
      {isLoading ? <LoadingPage /> :
      <div className='mainBody'>

        <nav className="navbar">
          <ul>
            <li><Link className='link' to="skills" smooth={true} duration={500} offset={-150}>Skills</Link></li>
            <li><Link className='link' to="aboutMe" smooth={true} duration={500} offset={-150}>About</Link></li>
            <li><Link className='link' to="projects" smooth={true} duration={500} offset={-250}>Projects</Link></li>
            <li><Link className='link' to="contact" smooth={true} duration={500} offset={-150}>Contact</Link></li>
          </ul>
        </nav>

        <div onClick={darkmodeSwitch} className='darkmode'>
          <div id='dmElement' className='dmElement'></div>
        </div>

        <div className='header'>
          <div className="img"><img src={img} alt="MyPhoto" /></div>
          <div className="name">
            Hi, my name is Damian
            <div className="desc">
              I'm a beginner Front-end Developer. This website is about me and I'll try describe myself
            </div>
          </div>
        </div>

        <div className='sectionOne'>
          <Element name="skills" className="skills">
            <h1>Skills</h1>
            <ul>
              {skills.map((skill, index) => {
                return <li key={index}>{skill}</li>
              })}
            </ul>
          </Element>

          <Element name="aboutMe" className="aboutMe">
            I'm an IT student in business, specializing in front-end developer.
            Creating websites is my hobby that I enjoy. I spend a lot of my free time learning about it.
            I'd like to become a professional in this field in the future.
            My second hobby is motorcycles, which are my favorite vehicle. 
            I love traveling and visiting different places by motorcycle.
          </Element>
        </div>

        <div className="sectionTwo">
          <Element name="projects" className="projects" data-aos="zoom-in">
            <h1>My Projects</h1>
            <div className="project-list">
              <div className="project-item" data-aos="fade-up">
                <h2>Employee Panel</h2>
                <p>In the employee panel, the employee can see his or her working hours or contact details of other employees</p>
                <p><span className='font-bold'>Technologies:</span> React.js, Node.js(express), MongoDB, css(tailwind)</p>
                <a href="https://github.com/DamianAr420/panel-pracownika" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
              <div className="project-item" data-aos="fade-up">
                <h2>Notepad</h2>
                <p>You can save, edit and delete your notes in the notepad</p>
                <p><span className='font-bold'>Technologies:</span> React.js</p>
                <a href="https://github.com/DamianAr420/Notepad" target="_blank" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </Element>
        </div>

        <div className='sectionThree'>
          <Element name='contact' className="contact" data-aos="zoom-in">
            <h1 className='text-[var(--txt)]'>Contact</h1>
            <div className="contactContent">
              <p>Phone: </p>
              <p>Email: </p>
              <p>GitHub: <a className='text-[rgb(255,0,0)] decoration-transparent' href="https://github.com/DamianAr420" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
          </Element>
        </div>

        <div className='opinions'>
          <h1 className='text-[var(--txt)]'>Opinions</h1>
          <div className='opinionsContent'>
            {opinions.map((opinion, index) => (
              <div key={index} className='opinion'>
                <h2>{opinion.name}</h2>
                <p className='rate'>{opinion.rate}/5</p>
                <p>{opinion.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>}
      </div>
  );
}
