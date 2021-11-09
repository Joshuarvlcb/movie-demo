import React,{ useState, useContext } from 'react';
import { useFetch } from './Fetch';

const MovieContext = React.createContext();

export const MovieProvider = ({children}) => {
    const [query, setQuery] = useState('batman');
    const {error,loading,movies} = useFetch(`s=${query}&`);

    return <MovieContext.Provider value = {{error,loading,query,setQuery,movies}} >
            {children}
    </MovieContext.Provider>
};

export const useMovieContext = () => {
    return useContext(MovieContext);
};