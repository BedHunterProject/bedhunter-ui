import React from "react";
import logo from '../images/logoHotel.svg'
import {Link} from 'react-router-dom' 
import {FaGithub} from 'react-icons/fa'
  
const Footer = () => {
  return (
    
  
    <footer className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
      <FaGithub/> 
        <a href="https://github.com/BedHunterProject" target="_blank" rel="noreferrer">Github</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info-returns">
          <img src = {logo} alt="Bed Hunter"/>
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info-email">
            Email
          </section>
          <section className="footer-info-terms">
            Terms and Conditions
            <br />
            &copy; Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info-contact">
          <Link to="/contact">Contact</Link>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
      </footer>
  );
};
export default Footer;