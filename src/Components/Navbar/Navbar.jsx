import React, {useState} from 'react'
import './Navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // Function to toggle navBar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1> <MdOutlineTravelExplore className='icon'/>Travel</h1>
                </a>
            </div>
            <div className={active}>
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
                <div className="closeNavbar">
                   <AiFillCloseCircle className='icon'/>
                </div>
            </div>
            <div className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>
        </header>
    </section>
  )
}

export default Navbar