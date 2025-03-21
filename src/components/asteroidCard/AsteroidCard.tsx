import { AsteroidCardAction } from "./asteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./asteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./asteroidCardImage/AsteroidCardImage";
import styles from "./Card.module.css";

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    };
    size: number;
    isDangerous: boolean;
}

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, distance, size, isDangerous } = props;

    return (<div className={`${styles.card} ${isDangerous ? styles.cardRed : styles.regularCard}`}>
        <AsteroidCardImage />
        <AsteroidCardContent name={name} date={date} distance={distance} size={size} isDangerous={isDangerous} />
        <AsteroidCardAction isDangerous={isDangerous} />
    </div>)
}

