import styles from "./Asteroids.module.css";
import { AsteroidCard, DangerAsteroidCard } from "../components/asteroidCard/AsteroidCard";
export const Asteroids = () => {
    
    const asteroids = [
        {
            name: "first",
            isDangerous: true,
        },
        {
            name: "second",
            isDangerous: false,
        }]
    
        return <div> 
            Home 
            <div className={styles.showDangerousOnly}><input type="checkbox" value={asteroids.showMode}>
            </input> Показать только опасные
            </div>
            <div className={styles.distanceMode}>
                Расстояние <button 
                className={styles.distanceChooser}>в километрах</button>,
                <button className={styles.distanceChooser}>в дистанциях до Луны</button></div>
            
            <DangerAsteroidCard/>
            <AsteroidCard/>
            
        </div>
    
}