import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { client } from "./app/userSlice";
import "./Navbar.css"

import { MdOutlineShoppingCart } from 'react-icons/md';



function MyNavbar({ isLoggedIn }) {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const productId = useSelector((state) => state.cart.value);
  const user = useSelector((state) => state.user.value);
  isLoggedIn = user ? true : false;
  console.log({ productId, user });

  const handleLogout = () => {
    dispatch(client(null))
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img
          src="https://d1myhw8pp24x4f.cloudfront.net/company_logo/1565354332349_b_115.png"
          width="30"
          height="30"
          alt=""
          className="d-inline-block align-top"
        />
        Incipient Corps
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={pathname} className="me-auto">
          <Link to="/" className={pathname === "/" ? "nav-link active" : "nav-link"}  >
            Home
          </Link>
          <Link to="/product" className={pathname === "/product" ? "nav-link active" : "nav-link"} >
            Products
          </Link>
          <Link to="/about" className={pathname === "/about" ? "nav-link active" : "nav-link"} >
            About
          </Link>
          <Link to="/contact" className={pathname === "/contact" ? "nav-link active" : "nav-link"} >
            Contact
          </Link>
        </Nav>

        <Nav>
          {isLoggedIn ? (
            <>
              <Link to="/cart" className={pathname === "/cart" ? "nav-link active" : "nav-link"}>
                <MdOutlineShoppingCart  />
                {productId.length ? (
                  <span className="cart-badge" >{productId.length}</span>
                ) : ("")}
                Cart
              </Link >
              <Link onClick={handleLogout} className={pathname === "/logout" ? " active " : "nav-link "}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" className={pathname === "/register" ? "nav-link active" : "nav-link"}>
                Login/Register
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
