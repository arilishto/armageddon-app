import styles from "./Asteroids.module.css";
import { AsteroidCard } from "../components/asteroidCard/AsteroidCard";
import { useState } from "react";
import { useEffect } from "react";

export const Asteroids = () => {
    const [asteroids] = useState(generateAsteroids())
    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [isKilometers, setIsKilometers] = useState(true);

    const handleDistanceChange = (mode) => {
        setIsKilometers(mode);
    };

    useEffect(()=>{
        const  result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY").then((res)=>{
            return res.json()
        }).then((asteroids)=>{
            console.log(asteroids)
        })
    }, [])

    
    return <div> 
        Home 
        <div className={styles.showDangerousOnly}>
            <input type="checkbox" value={onlyDangerous} onChange={() => setOnlyDangerous(!onlyDangerous)}/> 
            Показать только опасные
        </div>
        <div className={styles.distanceMode}>
            Расстояние 
            <button 
                className={`${styles.distanceChooser} ${isKilometers ? styles.active : ''}`}
                onClick={() => handleDistanceChange(true)}>
                в километрах
            </button>,
            <button 
                className={`${styles.distanceChooser} ${!isKilometers ? styles.active : ''}`}
                onClick={() => handleDistanceChange(false)}>
                в дистанциях до Луны
            </button>
        </div>


        {
            onlyDangerous 
                ? asteroids.filter((item) => item.isDangerous).map((item, index) => 
                    <AsteroidCard key={index} {...item} isKilometers={isKilometers}/>)
                : asteroids.map((item, index) => 
                    <AsteroidCard key={index} {...item} isKilometers={isKilometers}/>)
        }
    </div>
}

const generateAsteroids = () => {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = [];

    for (let i = 0; i < 10; i++) {
        const randomIndex1 = Math.floor(Math.random() * characters.length);
        const randomIndex2 = Math.floor(Math.random() * characters.length);
        const randomIndex3 = Math.floor(Math.random() * characters.length);
        const randomIndex4 = Math.floor(Math.random() * characters.length);
        const name = characters[randomIndex1] + characters[randomIndex2] + characters[randomIndex3] + characters[randomIndex4];
        
        const day = Math.floor(Math.random() * 27 + 1);
        const monthIndex = Math.floor(Math.random() * 11);
        const date = `${day} ${months[monthIndex]} 2025`;
        
        const size = Math.floor(Math.random() * 100 + 10);
        const distance = Math.floor(Math.random() * 9000000);
        const isDangerous = Math.random() >= 0.5;
        
        result.push({name, date, size, distance, isDangerous});
    }
    return result;
}