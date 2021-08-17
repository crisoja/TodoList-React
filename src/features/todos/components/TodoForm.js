import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo } from '../reducers/todosSlice';
import "../styles/TodoForm.css"

function TodoForm() {

    const [inputText, setText] = useState("");
    const dispatch = useDispatch();

    function handleInputTextChange(event){
        setText(event.target.value);
        // console.log(event.target.value);
    }

    function handleInputTextAdd(){
        if(inputText === ''){
            alert("Don't leave your to do empty before adding!");
        }
        else{
            dispatch(AddTodo(inputText));
            setText("");
        }

    }

    return (
        <div className = "TodoForm">
            <input class = "inputText"
                type = "text"
                placeholder = "Put your todo here"
                value = {inputText}
                onChange = {handleInputTextChange}
            ></input>
            <button class = "addButton"
                onClick = {handleInputTextAdd}
            >Add</button>
        </div>
    )
}

export default TodoForm
