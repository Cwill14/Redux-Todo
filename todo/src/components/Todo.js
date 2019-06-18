import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../actions';

class Todo extends React.Component {
    state = {
        isCompleted: false
    }

    handleChanges = () => {
        this.setState({ isCompleted: !this.state.isCompleted });
    }

    render() {
        return (
            <div>
            <p>{this.content}</p>
            <input type="checkbox" value={this.state.isCompleted} onChange={this.handleChanges} />
        </div>
        )
    }
}

export default Todo;const mapStateToProps = () => ({})

export default connect(mapStateToProps,{ addNewTodo })(Todo);