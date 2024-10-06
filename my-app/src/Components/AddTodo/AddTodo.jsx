import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { addTodo } from '../../Actions';
import styles from './AddTodo.module.css';

export const AddTodo = () => {
    const [newTodo, setNewTodo] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodo));
        setNewTodo('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.wrapPanel}>
                <Input
                    type={'text'}
                    placeholder={'Новая задача'}
                    value={newTodo}
                    onChange={({ target }) => setNewTodo(target.value)}
                />
                <Button type={'submit'}>Добавить задачу</Button>
            </form>
        </div>
    );
};
