export const addTodo = (inputTodo) => {
    return async (dispatch) => {
        try {
            if (!inputTodo) {
                console.log('Нечего добавлять');
                return;
            } else {
                const rawResponse = await fetch('http://localhost:3005/todos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json;charset=utf-8' },
                    body: JSON.stringify({
                        title: inputTodo,
                    }),
                });
                const response = await rawResponse.json();
                console.log(response);
                dispatch({ type: 'ADD_TODO', payload: response });
            }
        } catch (error) {
            console.log(error);
        }
    };
};
