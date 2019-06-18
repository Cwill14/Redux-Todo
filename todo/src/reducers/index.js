import { ADD_NEW_TODO } from '../actions';

const initialState = {
    todos: [
        { content: 'wash the dishes', completed: true},
        { content: 'take out the trash', completed: false }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            const newTodo = { content: action.payload, completed: false }    
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        default: 
            return state;
    }
}