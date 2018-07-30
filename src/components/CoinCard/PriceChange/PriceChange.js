import React from 'react';

const priceChange = (props) => (
  <span className={props.changeClass > 0 ? 
    "card-price card-price__changed card-price__changed-plus" : 
    "card-price card-price__changed card-price__changed-minus"}>
    <span className="card-price card-price__changed">{props.text}</span>{props.change}%
  </span>
);

export default priceChange;
