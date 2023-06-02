import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from './bll/store';
import { loadingAC } from './bll/loadingReducer';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import s2 from '../../s1-main/App.module.css';
import { Loader } from './Loader';

export type LoadingStateType = {
    isLoading: boolean
}

const HW10 = () => {
    const loading = useSelector<AppStoreType, LoadingStateType>(
        state => state.loading);

    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => dispatch(loadingAC(false)), 1500);
    };

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>
            <div className={s2.hw}>
                {loading.isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader />
                    </div>
                ) : (
                     <SuperButton
                         id={'hw10-button-start-loading'}
                         onClick={setLoading}
                     >
                         Set loading...
                     </SuperButton>
                 )}
            </div>
        </div>
    );
};

export default HW10;
