import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pavithra.jpg"; // Make sure this file exists
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate final year Computer Science and Engineering student from Kamaraj College of Engineering and Technology.
              <br />
              <br />
              I enjoy working with programming languages like
              <i>
                <b className="purple"> Java, Python, C, and C++</b>
              </i>
              .
              <br />
              <br />
              I love developing real-world projects using
              <i>
                <b className="purple"> Django, SQL, HTML, CSS, and JavaScript</b>
              </i>
              .
              <br />
              <br />
              My interests also include exploring
              <i>
                <b className="purple"> Machine Learning</b>
              </i>{" "}
              and building solutions that make a difference.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Pavithra"
                style={{ borderRadius: "50%", maxHeight: "300px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pavithrapandiyaraj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pavithra-p-38769721b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* Uncomment if you want to add Twitter or Instagram */}
              {/*
              <li className="social-icons">
                <a
                  href="https://twitter.com/your_handle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/your_handle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
