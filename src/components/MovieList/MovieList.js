import { useState } from "react";
import movieData from '../../data/movieData.json'
import MovieCard from "../MovieCard/MovieCard";
import AddMovie from "../AddMovie/AddMovie";
import FilterMovies from "../FilterMovies/FilterMovies";

function MovieList() {
    const [movies, setMovies] = useState(movieData.reverse()) 
    const [showMovie, setShowMovie] = useState(true)
    const [moviesData, setMoviesData] = useState(movieData)
    
    const toggleShowMovie = () => {
        setShowMovie(!showMovie)
    }

    const deleteMovie = movieId => {
        const filteredMovies = movies.filter(movie => {
            return movie._id !== movieId        // pegar os elementos que são diferentes do que o botão selecionou
        })                                       // ou seja, aqui é a array com todos os elementos menos o do id que foi deletado pelo botão
        setMovies(filteredMovies)
    }

    const addNewMovie = (newMovie) => {
        const updatedMovies = [...movies, newMovie]
        const updateMoviesData = [...moviesData, newMovie]

        setMovies(updatedMovies)
        setMoviesData(updateMoviesData)
    }

    const filterMovieList =(str) => {
        let filteredMovies;

        if (str === "All") {
            filteredMovies = movieData
        } else {
            filteredMovies = movieData.filter((moviee) => {
                return moviee.title[0].toLowerCase() === str.toLowerCase()
            })
        }
        setMovies(filteredMovies)
    }

    return (
        <div>
        <AddMovie  addNewMovie={addNewMovie}/>
        <FilterMovies filterMovieList={filterMovieList} />
         <button onClick={toggleShowMovie}>{showMovie ? 'hide' : 'show'}</button>

         {showMovie &&              // se showMovie for true, renderiza, se for false, não.
            movies.map(movie => {
                return (
                   <MovieCard 
                    key={movie._id} 
                    movie={movie}
                    deleteMovie={deleteMovie} />
                );
            }).reverse()}
         
        </div>
    );
}

export default MovieList;