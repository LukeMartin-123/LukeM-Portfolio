import React from "react";
import CardBtn from "../CardBtn/CardBtn";
import "./styles.css";


function Card(props) {
    return (    
        <div className="ProjectCard"
        >
        <CardBtn
          onClick={props.handleBtnClick}
        />
      </div>
    );
  }
  
  export default Card;