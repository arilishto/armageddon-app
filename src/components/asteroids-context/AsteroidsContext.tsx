import {createContext, FC, ReactNode, useState} from 'react';

export const AsteroidsContext = createContext(null);

type AsteroidsContextProviderProps = {
    children?: ReactNode
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children})=>{

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceMode, setDistanceMode] = useState(true);
    const [destruction, setDestruction] = useState([]);

    console.log(destruction);

    const addAsteroid = (asteroid)=>{
        setDestruction([...destruction.filter(item=>item.id !== asteroid.id), asteroid]);
        console.log('Destruction array:', destruction);
    }

    const deleteAsteroid = (asteroid)=>{
        setDestruction([...destruction.filter(item=>item.id !== asteroid.id)]);
    }

    return <AsteroidsContext.Provider
        value={{
            onlyDangerous,
            setOnlyDangerous,
            distanceMode,
            setDistanceMode,
            addAsteroid,
            deleteAsteroid,
            destruction,
    }}>
        {children}
    </AsteroidsContext.Provider>
}