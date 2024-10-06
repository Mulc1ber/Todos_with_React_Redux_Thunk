import { initialState } from './initialState';

export const getTodoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_LIST_TODOS_REQUEST':
            return { ...state, listTodos: payload };
        case 'GET_LIST_TODOS_SUCCESS':
            return { ...state, isLoading: payload };
        case 'GET_LIST_TODOS_ERROR':
            return { ...state, inputTodo: payload };
        default:
            return state;
    }
};
