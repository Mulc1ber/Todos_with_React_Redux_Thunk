import React, { useState } from 'react';
import { Input } from '../Input/Input';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../Actions';

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const handleSearchValue = ({ target }) => {
        const newSearchValue = target.value;
        setSearchTerm(newSearchValue);
        dispatch(setSearchValue(newSearchValue));
    };

    return (
        <div className={styles.wrapPanel}>
            <Input
                type={'search'}
                placeholder={'Поиск'}
                value={searchTerm}
                onChange={handleSearchValue}
            />
        </div>
    );
};
