import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./style/TodoApp.css";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [load, setload] = useState(false);
  useEffect(() => {
    fetch("https://pure-sands-03506.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [load]);

  const deleteHandler = (id) => {
    fetch(`https://pure-sands-03506.herokuapp.com/task/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => setload(!load));
  };

  return (
    <div>
      <Header />

      <div className="add_task_btn">
        <Link className="link" to="/add-task">
          <button className="btn-grad">Add Task</button>
        </Link>

        <div className="mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th> Name</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {task?.map((tasks, index) => (
                <tr key={tasks?._id}>
                  <td>{index + 1}</td>
                  <td>{tasks.name}</td>
                  <td>{tasks.description}</td>
                  <td>
                    <button
                      onClick={() => deleteHandler(tasks._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
