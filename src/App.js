import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import background from "./assets/photos/skulls.png"



function App() {
  return (
    <Router>
      <div className="App" style={{ 
        backgroundImage: `url(${background})`,
        width: "auto",
        height: "1000px" }}>
        <Header />
        <Route exact path="/react-portfolio/" component={About} />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Portfolio" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
