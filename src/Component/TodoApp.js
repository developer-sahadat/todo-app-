import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./style/TodoApp.css";

const TodoApp = () => {
  return (
    <div>
      <Header />

      <div className="add_task_btn">
        <Link className="link" to="/add-task">
          {" "}
          <button className="btn-grad">Add Task</button>
        </Link>
      </div>
    </div>
  );
};

export default TodoApp;
