import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import Card from "../components/Card/Card";
import Container from "../components/Container/Container.js";
import "./skills.css"

function Skills() {
    return (
        <Router>
            <div>
                <Container style={{ marginTop: 30 }}>
                    <Row>
                        <Col size="md-6 sm-12">
                            <Card
                            id={7} />
                        </Col>
                        <Col size="md-6 sm-12">
                        <Card
                            id={8} />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </Router>
    );
}

export default Skills;