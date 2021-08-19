import React, { useState } from 'react';
import { selectTodoById, ToggleTodo, ToggleTodoRemove } from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/TodoItem.css"
import {updateTodo, deleteTodo} from '../apis/todos';
import {FormOutlined} from '@ant-design/icons';
import {Modal} from 'antd';

function TodoItem(props) {
    const todo = useSelector((state) => selectTodoById(state, props.itemId))
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [todoText, setTodoText] = useState("");

    const todoStatus = todo.done ? "done" : "";

    function handleTodoClick(){
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

    function handleTodoChange (event) {
        setTodoText(event.target.value);
    }

    const showModal = (event) => {
        if(todo.done){
            alert("You can't update done To do!")
            event.stopPropagation();
        }
        else{
        setIsModalVisible(true);
        event.stopPropagation();
        }
    }

    const handleOk = (event) => {
        if (todoText === ""){
            setIsModalVisible(false);
            event.stopPropagation();
        }
        else{
            updateTodo(props.itemId, {text: todoText}).then((response) => {
                dispatch(ToggleTodo({id:props.itemId, updateTodo: response.data}));
            });
            event.stopPropagation();
            setIsModalVisible(false);;
            setTodoText("");
        }
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className = {`TodoItem-todo ${todoStatus}`}
         onClick = {handleTodoClick}>
        {todo.text}  <span className = "todoRemove"
         onClick = {handleTodoRemove}>X</span>
          <Modal title="Update your todo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <input
                    style = {{width: 450}}
                    placeholder = {todo.text}
                    value = {todoText}
                    onChange = {handleTodoChange}
                />
            </Modal>   

            <FormOutlined className="FormOutline"
            onClick={showModal}
       ></FormOutlined>
    </div>

    )
}

export default TodoItem
