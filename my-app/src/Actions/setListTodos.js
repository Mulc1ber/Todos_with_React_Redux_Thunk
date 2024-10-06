export const setListTodos = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3005/todos');
            const loadedTodos = await response.json();
            dispatch({ type: 'SET_LIST_TODOS', payload: loadedTodos });
        } catch (error) {
            console.error(error);
        }
    };
};
