import React from 'react'
import { useMovieContext } from '../util/context'
const SearchForm = () => {
    const {query,setQuery,error} = useMovieContext();
    console.log(error);
    //error has show and message;
    return (
        <div>
            <form className = 'search-form' onSubmit = {(e) => {
                e.preventDefault();
            }}>
                <h2>Search Movies</h2>
                <input type="text" className='form-input' value = {query} onChange = {(e) => setQuery(e.target.value)} />
            </form>
            {error.show && <div className = 'error'>
                    {error.msg}
                </div>}
        </div>
    )
}

export default SearchForm
