import React from "react";
import './OtherCard.css';
import './Card.css';

const OtherCard = (props) => {
  return (
      <div className="main-container">
    <div className="other-card-container" style={{ color: `${props.color}` }}>
      <div>
        <p>{props.value}</p>
        {props.icon}
      </div>
      <div className="center">{props.icon}</div>
      <div className="invert">{props.icon}</div>
    </div>
    </div>
  );
};

export default OtherCard;
