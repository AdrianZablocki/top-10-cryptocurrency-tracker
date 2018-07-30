import React from 'react';

const price = (props) => (
  <div className="card-name__wrapper">
    <h2 className="card-name">{props.name}</h2> 
    <span className="card-price">{props.price}</span>  
    <span className="card-price card-price__symbol">{props.symbol}</span>  
  </div>
);

export default price;