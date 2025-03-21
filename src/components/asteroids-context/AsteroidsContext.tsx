import { createContext, ReactNode, FC, useState } from "react";

export const AsteroidsContext = createContext({
    onlyDangerous: false,
    setOnlyDangerous: (value: boolean) => {},
    distanceMode: true,
    setDistanceMode: (value: boolean) => {},
});

type AsteroidsContextProviderProps = {
    children?: ReactNode;
};

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children}) => {
    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceMode, setDistanceMode] = useState(true);

    return <AsteroidsContext.Provider value={{onlyDangerous, setOnlyDangerous, distanceMode, setDistanceMode}}>
        {children}
    </AsteroidsContext.Provider>
}

