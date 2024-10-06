import { useState, useRef, useEffect } from 'react';
import { Input } from '../../../Input/Input';
import { Button } from '../../../Button/Button';
import styles from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../../../Actions';

export const Todo = ({ id, title, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [titleState, setTitleState] = useState(title);

    const dispatch = useDispatch();

    const refInput = useRef();

    // const handleInputBlur = (id) => {};

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleSave = (id) => {
        dispatch(updateTodo(id, titleState));
        setIsEditing(false);
    };
    const handleCancel = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        if (isEditing || isEditing === 0) {
            // console.log(isEditing, 'isEditing');
            // refInput.current?.focus();
        }
    }, [isEditing]);

    return (
        <li key={id} className={styles.items}>
            {isEditing === index ? (
                <>
                    <Input
                        type="text"
                        value={titleState}
                        onChange={({ target }) => setTitleState(target.value)}
                        // onBlur={handleInputBlur}
                        // refInput={refInput}
                        className={styles.inputEdit}
                    />
                    <Button onClick={handleSave.bind(null, id)}>Сохранить</Button>
                    <Button onClick={handleCancel}>Отмена</Button>
                </>
            ) : (
                <>
                    <span>{title}</span>
                    <div className={styles.wrapButtons}>
                        <Button onClick={handleDeleteTodo.bind(null, id)}>Удалить</Button>
                        <Button onClick={() => setIsEditing(index)}>Изменить</Button>
                    </div>
                </>
            )}
        </li>
    );
};
