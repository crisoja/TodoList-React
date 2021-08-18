import React from 'react'
import { selectDoneList } from '../reducers/todosSlice'
import { useSelector } from 'react-redux';



function DoneList() {
     const todos = useSelector(selectDoneList);

    return (
        <div>
            <h1>Done to do List!</h1>
            {todos.map((todo) =>  <h4>{todo.text}</h4>)}
        </div>
    )
}

export default DoneList
