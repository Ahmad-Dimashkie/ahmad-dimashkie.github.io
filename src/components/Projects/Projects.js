import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SentimentAnalysis from "../../Assets/Projects/SentimentAnalysis.png";
import ExchangeTracker from "../../Assets/Projects/Exchange-Tracker.png";
import MSFEA from "../../Assets/Projects/MSFEA-Platform.png";
import IDMS from "../../Assets/Projects/IDMS.png";
import UniFind from "../../Assets/Projects/UniFind.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UniFind}
              isBlog={false}
              title="UniFind"
              description="Many Lebanese students struggle to find a single resource that offers 
all the details they need—majors, campus locations, tuition fees, societies, clubs, and 
more. Which is why I built UniFind a web application that solves all that in one stop. The frontend of this website is built using react
as for the backend I used Flask along with AWS Lambda Functions and an API Gateway, for the database I used DynamoDB."
              ghLink="https://github.com/Ahmad-Dimashkie/UniFind"
              demoLink="https://youtu.be/sd5FzTZWIDM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IDMS}
              isBlog={false}
              title="IDMS"
              description="The Intelligent Document Management System is a web application designed to manage documents by automating the collection and analysis process. The system will extract relevant information from predefined web
sources, categorize documents based on their content using NLP, and the user can search, manage, and retrieve documents. I used React for the frontend, Django for the backend, MongoDB for the databaset and Firebase for Authentication."
              ghLink="https://github.com/HadiAlHassan/IDMS_CME"
              demoLink="https://youtu.be/FtZWwt74F9s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExchangeTracker}
              isBlog={false}
              title="Exchange Tracker"
              description="A comprehensive exchange rate tracker web application (LBP and USD) with secure user authentication, credit card integration, and time series forecasting for exchange rate prediction. It also includes user management with email notifications and statistical information on exchange rates. I used flask for the backend and Python for the Recurrent Neural Network responsible for the time series forecasting."
              ghLink="https://github.com/EECE-430L/Exchange-Rate-Backend-430L-group-3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SentimentAnalysis}
              isBlog={false}
              title="SentimentScope"
              description="I worked on a sentiment analysis project using the IMDB movie reviews dataset, which contains 50,000 reviews. I implemented a classifier to determine whether the sentiment expressed in each review is positive or negative. To achieve this, I applied various natural language processing techniques to process and analyze the data, extracting meaningful features for accurate sentiment classification."
              ghLink="https://github.com/Ahmad-Dimashkie/Sentiment-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MSFEA}
              isBlog={false}
              title="MSFEA Platform"
              description="This project is a web application built using Flask and Native HTML and CSS that interfaces with the MSFEA (Maroun Semaan Faculty of Engineering and Architecture) database. The application allows users to display various entities in the database, insert new data, and perform dynamic queries. The web app follows a CRUD (Create, Read, Update, Delete) model for database management."
              ghLink="https://github.com/Ahmad-Dimashkie/MSFEA-DB-Web-Application"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
