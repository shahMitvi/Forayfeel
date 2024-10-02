import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  let user = localStorage.getItem("user") || null;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    toast.success("LogOut Sucessfully");
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          Foray<span>Feel</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About US
            </Nav.Link>
            <Nav.Link as={Link} to="/packages">
              Packages
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>

            {/* <Nav.Link as={Link} to="/signup">Sign In</Nav.Link> */}
          </Nav>
          <Nav>
            {!user ? (
              <Nav.Link as={Link} to="/login" className="login-btn">
                Log In
              </Nav.Link>
            ) : (
              <NavDropdown title="User" id="navbarScrollingDropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
