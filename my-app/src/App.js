import { useEffect } from 'react';
import { TodoMainPage } from './Components/';
import { setListTodos } from './Actions';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setListTodos());
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <h1 className={styles.header}>Todos JSON Server</h1>
            <TodoMainPage />
        </div>
    );
};
