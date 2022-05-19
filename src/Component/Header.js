import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style/Header.css";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firebaseInit";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" className="py-3" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold" as={Link} to="/">
            Todo App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="link_nav">
                Home
              </Link>
              <Link to="/add-task" className="link_nav">
                Add Task
              </Link>
            </Nav>
            <button onClick={() => signOut(auth)} className="signOut">
              Sign Out
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
