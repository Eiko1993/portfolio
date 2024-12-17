import React from "react";
import { Col, Nav } from "react-bootstrap";

function Sidebar() {
  return (
    <Col md={3} className="sidebar">
      <Nav className="flex-column home-topics">
        <Nav.Link href="#about">À propos</Nav.Link>
        <Nav.Link href="#formation">Formation</Nav.Link>
        <Nav.Link href="#skills">Compétences</Nav.Link>
      </Nav>
    </Col>
  );
}

export default Sidebar;