import React from "react";
import "Board.scss";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

export const Board = () => {
  const board = {
    columns: [
      {
        id: 1,
        title: "Backlog",
        cards: [
          {
            id: 1,
            title: "Add card",
            description: "Add capability to add a card in a column",
          },
        ],
      },
      {
        id: 2,
        title: "Doing",
        cards: [
          {
            id: 2,
            title: "Drag-n-drop support",
            description: "Move a card between the columns",
          },
        ],
      },
    ],
  };
  return (
    <div className="Board-container">
      <Board initialBoard={board} />
    </div>
  );
};
