import React from "react";
import {Link} from 'react-router-dom'


const Card = ({ title, address, price  }) => {
  return (
    <div className="card">
        <h2>{title}</h2>
        <p>{address}</p>
        <h3>{price}</h3>
        <Link className="contact-btn" to="/finish">Foglalás</Link>
    </div>
  );
};

export default Card;
