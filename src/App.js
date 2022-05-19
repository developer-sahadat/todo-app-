import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddTask from "./Component/AddTask";
import Homepage from "./Component/Homepage";
import Login from "./Component/Login";
import NotFoundPage from "./Component/NotFoundPage";
import TodoApp from "./Component/TodoApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Component/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todo-app"
          element={
            <RequireAuth>
              <TodoApp />
            </RequireAuth>
          }
        />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
