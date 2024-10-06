export const setSearchValue = (searchValue) => {
    return async (dispatch) => {
        try {
            if (!searchValue) {
                const rawResponse = await fetch(`http://localhost:3005/todos`);
                const response = await rawResponse.json();
                dispatch({
                    type: 'SET_LIST_TODOS',
                    payload: response,
                });
            } else {
                const rawResponse = await fetch(`http://localhost:3005/todos?q=${searchValue}`);
                const response = await rawResponse.json();
                if (response.length === 0) {
                    dispatch({
                        type: 'SET_LIST_TODOS',
                        payload: [],
                    });
                } else {
                    const filtered = response.filter((todo) =>
                        todo.title.toLowerCase().includes(searchValue.toLowerCase()),
                    );
                    dispatch({
                        type: 'SET_LIST_TODOS',
                        payload: filtered,
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
};
