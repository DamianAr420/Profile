import React from 'react';
import "./main.css";

export default function main() {
  const skills = [
    "sql", "css", "rwd", "html", "figma", "react.js", "node.js", "express.js", "javascript", "mongoDB", "tailwindcss", "microsoft-360"
  ]
  return (
    <div className='mainBody'>

      <div className='header'>
        <div className="img"><img src="public\me.jpg" alt="error" /></div>
        <div className="name">
          Hi, my name is Damian
          <div className="desc">
            I'm a beginner Front-end Developer. This website is about me and I'll try describe myself
          </div>
        </div>
      </div>

      <div className='sectionOne'>
        <div className="skills">
          <h1>Skills</h1>
          <ul>
            {skills.map((skill, index) => {
              return <li key={index}>{skill}</li>
            })}
          </ul>
        </div>
        
        <div className="aboutMe">
          I'm an IT student in business, specializing in front-end developer.
          Creating websites is my hobby that I enjoy. I spend a lot of my free time learning about it.
          I'd like to become a professional in this field in the future.
          My second hobby is motorcycles, which are my favorite vehicle. 
          I love traveling and visiting different places by motorcycle.
        </div>
      </div>

    </div>
  )
}
