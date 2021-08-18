import api from "./api";

const getTodos = () => {
    return api.get("/todos");
}

const createTodo = (text) => {
    return api.post("/todos", {text})
}

const updateTodo = (id, updateTodo) => {
    return api.put(`/todos/${id}`, updateTodo)
}

const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`)
}

export {getTodos, createTodo,  updateTodo, deleteTodo}