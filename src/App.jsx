import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Project /></div>
      <div id="work"><Work /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
