import React, { useContext } from 'react';
import styles from './Content.module.css';
import { AsteroidsContext } from '../../asteroids-context/AsteroidsContext';

type AsteroidCardContentProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    };
    size: number;
    isDangerous: boolean;
}

const LUNAR_DISTANCE = 384400;

export const AsteroidCardContent = (props: AsteroidCardContentProps) => {
    const { name, date, distance, size } = props;
    const { distanceMode } = useContext(AsteroidsContext);

    const formatDistance = () => {
        if (distanceMode) {
            return `${distance.kilometers.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} км`;
        }
        return `${distance.lunar.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} лунных орбит`;
    };

    return (<div className={styles.card}>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Дата: ${date}`}</div>
            <div className={styles.contentDistance}>{`Расстояние: ${formatDistance()}`}</div>
            <div className={styles.contentSize}>{`Размер: ${size.toLocaleString('ru-RU')} м`}</div>
        </div>
    </div>)
}
