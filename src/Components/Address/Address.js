import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./address.css";
import call from "../../Assets/contact.svg";

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Address() {
  return (
    <Container>
          <Row>
              <Col md={12} className="address">
              
              
              
              </Col>
     
            <Col md={12} className="contact-image-container">
              <img className="contact-image" src={call} alt="" />{" "}
              
            </Col>
           <Row> 
           <Col md={6} className="contact-address">

           <h4 >Phone Number</h4> 
              
              <p>  <AiOutlineWhatsApp/> +91 8105515014</p>
              </Col>
              <Col md={6} className="contact-address">
              <h4 >Email Address</h4> 
              <p>
                
                <AiOutlineMail/> madagaviadeel3@gmail.com
              </p>
              </Col>

        </Row>

            <Col md={12} className="home-about-social">
              <h1>Contact Me</h1>
              <span>
                I am available on almost every social media. You can message me,
                I will reply within 24 hours. I can help you with JavaScript,
                React, Node and Opensource Development.
              </span>
              <br/>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/adeelmadagavi"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/adeelmadagavi/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                    
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://wa.me/8105515014"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineWhatsApp />
                    
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/adeel_khan_1414/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
           <div className="min-h-screen bg-white py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScpXNdY5DeFfa2RqDVvspseIWv6XHpBoHm51U60FAplplRs9w/viewform?embedded=true"
          width="100%"
          height="900"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="w-full border rounded-xl shadow-md"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
        </Container>
   
  );
}

export default Address;
