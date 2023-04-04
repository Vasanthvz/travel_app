import React from 'react'
import './Navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
const Navbar = () => {
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1> <MdOutlineTravelExplore className='icon'/>travel</h1>
                </a>
            </div>
            <div className="navBar">
                <ul className="navLists flex">
                    <li className="navItems">
                        <a href="#" className="navLinks">Home</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLinks">Packages</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLinks">Shop</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLinks">About</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLinks">Pages</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLinks">News</a>
                    </li>
                    <li className="navItems">
                        <a href="#" className="navLinks">Contact</a>
                    </li>
                    <button className='btn'>
                        <a href="#">BOOK NOW</a>
                    </button>
                </ul>
            </div>
        </header>
    </section>
  )
}

export default Navbar