import "./App.css";
import AddTodo from "./components/addTodo";
import Todolist from "./components/todolist";
import { useState } from "react";

//step1: creat the fake data
//step2 : pass the table as props to the todolist
// const todos = [
//   { text: "save the galaxy", id: 1 },
//   { text: "walk the cat ", id: 2 },
//   { text: "attend the workshop ", id: 3 }
// ];

function App() {
  const [todos, setTodos] = useState([
    { text: "save the galaxy", id: 1, isDone: false },
    { text: "walk the cat ", id: 2, isDone: false },
    { text: "attend the workshop ", id: 3, isDone: false },
  ]);

  const deleteHandler = (ID) => {
    setTodos(todos.filter((el) => el.id !== ID));
  };

  const doneHandler = (ID) => {
    setTodos(
      todos.map((el) => (el.id === ID ? { ...el, isDone: !el.isDone } : el))
    );
    console.log(todos.map((el) => el.id));
  };
  const [input, setInput] = useState("");
  const addHandler = (newTodo) => {
    input&&
    setTodos([...todos, newTodo])
  };
  return (
    <div className="App">
      <h1>TODO APP!!</h1>
      <AddTodo addHandler={addHandler} input={input} setInput={setInput} />
      <Todolist
        todoList={todos}
        deleteHandler={deleteHandler}
        doneHandler={doneHandler}
      />
    </div>
  );
}

export default App;
//every and each value in JS is truthy exept for 0,-0,false,null , undefined,""