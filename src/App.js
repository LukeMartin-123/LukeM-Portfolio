import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import headshot from "./assets/photos/headshot.jpg";
import Row from "./components/Row/Row.js";
import Col from "./components/Col/Col.js";
import Container from "./components/Container/Container.js";
import "./app.css"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Container style={{ marginTop: 30 }}>
          <Row>
          
          </Row>
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
    </Router>
  );
}

export default App;
