// src/components/Projects.js

import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import project1 from '../images/project1-preview.png';
import project2 from '../images/project2-preview.png';
import project3 from '../images/project3-preview.png';
import '../styles/Projects.css'; // Adjusted import path

const projectData = [
  {
    id: 1,
    title: 'Project 1',
    image: project1,
    description: 'Description of Project 1.'
  },
  {
    id: 2,
    title: 'Project 2',
    image: project2,
    description: 'Description of Project 2.'
  },
  {
    id: 3,
    title: 'Project 3',
    image: project3,
    description: 'Description of Project 3.'
  }
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleShow = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentProject(null);
  };

  return (
    <Container>
      <Row>
        {projectData.map((project) => (
          <Col md={4} key={project.id} className="mb-4">
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image preview-image"
              />
              <h3>{project.title}</h3>
              <Button variant="primary" onClick={() => handleShow(project)}>
                View Project
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {currentProject && (
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{currentProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="project-image full-image"
            />
            <p>{currentProject.description}</p>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default Projects;
