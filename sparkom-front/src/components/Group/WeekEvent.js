import React from "react";
import "../../assets/css/Sidebar.css";
import "../../assets/css/Widgets.css";
import "../../assets/css/main.css";
import event from "../../assets/img/avatar48-sm.jpg";
import "../../assets/svg-icons/sprites/icons.svg";
import "../../assets/svg-icons/back-to-top.svg";
export default function WeekEvent(props) {
  return (
    
    <div className="widget w-birthday-alert">
      <div className="icons-block">
        <svg className="olymp-cupcake-icon">
          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon" />
        </svg>
        <a href="." className="more">
          <svg className="olymp-three-dots-icon">
            <use xlinkHref="svg-icons/sprites/icons.svg#olymp-three-dots-icon" />
          </svg>
        </a>
      </div>
      <div className="content">
        <div className="author-thumb">
          <img src={event} alt="author" />
        </div>
        <span>Please</span>
        <a href="." className="h4 title">
          Check Our Events 
        </a>
        <p>Event of the Week !!!</p>
      </div>
    </div>
  );
}
