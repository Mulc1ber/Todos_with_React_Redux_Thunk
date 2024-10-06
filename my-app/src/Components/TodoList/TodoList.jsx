import { Todo } from './Components';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectListTodos } from '../../Selectors';
import styles from './TodoList.module.css';

export const TodoList = () => {
    const listTodos = useSelector(selectListTodos);
    const isLoading = useSelector(selectIsLoading);

    return (
        <>
            <div className={styles.listTodos}>
                {isLoading ? (
                    <div className={styles.loader}></div>
                ) : (
                    listTodos.map(({ id, title }, index) => (
                        <Todo key={id} id={id} title={title} index={index} />
                    ))
                )}
            </div>
        </>
    );
};
