import React from "react";
import logo from '../images/logoHotel.svg'
import {Link} from 'react-router-dom' 
import {FaGithub} from 'react-icons/fa'

  
const Footer = () => {
  return (
    
  
    <footer className="footer">
      <section className="footer-social-media">
      <FaGithub/> 
      <Link to={{pathname: "https://github.com/BedHunterProject"}} target="_blank" rel="noreferrer">Github</Link>
      </section>
      <section className="footer-information">
        <section className="footer-logo">
          <section className="footer-information-returns">
          <img src = {logo} alt="Bed Hunter"/>
          </section>        
        </section>
        <section className="footer-information-center">
          <section className="footer-information-email">
            <br/>
            bedhunter@gmail.com
          </section>
          <section className="footer-information-terms">
            Bedhunter 2022
            <br />
            &copy; Copyright
          </section>
        </section>
        <section className="footer-information-right">
          <section className="footer-information-contact">
        <Link to="/contact">Contact oldal</Link>
          <br/>
          </section>
        </section>
      </section>
      </footer>
  );
};
export default Footer;