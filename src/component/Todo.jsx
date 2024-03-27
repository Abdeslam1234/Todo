import React, { useState } from "react";
import { setcompleted, removeTodo } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

const texte = {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  top: "-140px",
  left: "440px",
  border: "1px solid black",
  borderRadius: "10px",
  boxShadow: "6px 7px 20px 8px #333",
  backgroundColor: "#25273b",
  width: "400px ",
  // textDecoration: isChecked ? "line-through" : "none",
};

const RoundCheckbox = ({ name, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const dispatch = useDispatch();

  return (
    <div>
      <div className="round-checkbox">
        <label className="container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark"></span>
        </label>
      </div>

      <p
        style={{
          ...texte,
          textDecoration: isChecked ? "line-through" : "none",
        }}
      >
        {name}
      </p>
      <button onClick={() => dispatch(removeTodo(id))}>x</button>
    </div>
  );
};

export default RoundCheckbox;
