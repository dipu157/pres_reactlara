import React, { Component } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import face from "../../assets/img/new_logo.png"

import routes from "routes.js";

function logout(e)
{
  e.preventDefault();

  localStorage.clear();
  window.location.reload();
}

function Header({user,setUser}) {

  let name;
  let email;
  if (user) {
      name = user.name;
      email = user.email;
  }

  const location = useLocation();

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Prescription";
  };


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">

          <Navbar.Brand
            href="/home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
              >
                <img src={face} style={{ height:"30px", width:"30px" }} />
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                  Update Profile
              </Dropdown.Item>
              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                  Change Password
              </Dropdown.Item>
               <div className="divider"></div>
               <Dropdown.Item onClick={logout}>
                  Logout
              </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Item>
              <Nav.Link className="m-0">
                <span>{name}</span>
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
