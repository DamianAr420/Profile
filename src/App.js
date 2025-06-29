import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-background transition-colors duration-300">
        <div className="mainBody p-4 w-[95%] mx-auto max-w-[1200px]">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
