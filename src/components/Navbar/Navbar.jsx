import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';
export default function NavBar() {
  const [pageName, setPageName] = useState("HOME");
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.replace("/", "").toUpperCase();
    setPageName(pathName);
  }, [location]);

  return (
    <Navbar sticky="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand style={{fontSize:"1.6rem"}} href="/home">Netflix-Clone</Navbar.Brand>
    <Nav style={{fontSize: "1.6rem"}} className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/favorite">Favorite</Nav.Link>
    </Nav>
    </Container>
    <h1 className="pageName">{`${pageName==='HOME'?'MOVIES':`MY ${pageName}`} LIST`}</h1>
  </Navbar>
  );
}