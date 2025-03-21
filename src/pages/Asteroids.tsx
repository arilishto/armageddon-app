import styles from "./Asteroids.module.css";
import { AsteroidCard } from "../components/asteroidCard/AsteroidCard";
import { useState, useEffect } from "react";

export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState<{
        name: string;
        date: string;
        distance: {
            kilometers: number;
            lunar: number;
        };
        size: number;
        id: string;
        isDangerous: boolean;
    }[]>([]);

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [isKilometers, setIsKilometers] = useState(true);

    const handleDistanceChange = (mode) => {
        setIsKilometers(mode);
    };

    useEffect(() => {

        try {
            const result = fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.REACT_APP_NASA_API_KEY}`).then((res) => {
                return res.json()
            }).then((response) => {
                let rawAsteroids = []
                for (const data in response.near_earth_objects) {
                    rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data]);
                }
                const asteroids = rawAsteroids.map(item => {
                    const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2);
                    const close = item.close_approach_data[0];
                    const date = new Date(close.close_approach_date);
                    const formattedDate = date.toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    });

                    return {
                        name: item.name,
                        date: formattedDate,
                        size,
                        distance: {
                            kilometers: parseFloat(close.miss_distance.kilometers),
                            lunar: parseFloat(close.miss_distance.lunar)
                        },
                        isDangerous: item.is_potentially_hazardous_asteroid,
                        id: item.id,
                    }
                })
                setAsteroids(asteroids);

            })


        } catch (err) {
            console.log(err)
        }
    }, [])

    return <div>
        Home
        <div className={styles.showDangerousOnly}>
            <input type="checkbox" value={onlyDangerous as unknown as string} onChange={() => setOnlyDangerous(!onlyDangerous)} />
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
                ? asteroids.filter((item) => item.isDangerous).map((item) =>
                    <AsteroidCard key={item.id} {...item} isKilometers={isKilometers} />)
                : asteroids.map((item) =>
                    <AsteroidCard key={item.id} {...item} isKilometers={isKilometers} />)
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

        result.push({ name, date, size, distance, isDangerous, id: name });
    }
    return result;
}