import { useParams } from "react-router-dom";

export const Asteroid = () => {

    const { id } = useParams();

    return (
        <div>
            <h1>{`Asteroid page: ${id}`}</h1>
        </div>
    )
}