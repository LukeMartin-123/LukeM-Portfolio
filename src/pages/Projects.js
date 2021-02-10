import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Row from "../components/Row/Row.js";
import Col from "../components/Col/Col.js";
import Container from "../components/Container/Container.js";
import Card from "../components/Card/Card";


Const Portfolio = [
{
    id: 1
    title: "Shop & Chef";
    description: "This is a full-stack application that allows the user to create custom shopping lists and find new recipes. It also allows the user to add ingredients directly from a recipe to their shopping list!"
    link: "https://shop-n-chef.herokuapp.com/"
}


]





function Projects() {
    return (
        <Router>
            <div>
                <Row>
                    <Col size="md-4 m-auto">
                        <Card />
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