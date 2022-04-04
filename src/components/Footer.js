import React from "react";
  
const Footer = () => {
  return (
<section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="https://github.com/BedHunterProject" target="_blank" rel="noreferrer">Github</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info-name">
              BedHunter
          </section>
          <section className="footer-info-returns">
            Logó
            <br />
            Szöveg
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info-email">
            Email
          </section>
          <section className="footer-info-terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info-number">
            elérhetőség
          </section>
          <section className="footer-info-contact">
            Contact (contact oldal)
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
};
export default Footer;