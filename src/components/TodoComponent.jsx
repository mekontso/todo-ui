import React from "react";
import { useState } from "react";
import { saveTodo } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const saveOrUpdateTodo = (e) => {
    e.preventDefault();

    const todo = { title, description, completed };
    console.log(todo);

    saveTodo(todo)
      .then((response) => {
        console.log(response.data);
        navigate("/todos");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Todo</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Todo title</label>
                <input
                  className="form-control"
                  placeholder="Enter todo title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Todo Description</label>
                <input
                  className="form-control"
                  placeholder="Enter todo description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Todo completed:</label>
                <select
                  className="form-control"
                  value={completed}
                  name="completed"
                  onChange={(e) => setCompleted(e.target.value)}
                >
                  <option value="false">NO</option>
                  <option value="true">YES</option>
                </select>
              </div>
              <button
                className="btn btn-success"
                onClick={(e) => saveOrUpdateTodo(e)}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
