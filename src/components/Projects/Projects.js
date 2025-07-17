import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecogrow from "../../Assets/Projects/ecogrow.png";
import bail from "../../Assets/Projects/bailreckoner.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecogrow}
              isBlog={false}
              title="Eco Grow"
              description="Django-based sustainable agriculture platform that recommends crops and fertilizers based on soil and environmental conditions. Integrated with ML models, user authentication, dynamic dashboards, and a green-themed responsive UI."
              ghLink="https://github.com/pavithrapandiyaraj/EcoGrow"
              // demoLink="https://your-ecogrow-demo-link.com" // Add when available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bail}
              isBlog={false}
              title="Bail Reckoner"
              description="Legal decision support tool for automating bail amount calculations based on case type. Developed using Python, SQL, and static datasets with responsive UI and instant result display."
              ghLink="https://github.com/pavithrapandiyaraj/Bail-Reckoner"
              // demoLink="https://your-bail-reckoner-demo-link.com" // Add when available
            />
          </Col>

          {/* Placeholder project card for future additions */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/300"
              isBlog={false}
              title="More Projects Coming Soon"
              description="Stay tuned for upcoming projects, academic builds, and open-source contributions!"
              ghLink="https://github.com/pavithrapandiyaraj"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
