import React from 'react'
import { selectTodoById, ToggleTodo, ToggleTodoRemove } from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/TodoItem.css"

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))

    const dispatch = useDispatch();
    const removeDispatch = useDispatch;
    const todoStatus = todo.done ? "done" : "";

    function handeTodoClick(){
        dispatch(ToggleTodo(props.itemId));
    }

    function handleTodoRemove(event){
        event.stopPropagation();
        dispatch(ToggleTodoRemove(props.itemId));
    }

    return (
        <div>
            <ul 
            className = {`TodoItem-todo ${todoStatus}`}
            onClick = {handeTodoClick}>
                <li>{todo.text}
                <span 
                    className ="todoRemove" 
                    onClick = {handleTodoRemove}>x</span>
                </li>
            </ul>            
        </div>
    )
}

export default TodoItem
