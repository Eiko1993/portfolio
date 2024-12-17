import React from 'react';
import "../Assets/CSS/main.css";
import { Card, Row, Col } from "react-bootstrap";

function Skills() {
    const skills = [
          { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
          { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
          { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
          { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
          { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
          { name: "Git", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
        ];
      
    return (
          <div>
            <h2>Compétences</h2>
            <Row xs={1} md={3} className="g-4">
              {skills.map((skill, index) => (
                <Col key={index}>
                  <Card className="text-center">
                    <Card.Img variant="top" src={skill.logo} alt={skill.name} className='skills-img' />
                    <Card.Body>
                      <Card.Title className='skills-title'>{skill.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
    );
}
      


export default Skills;