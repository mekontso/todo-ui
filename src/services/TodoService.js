import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/v1/todo";

export const getAllTodos = () => axios.get(BASE_REST_API_URL + "/list");

export const saveTodo = (todo) => axios.post(`${BASE_REST_API_URL}/add`, todo);

export const getTodo = (id) => axios.get(`${BASE_REST_API_URL}/get/${id}`);

export const updateTodo = (id, todo) =>
  axios.put(`${BASE_REST_API_URL}/update/${id}`, todo);
