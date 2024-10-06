import { initialState } from './initialState';

export const getreducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_LIST_TODOS':
            return { ...state, listTodos: payload };
        case 'SET_IS_LOADING':
            return { ...state, isLoading: payload };
        case 'SET_INPUT_TODO':
            return { ...state, inputTodo: payload };
        case 'SET_SEARCH_VALUE':
            return { ...state, searchValue: payload };
        case 'SET_HAS_SORT':
            return { ...state, hasSort: payload };
        default:
            return state;
    }
};
