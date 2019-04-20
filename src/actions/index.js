import { ADD_TODO, TOGGLE_TODO, TOGGLE_GOT, DELETE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

let nextId = 0;
export const addTodo = (text, note, amount, measure) => ({
    type: ADD_TODO,
    id: nextId++,
    text,
    note,
    amount,
    measure,
})
//**********----------- when i hooks this up to firebase dont use this nextId++ crap  do a proper id assignment 

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
})

export const toggleGot = (id) => ({
    type: TOGGLE_GOT,
    id,
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter,
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}