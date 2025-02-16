
import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = props => {
    // console.log(props);
    return (
        <div>
            {props.todos.map(todo => {
                return <Todo {...todo} key={todo.id} />
            })}
            
        </div>
    );
};

const mapStateToProps = state => {
    
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);
