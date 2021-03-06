import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo, toggleGot, deleteTodo} from '../actions';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Uknown filter: ' + filter)
    }
}


const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch( toggleTodo(id) ),
    toggleGot: id => dispatch( toggleGot(id) ),
    deleteTodo: id => dispatch( deleteTodo(id) ),
})
    

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

