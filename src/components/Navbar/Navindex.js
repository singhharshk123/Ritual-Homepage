import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="Menu">
          <h4 >
            <p>Menu</p>
          </h4>
        </NavLink>
        <NavMenu className="textChar">
          <NavLink to="/home">
            <h1 style={{ marginLeft: "18rem" , textAlign:'left'}}>Ritual</h1>
          </NavLink>
          <NavLink to="/services">
            <h4 style={{ marginLeft: "22rem" }}> Who We Are</h4>
          </NavLink>
          <NavLink to="/services">
            <h4 style={{ marginLeft:'6rem' }}> Cart</h4>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;