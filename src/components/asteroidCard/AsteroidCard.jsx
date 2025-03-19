import { AsteroidCardAction} from "./asteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent} from "./asteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage} from "./asteroidCardImage/AsteroidCardImage";
import styles from "./Card.module.css";

export const AsteroidCard = (props)=>{
    const {name, date, distance, size, isDangerous, isKilometers} = props;
    return (<div className={`${styles.card} ${isDangerous ? styles.cardRed : styles.regularCard}`}>
        <AsteroidCardImage/>
        <AsteroidCardContent name={name} date={date} distance={distance} size={size} isKilometers={isKilometers}/>
        <AsteroidCardAction isDangerous={isDangerous}/>
    </div>)
}

