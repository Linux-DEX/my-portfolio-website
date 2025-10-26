import { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="Card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="Card-image">
        <img src={props.image} alt="" className="project-img" />
      </div>
      <div className="Card-title">
        <h2 className="project-title">{props.title}</h2>
        <h3 className={`project-description ${hovered ? "hovered" : ""}`}>
          {hovered ? "Go to Project →" : props.description}
        </h3>
      </div>
    </div>
  );
};

export default Card;
