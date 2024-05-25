import React from 'react'
import logo from "../assets/logo.png"

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://my-portfolio-qlv1.onrender.com/">
          <img src={logo} alt="logo" className="rounded-2xl w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64" />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl' >
        <a href="https://www.linkedin.com/in/mario-petkov-552183206/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Mario1515">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar