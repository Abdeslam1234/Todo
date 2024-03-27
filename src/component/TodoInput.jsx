import React from "react";
import { addTodo } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

function TodoInput() {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const [count, setCount] = React.useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo({ id: count, text: value, completed: false }));
          setValue("");
          setCount(count + 1);
        }}
      >
        <input
          id="input"
          type="text"
          placeholder="create  a new todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoInput;
