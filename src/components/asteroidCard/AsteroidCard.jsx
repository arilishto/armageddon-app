import { AsteroidCardAction} from "./asteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent} from "./asteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage} from "./asteroidCardImage/AsteroidCardImage";
import styles from "./Card.module.css";

export const AsteroidCard = ()=>{
    return (<div className={`${styles.card} ${styles.regularCard}`}>
        <AsteroidCardImage/>
        <AsteroidCardContent name={"First"} date={"22 april 2023"} distance={12345} size={10}/>
        <AsteroidCardAction/>
    </div>)
}

    
export const DangerAsteroidCard = ()=>{
    return (<div className={`${styles.card} ${styles.cardRed}`}>
        <AsteroidCardImage/>
        <AsteroidCardContent/>
        <AsteroidCardAction/>
    </div>)
}

