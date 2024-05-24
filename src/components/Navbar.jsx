import React from 'react'
import logo from "../assets/logo.png"

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl' >
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar