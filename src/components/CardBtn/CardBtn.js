import React from "react";
import "./styles.css";

function CardBtn(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={`card-btn ${props["data-value"]}`}    
      data-value={props["data-value"]} 
    />
  );
}

export default CardBtn;
