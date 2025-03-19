import React from 'react';
import styles from './Content.module.css';

const LUNAR_DISTANCE = 384400; 

export const AsteroidCardContent = (props) => {
    const {name, date, distance, size, isKilometers} = props;

    const formatDistance = () => {
        if (isKilometers) {
            return `${distance.toLocaleString('ru-RU')} км`;
        } else {
            const lunarDistance = (distance / LUNAR_DISTANCE).toFixed(2);
            return `${lunarDistance} лунных орбит`;
        }
    };

    return (<div className={styles.card}>
                <div className={styles.contentName}>{name}</div>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentDate}>{`Дата: ${date}`}</div>
                    <div className={styles.contentDistance}>{`Расстояние: ${formatDistance()}`}</div>
                    <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
                </div>
            </div>)
}
