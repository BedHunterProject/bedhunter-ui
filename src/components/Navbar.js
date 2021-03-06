import React, { Component } from 'react'
import logo from '../images/logoHotel.svg' //a hotel logója még készül egyenlőre beraktam egy kis icont
import {FaAlignRight} from 'react-icons/fa' //reactos kis iconok: https://react-icons.github.io/react-icons/
import {Link} from 'react-router-dom' 





export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToogle = () => {
        this.setState({isOpen:!this.state.isOpen})
    };

    



  render() {
    return (
      <nav className="navbar">
          <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
                <img src = {logo} alt="Bed Hunter"/>
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToogle}>
            <FaAlignRight className="nav-icon"/> 
            </button>
              </div>
              <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
              <li>
                <Link to="/">Home</Link>  
              </li> 
              <li>
                <Link to="/hotels">Hotels </Link>
              </li>
              <li>
                <Link to="/rooms">Promotions</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
              <Link className="nav-link" to={"/login"}>Sign in</Link> 
              </li>
              </ul>
          </div>
      </nav>
    )
  }
}
