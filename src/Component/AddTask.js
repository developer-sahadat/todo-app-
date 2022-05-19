import React from "react";
import Header from "./Header";
import { toast } from "react-toastify";

const AddTask = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;

    fetch("https://pure-sands-03506.herokuapp.com/task", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => toast("successful added"));
  };

  return (
    <div>
      <Header />

      <div>
        <h3 className="text-center pt-5">Add Tasks</h3>
        <div className="w-25 mx-auto my-3">
          <form onSubmit={submitHandler}>
            <input
              name="name"
              className="w-100 mb-3 py-2"
              type="text"
              placeholder="Enter name"
            ></input>
            <textarea
              name="description"
              rows="4"
              cols="10"
              className="w-100 py-2"
              type="description"
              placeholder="Write Description"
            ></textarea>
            <button className="btn-grad">Completed Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
