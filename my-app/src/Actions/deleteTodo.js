export const deleteTodo = (id) => {
    return async (dispatch) => {
        try {
            await fetch(`http://localhost:3005/todos/${id}`, {
                method: 'DELETE',
            });
            dispatch({ type: 'DELETE_TODO', payload: id });
        } catch (error) {
            console.log(error);
        }
    };
};
