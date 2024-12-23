import emailjs from "@emailjs/browser"
import "../Assets/CSS/main.css";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormIncomplete = !formData.name || !formData.email || !formData.message;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données via EmailJS
    const Params = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_o28wr4v",   // Remplacez par votre Service ID
        "template_meq8z0k",  // Remplacez par votre Template ID
        Params,
        "QMztctzDgtgZEQwdx"    // Remplacez par votre Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Votre message a été envoyé avec succès !");
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Une erreur est survenue. Veuillez réessayer plus tard.");
        }
      );
  };

  return (
    <Container>
      <Row className="contact-form">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3 form form-text">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez votre nom"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3 form form-text">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Entrez votre adresse email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3 form form-text">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Écrivez votre message"
                rows={4}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className={isFormIncomplete ? "btn btn-disabled" : "btn btn-active"} disabled={isFormIncomplete}> 
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;