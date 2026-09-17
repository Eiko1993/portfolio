import emailjs from "@emailjs/browser";
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

    const params = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_o28wr4v",
        "template_meq8z0k",
        params,
        "QMztctzDgtgZEQwdx"
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
    <Container className="contact-form-wrapper">
      <Row className="contact-form justify-content-center">
        <Col xs={12} md={10}>
          {isSubmitted && (
            <p className="message-submitted">
              Merci pour votre message ! Nous vous répondrons rapidement.
            </p>
          )}

          <Form onSubmit={handleSubmit} className="contact-form-box">
            <Form.Group controlId="formName" className="mb-3 form-group">
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

            <Form.Group controlId="formEmail" className="mb-3 form-group">
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

            <Form.Group controlId="formMessage" className="mb-3 form-group">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Écrivez votre message"
                rows={5}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className={isFormIncomplete ? "btn btn-disabled" : "btn btn-active"}
              disabled={isFormIncomplete}
            >
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;