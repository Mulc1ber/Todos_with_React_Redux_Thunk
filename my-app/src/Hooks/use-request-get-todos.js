// export const useRequestGetTodos = () => {
//     const requestGetTodos = (setListTodos, setIsLoading) => {
//         setIsLoading(true);
//         fetch('http://localhost:3005/todos')
//             .then((loadedData) => loadedData.json())
//             .then((loadedTodos) => {
//                 setListTodos(loadedTodos);
//             })
//             .finally(() => setIsLoading(false));
//     };

//     return {
//         requestGetTodos,
//     };
// };

// export const useRequestGetTodos = () => {
//     const requestGetTodos = async (setListTodos, setIsLoading) => {
//         try {
//             setIsLoading(true);
//             const response = await fetch('http://localhost:3005/todos');
//             const loadedTodos = await response.json();
//             setListTodos(loadedTodos);
//             return loadedTodos;
//         } catch (error) {
//             console.error('An error occurred while fetching todos:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return {
//         requestGetTodos,
//     };
// };

// export const useRequestGetTodos = () => {
//     const requestGetTodos = async () => {
//         try {
//             const response = await fetch('http://localhost:3005/todos');
//             const loadedTodos = await response.json();
//             return loadedTodos;
//         } catch (error) {
//             console.error('An error occurred while fetching todos:', error);
//         }
//     };

//     return {
//         requestGetTodos,
//     };
// };
