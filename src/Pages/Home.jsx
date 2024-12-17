import "../Assets/CSS/main.css";
import About from "../Components/About";
import Formation from "../Components/Formation";
import Skills from "../Components/Skills";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Home(){
    return (
        <Container fluid className="home">
        <Row className="app-container">
          <Col md={3} className="sidebar">
            <Nav className="flex-column home-topics">
              <Nav.Link href="#about">À propos</Nav.Link>
              <Nav.Link href="#formation">Formation</Nav.Link>
              <Nav.Link href="#skills">Compétences</Nav.Link>
            </Nav>
          </Col>
          <Col md={{ span: 9, offset: 3 }} className="main-content">
            <h1>Mon Portfolio</h1>
            <section id="about">
              <About />
            </section>
            <section id="formation">
              <Formation />
            </section>
            <section id="skills">
              <Skills />
            </section>
          </Col>
        </Row>
      </Container>
      );
    }

export default Home;