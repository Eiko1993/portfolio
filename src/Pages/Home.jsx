import "../Assets/CSS/main.css";
import Sidebar from "../Components/Sidebar";
import About from "../Components/About";
import Formation from "../Components/Formation";
import Skills from "../Components/Skills";
import Banner from "../Components/Banner";
import { Container, Row, Col, Nav } from "react-bootstrap";
import background from "../Assets/Images/banner.jpg";

function Home(){
    return (
        <Container fluid className="home">
        <Row className="app-container">
        <Sidebar /> 
          <Col md={{ span: 9, offset: 3 }} className="main-content">
          <Banner img={background} title="Mon Portfolio"/>
            <section id="about" className="about">
              <About />
            </section>
            <section id="formation" className="formation">
              <Formation />
            </section>
            <section id="skills" className="skills">
              <Skills />
            </section>
          </Col>
        </Row>
      </Container>
      );
    }

export default Home;