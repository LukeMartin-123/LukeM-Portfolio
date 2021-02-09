import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
                        <Col size="md-6 sm-12">
                            <h1>Jumbotron with Web-Dev Skills will go here</h1>
                        </Col>
                        <Col size="md-6 sm-12">
                            <h1>Jumbotron with Accnt Managment Skills will go here</h1>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </Router>
    );
}

export default Skills;