import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
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
        case 'ADD_TODO':
            return { ...state, listTodos: [...state.listTodos, payload] };
        case 'DELETE_TODO':
            return { ...state, listTodos: state.listTodos.filter((todo) => todo.id !== payload) };
        case 'UPDATE_TODO':
            return {
                ...state,
                listTodos: state.listTodos.map((todo) => {
                    if (todo.id === payload.id) {
                        return { ...todo, title: payload.title };
                    } else {
                        return todo;
                    }
                }),
            };
        default:
            return state;
    }
};
