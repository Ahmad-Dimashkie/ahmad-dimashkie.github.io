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
            <br />I am a Software Development Engineer at {" "}
            <span className="blue"> Amazon </span>
             in London, United Kingdom<br />
            <br />
            Apart from coding, I am a very outgoing person who who enjoys
            stepping out of my comfort zone, Some of my favorite activities
            include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling, I had the opportunity to complete an
              exchange semester at the{" "}
              <span className="blue"> University of Toronto, Canada</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Giving back to the community, both technically
              and socially. This is why I served as the{" "}
              <span className="blue">Webmaster and Event Officer</span> at IEEE AUB and I also
              volunteered with <span className="blue">UNICEF CLUB</span> AUB
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
