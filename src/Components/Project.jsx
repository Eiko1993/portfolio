import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Modal from "react-modal";
import "../Assets/CSS/main.css";

const projectData = [
    {
      id: 1,
      title: "Projet Kasa",
      description: "Développeur front-end en freelance pour Kasa, une entreprise de location d’appartements entre particuliers.",
      details: "Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important.Mon but était de recréer le site en utilisant React",
      githubLink: "https://github.com/Eiko1993/Kasa",
    },
    {
      id: 2,
      title: "Projet Debug",
      description: "Développeur front-end freelance, je devais débugger un site pour l'agence 724events",
      details: "Leur site avait plusieurs problèmes que je devais résoudre",
      githubLink: "https://github.com/Eiko1993/Debugging",
    },
    {
      id: 3,
      title: "Projet ArgentBank",
      description: "Développeur frond-end pour ArgentBank,une nouvelle banque en ligne",
      details: "Créer en React le nouveau système d'authentification des utilisateurs.Puis, donner mon avis sur comment l'API pour les transactions doit ressembler",
      githubLink: "https://github.com/Eiko1993/bank",
    },
  ];

function Project(){
    Modal.setAppElement("#root"); // Nécessaire pour accessibilité

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
        <Container className="mt-5">
          <h2 className="text-center mb-4">Mes Projets</h2>
          <Row>
            {projectData.map((project) => (
              <Col md={4} key={project.id} className="mb-4">
                <Card className="project-card shadow-sm">
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
    
          {/* Modal pour les détails du projet */}
          <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Détails du Projet"
  className="custom-modal"
  overlayClassName="custom-overlay"
>
  {selectedProject && (
    <div>
      <h3>{selectedProject.title}</h3>
      <p>{selectedProject.details}</p>
      {/* Lien vers le projet GitHub */}
      <a
        href={selectedProject.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary"
      >
        Voir sur GitHub
      </a>
      <Button variant="secondary" onClick={closeModal} className="mt-3">
        Fermer
      </Button>
    </div>
  )}
</Modal>
        </Container>
      );
    
    
}

export default Project;