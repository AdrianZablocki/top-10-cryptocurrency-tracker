import React from 'react';
import './Button.css'

const button = (props) => (
  <button className={props.btnStyle} id={props.id} onClick={props.clicked}>{props.text}</button>
);

export default button;