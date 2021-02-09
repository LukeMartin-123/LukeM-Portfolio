import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import Container from "../components/Container/Container.js";

function Contact() {
    return (
      <Router>
        <div>
          <Container style={{ marginTop: 30 }}>

          </Container>
          <Footer />
        </div>
      </Router>
    );
  }

export default Contact;