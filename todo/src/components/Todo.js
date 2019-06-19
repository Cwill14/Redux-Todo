import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({ id, content, toggleTodo, isCompleted }) => {

    const handleChanges = e => {
        toggleTodo(id);
    }

    return (
        <div className="todo-container">
            <p>{content}</p>
            <input 
                type="checkbox" 
                checked={isCompleted} 
                onChange={handleChanges} 
            />
        </div>
    )
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps,{ toggleTodo })(Todo);