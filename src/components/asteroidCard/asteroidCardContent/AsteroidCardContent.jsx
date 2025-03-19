import React from 'react';
import styles from './Content.module.css';

export const AsteroidCardContent = (props) => {
    const {name, date, distance, size} = props;

    return (<div className={styles.card}>
                <div className={styles.contentName}>{name}</div>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentDate}>{`Дата: ${date}`}</div>
                    <div className={styles.contentDistance}>{`Расстояние: ${distance} км`}</div>
                    <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
                </div>
            </div>)
}
