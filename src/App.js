import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Wrapper>
      <Route exact path="/" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
      </Wrapper>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
