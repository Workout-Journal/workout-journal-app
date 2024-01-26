import React from 'react'
import {Navbar, NavLink, NavItem, Nav,Button } from "reactstrap"
const Header = () => {
  return (
        <>
        <Nav
    >
      <NavItem>
        <NavLink
          active
          href="#"
        >
      Work Outs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Sets and Reps
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
        >
         Goals
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
        >
          About Us
        </NavLink>
      </NavItem>
    </Nav>
        </>
      )
    }


export default Header