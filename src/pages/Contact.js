import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import Container from "../components/Container/Container.js";
import "./contact.css"

function Contact() {
  return (
    <Router>

      <div className="container">
        <Container style={{ marginTop: 30, }}>
          <Row>
            <Col style={{ marginBottom: 30, }}size="md-12 sm-12">
              <h1>Please feel free to reach out to be via the below information:</h1>
              <h3><strong>Email:</strong> Ljmart02@gmail.com</h3>
              <h3><strong>Phone Number: </strong>610-223-7880</h3>
              </Col>
              </Row>
          </Container>
            <Footer />
        </div>
      </Router>
    );
  }

export default Contact;