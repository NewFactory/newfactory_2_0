import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header/Header'
import TopContent from './components/topcontent/TopContent'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Technologies from './components/technologies/Technologies'
import Team from './components/team/Team'
import Footer from './components/footer/Footer'
import reportWebVitals from './reportWebVitals'
import {Contact} from "./components/contact/Contact";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <TopContent />
    <About />
    <Projects />
    <Technologies />
    <Team />
    <Contact />
    <Footer />
  </React.StrictMode>,

  document.getElementById('root')
);
reportWebVitals();
