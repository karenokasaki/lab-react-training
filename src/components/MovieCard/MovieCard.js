import { useState } from "react";
import './MovieCard.css'

function MovieCard(props) {

    const { movie, deleteMovie } = props //descontruindo o props para poder usar as mesmas variável

    const generateScoreLabel = score => {
        if (score > 9) {
            return <span className="green">9+</span>;
        } else if (score > 7) {
            return <span className="blue">{score}</span>;
        } else {
            return <span className="red">{score}</span>;
        }

    }

    return (
        <div>

            <div key={movie._id} className='MovieCard'>
                <h3>{movie.title}</h3>
                <p>Director: {movie.director}</p>
                <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>

                {movie.hasOscars && <p>Got Oscars</p>}
                {!movie.hasOscars && <p>no oscars</p>}

                {movie.hasOscars ? <p>got oscardsss</p> : <p>nada de oscars</p>}

                <button onClick={() => deleteMovie(movie._id)} className="btn-delete">Delete</button>
            </div>
        </div>
    );
}

export default MovieCard;