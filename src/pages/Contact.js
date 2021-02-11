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
        <div className= "container">
          <Container style={{ marginTop: 30, }}>

        <h1>Email: Ljmart02@gmail.com</h1>
        <h1>Phone Number: 610-223-7880</h1>
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }

export default Contact;