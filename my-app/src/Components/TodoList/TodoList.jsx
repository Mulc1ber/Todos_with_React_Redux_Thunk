import React, { useContext, useEffect } from 'react';
// import { TodoContext } from '../../context';
import { Todo } from './Components';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectListTodos } from '../../Selectors';
import { setListTodos } from '../../Actions';
import { useDispatch } from 'react-redux';
import styles from './TodoList.module.css';

export const TodoList = () => {
    // const { listTodos, isLoading } = useContext(TodoContext);

    // const dispatch = useDispatch();

    const listTodos = useSelector(selectListTodos);
    const isLoading = useSelector(selectIsLoading);

    // useEffect(() => {
    //     dispatch(setListTodos);
    // }, [dispatch]);

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
