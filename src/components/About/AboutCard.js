import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pavithra Pandiyaraj</span>
            {" "}from <span className="purple">Madurai, India.</span>
            <br />
            I am a final year student at Kamaraj College of Engineering and Technology.
            <br />
            I am pursuing a degree in Computer Science and Engineering.
            <br />
            <br />
            Apart from academics, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Pavithra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
