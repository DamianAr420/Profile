import React, { useEffect, useState } from 'react';
import "./main.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import LoadingPage from './loadingPage/loadingPage';
import img from "../../me.jpg";

export default function Main() {
  const skills = [
    "sql", "css", "rwd", "html", "figma", "react.js", "node.js", "express.js", "javascript", "mongoDB", "tailwindcss", "microsoft-360"
  ]
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoading ? <LoadingPage /> :
      <div className='mainBody'>

        <nav className="navbar">
          <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#aboutMe">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

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
          <div id="skills" className="skills">
            <h1>Skills</h1>
            <ul>
              {skills.map((skill, index) => {
                return <li key={index}>{skill}</li>
              })}
            </ul>
          </div>

          <div id="aboutMe" className="aboutMe">
            I'm an IT student in business, specializing in front-end developer.
            Creating websites is my hobby that I enjoy. I spend a lot of my free time learning about it.
            I'd like to become a professional in this field in the future.
            My second hobby is motorcycles, which are my favorite vehicle. 
            I love traveling and visiting different places by motorcycle.
          </div>
        </div>

        <div className="sectionTwo">
          <div id="projects" className="projects" data-aos="zoom-in">
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
          </div>
        </div>

        <div className='sectionThree'>
          <div id="contact" className="contact" data-aos="zoom-in">
            <h1 className='text-white'>Contact</h1>
            <div className="contactContent">
              <p>Phone: </p>
              <p>Email: </p>
              <p>GitHub: <a className='text-[rgb(255,0,0)] decoration-transparent' href="https://github.com/DamianAr420" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
          </div>
        </div>

      </div>}
      </div>
  )
}
