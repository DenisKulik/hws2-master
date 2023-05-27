import React, { useState } from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { restoreState } from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

const Clock = () => {
    const [ timerId, setTimerId ] = useState<NodeJS.Timeout | number | undefined>(
        undefined);
    const [ date, setDate ] = useState<Date>(
        new Date(restoreState('hw9-date', Date.now())));
    const [ show, setShow ] = useState<boolean>(false);

    const start = () => {
        const curId = setInterval(() => setDate(new Date()), 1000);
        setTimerId(curId);
    };

    const stop = () => {
        clearInterval(timerId);
        setTimerId(undefined);
    };

    const onMouseEnter = () => setShow(true);
    const onMouseLeave = () => setShow(false);

    // time
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // date
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const stringTime = `${hours}:${minutes}:${seconds}` || <br />;
    const stringDate = `${day}.${month}.${year}` || <br />;

    const stringDay = new Intl.DateTimeFormat('en-US',
        { weekday: 'long' }).format(date) || <br />;
    const stringMonth = new Intl.DateTimeFormat('en-US',
        { month: 'long' }).format(date) || <br />;

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                         <>
                             <br />
                         </>
                     )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId}
                    onClick={start}
                >
                    Start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId}
                    onClick={stop}
                >
                    Stop
                </SuperButton>
            </div>
        </div>
    );
};

export default Clock;
