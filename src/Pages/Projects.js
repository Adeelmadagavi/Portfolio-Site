import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              // imgPath="https://user-images.githubusercontent.com/91063960/139678548-e58c550e-51c5-4695-a0c3-d6563737548a.png"
              title="Dandeli Green Adventure – Tourism Booking Website"
              description="Tech Stack:JavaScript,Bootstrap,HTML/CSS, SEO Optimization
              Designed and developed  a fully responsive tourism website for a jungle resort in Dandeli to boost online presence and direct bookings.Implemented SEO best practices, optimized image loading, and mobile-first design to ensure top performance in search rankings.
              Built a modular React architecture with reusable components such as Hero, Gallery, Rooms, and Activities.Integrated contact and inquiry forms with plans for dynamic API-based booking system integration."
              link="https://dandeligreenadventure.in"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              // imgPath="https://user-images.githubusercontent.com/91063960/139376405-043d6cfd-93b3-4486-a07a-2ff3382846d8.png"
              title="Crop Insurance Management System (CIMS)"
              description="Tech Stack: PHP, MySQL, HTML, CSS, JavaScript
              Repo: GitHub – Insurance System
              Created a web platform to streamline insurance claim registration and status tracking for farmers.
              Developed separate dashboards for farmers and admins, including claim form submissions, file uploads, and claim status updates.
              Implemented role-based authentication and notification planning via SMS/email for future enhancements.
              Helped simplify a traditionally manual process, aligning with digital India and agritech goals."
              link="https://github.com/Adeelmadagavi/-insurance-system"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              // imgPath="https://user-images.githubusercontent.com/91063960/139381648-76a0d2e5-9375-4f5a-8399-030888d8065e.png"
              title="Medical Inventory Data Analysis Dashboard"
              description="This project is a real-time medical inventory monitoring and analytics system developed using modern full-stack technologies. Designed for hospitals and healthcare providers, it enables efficient tracking, analysis, and visualization of medical stock—helping reduce stockouts, improve procurement, and ensure better patient care
               Real-Time Inventory Monitoring: View current stock, reorder alerts, and product turnover.
               Interactive Dashboards: Analyze category-wise product distribution, billing performance, and HSN code trends.
               Data-Driven Decision Making: Helps hospital staff plan better using clean visual reports.
               Responsive Interface: Dashboards embedded in a mobile-friendly React frontend.
               Scalable Design: Ready for login systems, API integration, and multi-role access."
              link="https://github.com/adeelmadagavi"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              // imgPath="https://user-images.githubusercontent.com/91063960/139376405-043d6cfd-93b3-4486-a07a-2ff3382846d8.png"
              title="Portfolio Website"
              description="Tech Stack= HTML, CSS, react.js, Bootstrap, JavaScript
              Created a personal portfolio website to showcase my projects and skills.
              Implemented a responsive design to ensure compatibility across devices.
              Integrated smooth scrolling and animations for a better user experience.
              Deployed the website using GitHub Pages for easy access and sharing."
              link="https://github.com/adeelmadagavi"
            />
          </Col>
        </Row>
      </Container>
      
    </Container>
  );
}
export default Projects;
