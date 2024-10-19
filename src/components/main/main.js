import React from 'react';
import "./main.css";

export default function main() {
  const skills = [
    "sql", "css", "rwd", "html", "figma", "node.js", "mongoDB", "react.js", "javascript", "express.js", "tailwindcss", "microsoft-360"
  ]
  return (
    <div>
      <div className='header'>
        <div className="img"><img src="public\me.jpg" alt="error" /></div>
        <div className="name">
          Hi, my name is Damian
          <div className="desc">
            I'm a beginner Front-end Developer. This website is about me and I'll try describe myself
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
