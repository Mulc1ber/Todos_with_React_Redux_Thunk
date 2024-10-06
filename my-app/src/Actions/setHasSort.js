export const setHasSort = (hasSort) => {
    return async (dispatch) => {
        dispatch({ type: 'SET_HAS_SORT', payload: hasSort });

        try {
            let rawResponse = null;
            if (hasSort) {
                rawResponse = await fetch('http://localhost:3005/todos?_sort=title&_order=asc');
            } else {
                rawResponse = await fetch('http://localhost:3005/todos');
            }
            const response = await rawResponse.json();
            dispatch({ type: 'SET_LIST_TODOS', payload: response });
        } catch (error) {
            console.error(error);
        }
    };
};
