import "../Assets/CSS/main.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../Components/ContactForm";
import Banner from "../Components/Banner";
import background from "../Assets/Images/contact.jpg";

function Contacts() {
    return (
      <Container fluid className="contacts">
        <Row>
          <Col>
            <Banner img={background} title="Contactez-moi" />
          </Col>
        </Row>
  
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }

export default Contacts;