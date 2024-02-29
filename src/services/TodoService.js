import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/v1/todo";

export const getAllTodos = () => axios.get(BASE_REST_API_URL + "/list")