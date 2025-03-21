import { Header } from "../components/header/Header";
import { AsteroidsContext } from "../components/asteroids-context/AsteroidsContext";
import { AsteroidCard } from "../components/asteroidCard/AsteroidCard";
import { useContext } from "react";

export const Destruction = () => {
    const {destruction} = useContext(AsteroidsContext);

    return <div>
        <Header/>
        {destruction.map(item => <AsteroidCard key={item.id} {...item}/>)}
    </div>

}