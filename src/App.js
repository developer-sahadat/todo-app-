import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddTask from "./Component/AddTask";
import Homepage from "./Component/Homepage";
import Login from "./Component/Login";
import NotFoundPage from "./Component/NotFoundPage";
import TodoApp from "./Component/TodoApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
