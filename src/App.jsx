import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoListe from "./component/TodoListe";
import moon from "./assets/icon-moon.svg";
import bg from "./assets/bg-desktop-dark.jpg";
import Todo from "./component/Todo";
// import Counter from "./component/Counter";
const one = {
  display: "flex",
  justifyContent: "space-between",

  backgroundImage: "url(" + bg + ")",
  backgroundRepeat: "no-repeat",
  margin: "-200px -80px ",
  padding: "300px 300px 100px",
  width: "1500px",
  height: "-100px",
};

const jack = {
  position: "relative",
  left: "420px",
  top: "-30px",
  display: "flex",
  justifyContent: "space-between",

  width: "100%",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={jack}>
        <h1>TODO</h1>
        <img src={moon} id="moon1" alt="" height="24px" width="24px" />
      </div>

      <div style={one}></div>

      <TodoInput />
      <TodoListe />
      {/* <Counter /> */}

      <div className="footer">
        <footer>
          <div>
            <button>5 item left</button>
            <button>All</button>
            <button>active</button>
            <button>completed</button>
            <button>clear completed</button>
          </div>
        </footer>
        <p id="drop">Drog and drop to reorder list </p>
      </div>
    </>
  );
}

export default App;
