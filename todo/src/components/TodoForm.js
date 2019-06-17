import React, { Component } from 'react';

class TodoForm extends Component {
    state = {

    }
    
    handleChanges = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={() => {}}> */}
                <form>
                    <input 
                        type="text" 
                        placeholder="to-do here" 
                        name=""
                        // value={}
                        // onChange={}
                    />
                    <button type="submit">Add to List</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;
