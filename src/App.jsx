import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Projects from './components/Projects'
import Mission from './components/Mission'
import {Contact }from "./components/Contact"
import './index.css'

function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Mission/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
  
}

export default App
