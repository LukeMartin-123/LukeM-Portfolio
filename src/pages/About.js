import React from "react";
import headshot from "../assets/photos/headshot.jpg";
import Footer from "../components/Footer/Footer";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import Container from "../components/Container/Container.js";
import "./about.css"

function About() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
          <Row>
          <img src= {headshot} alt="Headshot" class="headshot" />
            <Col size="md-12">
            <h1 class="intro">Aspiring Web Developer</h1>
            <h1 class="intro-line2"> Former Advertising Account Supervisor</h1>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
  );
}

export default About;
