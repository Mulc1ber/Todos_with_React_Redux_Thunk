export const updateTodo = (id, updatedData) => {
    return async (dispatch) => {
        try {
            await fetch(`http://localhost:3005/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({ title: updatedData }),
            });
            dispatch({ type: 'UPDATE_TODO', payload: { id, title: updatedData } });
        } catch (error) {
            console.log(error);
        }
    };
};
