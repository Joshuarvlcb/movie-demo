import { useState, useEffect } from 'react'
const APIT_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&`
//searchQ will be something like &s=btaman
export const useFetch = (searchQuery) => {
const [loading, setLoading] = useState(true)
const [error, setError] = useState({show:false,msg:''})
const [movies, setMovies] = useState(null)

//url is always the api end point plus the search query
const fetchMovie = async (url) => {
    setLoading(true)
    
        try{
            const response = await fetch(url);
            const data = await response.json();

            if(data.Response === 'True'){
                setMovies(data.Search || data);
            }else{
                setError({show:true,msg:data.Error})
            }
        setLoading(false)
        }catch (error){
            console.error(error)
        }
    }

    useEffect( () => {
    fetchMovie(`${APIT_ENDPOINT}${searchQuery}`)
    },[searchQuery])

    return {loading,error,movies};
}