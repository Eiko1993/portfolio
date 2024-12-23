import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Modal from "react-modal";
import projectData from "../data/projectData.json";
import "../Assets/CSS/main.css";

function Project() {
  Modal.setAppElement("#root");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container className={`mt-5 ${modalIsOpen ? "modal-open" : ""}`}>
      <Row className={`projects-list ${modalIsOpen ? "hidden" : ""}`}>
        {projectData.map((project) => (
          <Col md={4} key={project.id} className="mb-4">
            <Card className="project-card shadow-sm">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" onClick={() => openModal(project)}>
                  Voir Détails
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Détails du Projet"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        {selectedProject && (
          <div className="modal-content">
            <button
              className="close-button"
              onClick={closeModal}
              aria-label="Fermer"
            >
              &times;
            </button>
            <h3 className="modal-title">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <p>{selectedProject.details}</p>
            <Button
              variant="outline-primary"
              className="mt-3"
              onClick={() => window.open(selectedProject.githubLink, "_blank")}
            >
              Voir sur GitHub
            </Button>
          </div>
        )}
      </Modal>
    </Container>
  );
}

export default Project;
