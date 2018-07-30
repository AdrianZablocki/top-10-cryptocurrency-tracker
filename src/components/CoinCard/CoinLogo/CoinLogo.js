import React from 'react';

const coinLogo = (props) => (
  <div>
    <img className="card-img" src={props.img} alt={props.title} />
    <div className="card-symbol">{props.symbol}</div>   
  </div>
);

export default coinLogo;