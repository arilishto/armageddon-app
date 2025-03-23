import { AsteroidCardAction } from "./asteroidCardAction/AsteroidCardAction";
import { AsteroidCardContentContainer } from "./asteroidCardContent/AsteroidCardContentContainer";
import { AsteroidCardImage } from "./asteroidCardImage/AsteroidCardImage";
import styles from "./Card.module.css";
import { useContext } from "react";
import { AsteroidsContext } from "../asteroids-context/AsteroidsContext";


type AsteroidCardProps = {
    id: string;
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
    const { id, name, date, distance, size, isDangerous } = props;

    const {addAsteroid} = useContext(AsteroidsContext);

    return (<div data-testid="asteroid-card" className={`${styles.card} ${isDangerous ? styles.cardRed : styles.regularCard}`}>
        <AsteroidCardImage />
        <AsteroidCardContentContainer 
            id={id}
            name={name} 
            date={date} 
            distance={distance} 
            size={size}
            isDangerous={isDangerous} 
            />
        <AsteroidCardAction isDangerous={isDangerous} onClick={() => addAsteroid(props)}/>
    </div>)
}

