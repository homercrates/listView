

let nextId = 0;
const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    note: action.note,
                    amount: action.amount,
                    measure: action.measure,
                    completed: false,
                    got: false,
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(
                todo => (todo.id === action.id)
                    ? {...todo, completed: !todo.completed }
                    : todo 
                )
        case 'TOGGLE_GOT':
            return state.map(
                todo => (todo.id === action.id)
                    ? {...todo, got: !todo.got}
                    : todo
            )
        case 'DELETE_TODO':    
            return state.filter(
                todo => (todo.id !== action.id)
                    ? {...todo}
                    : null
            )
        default:
            return state
    }
}

export default todos;