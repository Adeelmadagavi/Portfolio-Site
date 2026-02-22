import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Components/Particles/Particle";
import resume from "../Assets/dd.png";

function Resume() {
  return (
    <Container fluid className="resume-section">
      
      <Particle />

      {/* Resume Image */}
      <img
        src={resume}
        alt="Resume"
        style={{
          width: "70%",
          marginLeft: "15%",
          marginBottom: "5%",
        }}
      />

      <Container>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Download button removed safely */}
        </Row>
      </Container>

    </Container>
  );
}

export default Resume;