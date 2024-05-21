import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import CatGallery from "./components/CatGallery";
import DogGallery from './components/DogGallery';
import BirdGallery from './components/BirdGallery';

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
          <Route path="/CatGallery" >
            <CatGallery />
          </Route>
          <Route path="/doggallery" >
            <DogGallery />
          </Route>
          <Route path="/birdgallery" >
            <BirdGallery />
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
