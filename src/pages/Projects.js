import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import Container from "../components/Container/Container.js";

function Projects() {
    return (
        <Router>
            <div>
                <Row>
                    <Col size="md-4">
                        <h1>Project Card</h1>
                    </Col>
                    <Col size="md-4">
                        <h1>Project Card</h1>
                    </Col>
                    <Col size="md-4">
                        <h1>Project Card</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                        <h1>Project Card</h1>
                    </Col>
                    <Col size="md-4">
                        <h1>Project Card</h1>
                    </Col>
                    <Col size="md-4">
                        <h1>Project Card</h1>
                    </Col>
                </Row>
                <Footer />
            </div>
        </Router>
    );
}

export default Projects;