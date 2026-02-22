import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ami.png";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section container-fluid" id="about">
      <Container>

        <Row>
          <Col md={8} className="home-about-description">

            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">

              I fell in love with programming and have experience in building modern web applications.

              <br /><br />

              I am fluent in
              <b className="purple"> C++, Java and JavaScript.</b>

              <br /><br />

              My field of interest includes
              <b className="purple"> Web Development</b> and building modern responsive applications.

              <br /><br />

              I enjoy developing applications using
              <b className="purple"> Node.js, React.js</b> and modern JavaScript frameworks.

            </p>

          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>

        </Row>


        {/* SOCIAL LINKS */}

        <Row>
          <Col md={12} className="home-about-social">

            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://github.com/adeelmadagavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adeelmadagavi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/adeelmadagavi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>

            </ul>

          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default SelfIntro;