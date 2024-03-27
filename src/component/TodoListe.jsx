import React from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";

function TodoListe() {
  const Todos = useSelector((state) => state.todo.Todos);

  console.log(Todos);
  return (
    <div>
      {Todos.map((item, index) => (
        <Todo key={index} name={item.text} id={item.id} complted={item.true} />
      ))}
    </div>
  );
}

export default TodoListe;
