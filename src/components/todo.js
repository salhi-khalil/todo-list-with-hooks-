import React from "react";

//step4: display the task

export default function Todo({ task, deleteHandler, doneHandler }) {
  const deleteTodo = () => {
    deleteHandler(task.id);
  };

  const doneTodo = () => {
    doneHandler(task.id);
  };
  return (
    <div className="todoContainer">
      <h3
        className={task.isDone ? "done" : "undone"}
        style={task.isDone ? { textDecoration: "line-through" } : {}}
      >
        {" "}
        {task.text}{" "}
      </h3>
      <div className='todoBtns' >
        <button onClick={deleteTodo}> <i class="far fa-trash-alt"></i> </button>
        <button onClick={doneTodo}> {task.isDone ? <i class="fas fa-check-circle"></i> :   <i class="far fa-check-circle"></i>}   </button>
      </div>
    </div>
  );
}
