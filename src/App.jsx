import React from 'react'
import Nav from './comp/nav'
import Home from './comp/home'
import About from './comp/about'
import Projects from './comp/projects'
import Contact from './comp/contact'
import Footer from './comp/Footer'

function App() {
  return (
    <>
    <Nav />
    <Home />
    <hr className="w-[85%] mt-10 md:p-4 m-auto" />
    <About />
    <hr className="w-[85%] mt-10 md:p-4 m-auto" />
    <Projects />
    <hr className="w-[85%] mt-10 md:p-4 m-auto" />
    <Contact />
    <Footer />
    </>
  )
}

export default App