import React from 'react'
import { useEffect } from 'react';
import TodoItem from './TodoItem'
import { selectTodoIds, addTodos } from '../reducers/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import {getTodos} from "../apis/todos"

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds)
    const dispatch = useDispatch();
    
    useEffect(() => {
        getTodos().then((response) => {
            dispatch(addTodos(response.data));
        })
    }, [])
    
    return (
        <div>
            {
                todoIds.map((id) => (
                    <TodoItem key={id} itemId={id} />
                ))
            }
        </div>
    )
}

export default TodoGroup
