import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";


const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: [1],
    entities: {
        1: {
            id: "1",
            text: "Sample to do here!",
            done: false,
        },
    },
});


const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state, action.payload)
            return state;
        },
        ToggleTodo(state, action){
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            })
        },
        ToggleTodoRemove(state, action){
            todosAdapter.removeOne(state, action.payload)
        },
        addTodos(state, action) {
            todosAdapter.addMany(state, action.payload);
        }
    },
});

export default todosSlice.reducer;

export const {selectIds: selectTodoIds,
    selectById: selectTodoById,
    selectAll: selectTodos} = todosAdapter.getSelectors((state) => state.todoList);

export const selectDoneList = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done));

//export const { selectIds: selectTodoIds, selectById: selectTodoById } = todosAdapter.getSelectors((state) => state.todoList);

export const { AddTodo, ToggleTodo, ToggleTodoRemove, addTodos } = todosSlice.actions;