import React, { useEffect, useState } from "react";
import { getAllTodos } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

export const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listTodos();
  }, []);

  const listTodos = () => {
    getAllTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addNewTodo = () => {
    navigate("/add-todo");
  };

  const updateTodo = (id) => {
    navigate(`/update-todo/${id}`);
  };
  return (
    <div className="container">
      <h2 className="text-center">List of todos</h2>
      <button className="btn btn-primary mb-2" onClick={addNewTodo}>
        Add Todo
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Todo title</th>
              <th>Todo Description</th>
              <th>Todo Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "YES" : "NO"}</td>
                <td>
                  <button
                    className="btn btn-info mr-2"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
