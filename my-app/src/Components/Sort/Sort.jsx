import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { TodoContext } from '../../context';
import { useDispatch, useSelector } from 'react-redux';
import { selectHasSort } from '../../Selectors';
import { setHasSort, setListTodos } from '../../Actions';
import styles from './Sort.module.css';

export const Sort = () => {
    // const [isSort, setIsSort] = useState(false);

    const dispatch = useDispatch();

    const hasSort = useSelector(selectHasSort);

    // const { setListTodos, requestSortTodos } = useContext(TodoContext);

    const handleSort = () => {
        // requestSortTodos(hasSort, setListTodos);
        // setHasSort(!hasSort);
        dispatch(setHasSort(!hasSort));
    };

    // useEffect(() => {
    //     dispatch(setHasSort);
    // }, [dispatch]);

    return (
        <div>
            <Button className={hasSort ? styles.active : ''} onClick={handleSort}>
                Сортировать
            </Button>
        </div>
    );
};
