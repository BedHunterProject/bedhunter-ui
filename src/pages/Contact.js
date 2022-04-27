import React from "react";
import HeroComponent from "../components/HeroComponent";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom' 
import {FaGithub,FaFacebook,FaInstagram} from 'react-icons/fa'


const Contact = () => {
  return <>
  <HeroComponent hero="contactHero">
    <Banner title="Contact">
    </Banner>
  </HeroComponent>
  <div>
  <div className="contact-container">
  <div className="contact-card">
    <img src="https://cdn-icons-png.flaticon.com/512/146/146025.png" className="card-image"></img>
    <p className="card-name">Contact1</p>
    <div className="grid-container">
    <br/>
      <div className="">
        Elérhetőség
      </div>
    </div>
    <ul className="social-icons">
    <FaGithub/> 
      <li><Link to="/contact">Github</Link></li>
      <br/>
    <FaFacebook/> 
    <li><Link to="/contact">Facebook</Link></li>
    <br/>
    <FaInstagram/> 
      <li><Link to="/contact">Instagram</Link></li>
      <br/>

    </ul>
    <button className="contact-btn">Üzenet</button>

  </div>
  <div className="contact-card">
    <img src="https://esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-3.png" className="card-image"></img>
    <p className="card-name">Contact2</p>
    <div className="grid-container">
    <br/>
      <div className="">
        Elérhetőség
      </div>
    </div>
    <ul className="social-icons">
    <FaGithub/> 
      <li><Link to="/contact">Github</Link></li>
      <br/>
    <FaFacebook/> 
    <li><Link to="/contact">Facebook</Link></li>
    <br/>
    <FaInstagram/> 
      <li><Link to="/contact">Instagram</Link></li>
      <br/>

    </ul>
    <button className="contact-btn">Üzenet</button>
  </div>
  <div className="contact-card">
    <img src="https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg" className="card-image"></img>
    <p className="card-name">Contact3</p>
    <div className="grid-container">
    <br/>
      <div>Elérhetőség</div>
    </div>
    <ul className="social-icons">
    <FaGithub/> 
      <li><Link to="/contact">Github</Link></li>
      <br/>
    <FaFacebook/> 
    <li><Link to="/contact">Facebook</Link></li>
    <br/>
    <FaInstagram/> 
      <li><Link to="/contact">Instagram</Link></li>
      <br/>
    </ul>
    <button className="contact-btn">Üzenet</button>
  </div>
</div>
</div>
</>
}
export default Contact