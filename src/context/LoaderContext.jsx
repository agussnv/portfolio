import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const useLoader = () => {
    return useContext(LoaderContext);
};

export const LoaderProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoader = (state) => {
        setIsLoading(state)
    }

    return (
        <LoaderContext.Provider value={{ loading, toggleLoader }}>
            {children}
        </LoaderContext.Provider>
    )
}