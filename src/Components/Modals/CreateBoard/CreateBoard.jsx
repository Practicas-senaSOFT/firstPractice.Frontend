import React from "react";
import { Overlay } from "../../../StyledComponents/StyledComponents";
import "./CreateBoard.scss";
import axios from "axios";
import { AiOutlineCloseCircle} from "react-icons/ai";

export const CreateBoard = () => {
  const [visible, setVisible] = React.useState(false);

  const [boardName, setBoardName] = React.useState("");
  const [boardDescription, setBoardDescription] = React.useState("");

  const toggle = () => {
    setVisible(!visible);
  };

  const sendNewBoard = () => {
    axios
      .post("http://localhost:3001/boards", {
        title: boardName,
        description: boardDescription,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <button onClick={toggle}>Create Board</button>
      {visible && (
        <Overlay>
          <div className="createBoard-container">
            <div className="createBoard-Header">
                <AiOutlineCloseCircle onClick={toggle} />
            </div>
            <div className="createBoard-content">
              <input
                type="text"
                placeholder="Titulo del tablero"
                onChange={(e) => setBoardName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Descripción (opcional)"
                onChange={(e) => setBoardDescription(e.target.value)}
              />
              <button>Crear Tablero</button>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
};
