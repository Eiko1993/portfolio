import React from 'react';
import "../Assets/CSS/main.css";
import { Card, Row, Col } from "react-bootstrap";
import skillsData from "../data/skillsData.json";

function Skills() {
  return (
    <div className="skills-container">
      <h2 className='section-title'>Compétences</h2>
      <Row className="skills-row">
        {skillsData.map((skill, index) => (
          <Col key={index} className="skills-col">
            <Card className="text-center skills-card">
              <Card.Img
                variant="top"
                src={skill.logo}
                alt={skill.name}
                className="skills-img"
              />
              <Card.Body>
                <Card.Title className="skills-title">{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Skills;