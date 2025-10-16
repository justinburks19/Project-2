import React, {createContext, useContext, useState} from "react";
import { ApiContext } from "./apiContext.jsx";


export function ApiProvider({children}) {
    const [info, setInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchData = async (url) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setInfo(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }   
    };
    const value = {info, isLoading, error, fetchData};
    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    );
}