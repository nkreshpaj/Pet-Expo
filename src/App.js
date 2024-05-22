import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Router>
      <Navbar scrollToSection={scrollToSection} />
        <Switch >
            <Route path="/gallery/:type" 
            children={<Gallery />}>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
