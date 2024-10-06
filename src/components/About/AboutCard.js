import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Ahmad Dimashkie </span>
            from <span className="blue"> Beirut, Lebanon.</span>
            <br />I am currently a 4th year Computer and Communication
            Engineering Student at the{" "}
            <span className="blue"> American University of Beirut.</span>
            <br />
            <br />
            Apart from coding, I am a very outgoing person who likes to get out
            of his comfort zone, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling, I actually did an exchange semester
              at the{" "}
              <span className="blue"> University of Toronto, Canada</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Giving back to the community, which is why I am
              volunteering with <span className="blue">UNICEF CLUB</span> at AUB
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports like Padel, Squash and Basketball
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
