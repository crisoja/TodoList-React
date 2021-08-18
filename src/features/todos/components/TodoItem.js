import React from 'react'
import { selectTodoById, ToggleTodo, ToggleTodoRemove } from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/TodoItem.css"
import {updateTodo, deleteTodo} from '../apis/todos';

function TodoItem(props) {
    const todo = useSelector((state) => selectTodoById(state, props.itemId))
    const dispatch = useDispatch();

    const todoStatus = todo.done ? "done" : "";

    function handeTodoClick(){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
            console.log("response: ", response);
            dispatch(ToggleTodo({id: props.itemId, updateTodo: response.data}));
        });
    }
    function handleTodoRemove(event){
        event.stopPropagation();
        deleteTodo(todo.id).then((response) => {
            console.log("response: ", response);
            dispatch(ToggleTodoRemove(todo.id));
        })
    }

    return (
        <div className = {`TodoItem-todo ${todoStatus}`}
         on onClick = {handeTodoClick}>
        {todo.text}  <span className = "todoRemove"
         onClick = {handleTodoRemove}>X</span>
    </div>
    )
}

export default TodoItem
