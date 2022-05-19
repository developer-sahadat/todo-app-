import React from "react";
import { Link } from "react-router-dom";
import "./style/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="">
        <Link to="/todo-app" className="link">
          <button className="btn-grad">Todo App</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
