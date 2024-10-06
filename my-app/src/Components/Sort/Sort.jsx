import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectHasSort } from '../../Selectors';
import { setHasSort } from '../../Actions';
import styles from './Sort.module.css';

export const Sort = () => {
    const dispatch = useDispatch();
    const hasSort = useSelector(selectHasSort);

    const handleSort = () => {
        dispatch(setHasSort(!hasSort));
    };

    return (
        <div>
            <Button className={hasSort ? styles.active : ''} onClick={handleSort}>
                Сортировать
            </Button>
        </div>
    );
};
