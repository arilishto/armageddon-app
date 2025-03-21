import { useParams } from "react-router-dom";
import { Header } from "../components/header/Header";

export const Asteroid = () => {

    const { id } = useParams();

    return (
        <div>
            <Header />
            <h1>{`Asteroid page: ${id}`}</h1>
        </div>
    )
}