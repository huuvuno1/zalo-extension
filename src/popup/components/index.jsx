import ReactDOM from "react-dom";
import TodoList from "./TodoList.jsx/index.js";
import "./styles.css";

// Project for Udemy react bootcamp
// https://www.udemy.com/course/modern-react-bootcamp/

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
