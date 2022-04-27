import React from "react";
const PromotionsCard = ({ beds_number, hotel_name, date_start, date_end, price  }) => {
  return (

    <div className="card">
        <h3>{hotel_name}</h3>
        <b>{beds_number} ágyas szoba</b>
        <br />
        <p>{date_start}-tól</p>
        <p>{date_end}-ig</p>
        <b>{price} Ft/fő/éj</b>
        
    </div>
  );
};

export default PromotionsCard;
