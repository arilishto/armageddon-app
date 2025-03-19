import React from 'react';
import styles from './Action.module.css';

export const AsteroidCardAction = (is) => {
    return (<div>
                <div className={styles.actionGrade}>Оценка: опасен</div>
                <button className={styles.action}>
                    <div className={styles.actionText}>На уничтожение</div>
                </button>
        </div>)
}

