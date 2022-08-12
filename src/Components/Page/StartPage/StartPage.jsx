import axios from "axios";
import React from "react";
import { AllBoards } from "../../Layout/AllBoards/AllBoards";
import { BoardForm } from "../../Layout/BoardForm/BoardForm";
import "./StartPage.scss";

export const StartPage = () => {
  const [boardsData, setBoardsData] = React.useState([]);
  const [dataState, setDataState] = React.useState(true);

  const getBoards = () => {
    axios
      .get("/api/boards")
      .then((res) => {
        setBoardsData(res.data);
        setDataState(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setDataState(true);
      });
  };
  return (
    <div className="startPage-container">
      <BoardForm />
      <AllBoards dataState={dataState} BoardsData={boardsData} />
    </div>
  );
};
