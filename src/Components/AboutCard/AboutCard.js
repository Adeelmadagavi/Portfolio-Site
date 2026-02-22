import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,  <span className="purple">  </span>
            I am a Fresh Graduate Engineer from <span className="purple"> Belagavi, India.</span>
            <br />
            
            <br />I have completed my Master’s in Computer Applications (MCA) from KLS Gogte Institute of Technology.<br /> <br />
           <br />
            
            I have strong foundational knowledge in Data Structures, DBMS and Computer Networks.
            <br />
           <br />
            <br />
             I’ve also completed certifications in Programming Foundations, HTML, CSS, and REST API using Webex Teams, and built several real-world projects I’m passionate about web development, cloud computing, and creating impactful digital solutions. Currently, I’m focused on building responsive, SEO-optimized websites and preparing for a career in cloud technologies.

              Let’s build something amazing together!
                                                      <br />      <br /> 

          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;