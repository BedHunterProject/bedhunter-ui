import React from "react";
const Card = ({ title, address, price  }) => {
  return (
    <div className="card">
        <h2>{title}</h2>
        <p>{address}</p>
        <h3>{price}</h3>
        
    </div>
  );
};

export default Card;
