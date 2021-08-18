import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo } from '../reducers/todosSlice';
import { createTodo } from "../apis/todos";
import "../styles/TodoForm.css";
import { Button,Input } from 'antd';


function TodoForm() {

    const [inputText, setText] = useState("");
    const dispatch = useDispatch();

    function handleInputTextChange(event){
        setText(event.target.value);
        // console.log(event.target.value);
    }

    function handleInputTextAdd(){
        if(inputText !== "") {
            createTodo(inputText).then((response) => {
                dispatch(AddTodo(response.data));
            });
            setText("");
         }     
     }

    return (
        <div className = "TodoForm">
        <Input className="Input" 
        placeholder="Put your todo here" 
        onChange={handleInputTextChange} value={inputText}></Input>
  
            <Button className="AddButton" type="primary" shape="circle" onClick={handleInputTextAdd}>Add</Button>
            {/* <input class = "inputText"
                type = "text"
                placeholder = "Put your todo here"
                value = {inputText}
                onChange = {handleInputTextChange}
            ></input> */}
            {/* <button class = "addButton"
                onClick = {handleInputTextAdd}
            >Add</button> */}
        </div>
    )
}

export default TodoForm;
