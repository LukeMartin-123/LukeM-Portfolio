import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import Container from "../components/Container/Container.js";

function Skills() {
    return (
      <Router>
        <div>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">

              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }

export default Skills;