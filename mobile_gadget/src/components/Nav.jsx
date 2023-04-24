import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import './Style/Navbar.css'

const Nav = () => {
  return (
    <nav>
        <div className='menuIcon'>
            <ul className='nav-list'>
                <li>
                    <NavLink to="/">Home</NavLink>

                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/service">Services</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                    
                </li>
            </ul>

        </div>
    </nav>
  )
}

export default Nav