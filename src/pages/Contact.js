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
  <div class="contact-container">
  <div class="contact-card">
    <img src="https://cdn-icons-png.flaticon.com/512/146/146025.png" class="card-image"></img>
    <p class="card-name">Contact1</p>
    <div class="grid-container">
    <br/>
      <div class="">
        Elérhetőség
      </div>
    </div>
    <ul class="social-icons">
    <FaGithub/> 
      <li><Link to="/contact">Github</Link></li>
      <br/>
    <FaFacebook/> 
    <li><Link to="/contact">Facebook</Link></li>
    <br/>
    <FaInstagram/> 
      <li><a><Link to="/contact">Instagram</Link></a></li>
      <br/>

    </ul>
    <button class="contact-btn">Üzenet</button>

  </div>
  <div class="contact-card">
    <img src="https://esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-3.png" class="card-image"></img>
    <p class="card-name">Contact2</p>
    <div class="grid-container">
    <br/>
      <div class="">
        Elérhetőség
      </div>
    </div>
    <ul class="social-icons">
    <FaGithub/> 
      <li><Link to="/contact">Github</Link></li>
      <br/>
    <FaFacebook/> 
    <li><Link to="/contact">Facebook</Link></li>
    <br/>
    <FaInstagram/> 
      <li><a><Link to="/contact">Instagram</Link></a></li>
      <br/>

    </ul>
    <button class="contact-btn">Üzenet</button>
  </div>
  <div class="contact-card">
    <img src="https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg" class="card-image"></img>
    <p class="card-name">Contact3</p>
    <div class="grid-container">
    <br/>
      <div>Elérhetőség</div>
    </div>
    <ul class="social-icons">
    <FaGithub/> 
      <li><Link to="/contact">Github</Link></li>
      <br/>
    <FaFacebook/> 
    <li><Link to="/contact">Facebook</Link></li>
    <br/>
    <FaInstagram/> 
      <li><a><Link to="/contact">Instagram</Link></a></li>
      <br/>
    </ul>
    <button class="contact-btn">Üzenet</button>
  </div>
</div>
</div>
</>
}
export default Contact