import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import Container from "../components/Container/Container.js";
import Card from "../components/Card/Card";
import "./projects.css"


const Projects = () => {
    return (
        <Router>
            <div>
                <Row>
                    <Col size="md-4 sm-12 m-auto">
                        <Card 
                        id={1}
                        />
                    </Col>
                    <Col size="md-4 sm-12 m-auto">
                    <Card 
                        id={2}
                        />
                    </Col>
                    <Col size="md-4 sm-12 m-auto">
                    <Card 
                        id={3}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4 sm-12 m-auto">
                    <Card 
                        id={4}
                        />
                    </Col>
                    <Col size="md-4 sm-12 m-auto">
                    <Card 
                        id={5}
                        />
                    </Col>
                    <Col size="md-4 sm-12 m-auto">
                    <Card 
                        id={6}
                        />
                    </Col>
                </Row>
                <Footer />
            </div>
        </Router>
    );
}

export default Projects;