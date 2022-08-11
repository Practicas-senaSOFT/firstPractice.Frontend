import React from "react";
import "./BoardForm.scss";
import { BsClipboardData, BsCalendarDate } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import "../../../Sass/Variables/_Variables.scss";
import logo from '../../../assets/logo.ico';


export const BoardForm = () => {
  return (
    <div className="boardForm-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h2>TodoList | App</h2>
      </div>
      <div className="options-container">
        
          <div className="option-content">
            <BsClipboardData className="option-icon" />
            <p>Tableros</p>
        </div>
        <div className="option-content">
          <BsCalendarDate className="option-icon" />
          <p>Calendario</p>
        </div>
        <div className="option-content">
          <ImExit className="option-icon" />
          <p>Salir</p>
        </div>
      </div>
    </div>
  );
};
