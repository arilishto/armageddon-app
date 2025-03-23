import React from 'react';
import styles from './Banner.module.css';

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <img 
                src="/images/space.png" 
                alt="Space banner" 
                className={styles.bannerImage}
            />
        </div>
    );
}; 