import React from "react";
import "./AllBoards.scss";
import { AiOutlineUser } from "react-icons/ai";
import { RiLoader5Line } from "react-icons/ri";

export const AllBoards = ({ BoardsData, dataState }) => {
  return (
    <div className="allBoards-container">
      <div className="Boards-Header">
        <AiOutlineUser className="header-icon" />
        <h1 resource="title">Todos tus tableros</h1>
      </div>
      <div className="Boards-resourses">
        {dataState ? (
          <div>
            {BoardsData.map((board) => (
              <div className="Boards-resourses-item" key={board.id}>
                <div className="Boards-resourses-item-header">
                  <h2>{board.title}</h2>
                  <p>{board.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="loader">
            <RiLoader5Line className="loader-icon" />
            <h2>No tienes tableros creados aun</h2>
            <button>Nuevo tablero</button>
          </div>
        )}
      </div>
    </div>
  );
};
