import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/NoBordersImage.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="blue"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I'm a Programmer, Developer, and most importantly a learner.
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="blue"> Python, C++ and Javascript. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new&nbsp;
                <i>
                  <b className="blue">Web Apps </b> and also in areas related to{" "}
                  <b className="blue">
                    Machine Learning and Artificial Intelligence
                  </b>
                </i>
                <br />
                <br />
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h2>
                YOU CAN <span className="blue">FIND</span> ME ON
              </h2>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Ahmad-Dimashkie"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ahmaddimashkie/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/ahmad_dimashkie1/"
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
        </Container>
      </Container>
    </section>
  );
}
export default Home2;
