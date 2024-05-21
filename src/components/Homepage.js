import React from "react";
import "./Homepage.css";
import AboutUs from "../assets/aboutus.jpg";
import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage">
       <h2 className="title">Choose an animal group</h2>
      <div className="container">
        <Link to="/CatGallery">
        <button className="cat-button">
          <h1 className="cat-name">CATS</h1>
        </button>
        </Link>
        <Link to="/doggallery">
        <button className="dog-button">
          <h1 className="dog-name">DOGS</h1>
        </button>
        </Link>
        <Link to="/birdgallery">
        <button className="bird-button">
          <h1 className="bird-name">BIRDS</h1>
        </button>
        </Link>
      </div>
      <section id="about-us" className="about-us-section">
        <h2 className="about-us-title">About us</h2>
        <div className="about-us-content">
          <img src={AboutUs} alt="image" className="about-us-image" />
          <div>
            <p className="about-us-para">
              Welcome to our website! At PET EXPO, we're passionate about
              animals and committed to providing valuable information about
              various breeds of cats, dogs, and birds. We strive to provide
              accurate and up-to-date information to help you make informed
              decisions about pet ownership. Whether you're a seasoned pet owner
              or considering adding a new member to your family, we're here to
              support you every step of the way. Explore our website to discover
              more about your favorite breeds and embark on a rewarding journey
              of companionship with your furry or feathered friend!
            </p>
          </div>
        </div>
      </section>
      <section id="contact-us" className="contact-us-section">
        <h2 className="contact-us-title">Contact us</h2>
        <div className="contact-us-content">
          <div className="contact-info">
            <div className="contact-info-left">
              <div className="contact-item-phone">
                <i className="fas fa-phone-alt contact-icon"></i>
                <span className="contact-text">+1 (234) 567-890</span>
              </div>
              <div className="contact-item-email">
                <i className="fas fa-envelope contact-icon"></i>
                <span className="contact-text">contact@example.com</span>
              </div>
            </div>
            <div className="contact-form">
              <h2>Leave Us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
}

export default Homepage;
