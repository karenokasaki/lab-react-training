import { useState } from 'react'

function AddMovie({ addNewMovie }) {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating, setIMDBRating] = useState(5);
    const [hasOscars, setHasOscars] = useState(true);

    const handleTitleInput = e => setTitle(e.target.value);
    const handleDirectorInput = e => setDirector(e.target.value);
    const handleRatingInput = e => setIMDBRating(e.target.value);
    const handleOscarsInput = e => setHasOscars(e.target.checked);


    const handleSubmit = (e) => {
        e.preventDefault()
        const newMovie = { title, director, IMDBRating, hasOscars } //name de cada input
        addNewMovie(newMovie)
        setTitle("");
        setDirector("");
        setIMDBRating(5);
        setHasOscars(true)
    }



    // Reset the state


    return (
        <div>
            <h4>Add a Movie</h4>

            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input
                    type="title"
                    name="title"
                    value={title}
                    onChange={handleTitleInput}
                />

                <label>Director: </label>
                <input
                    type="text"
                    name="director"
                    value={director}
                    onChange={handleDirectorInput}
                />
                <br />
                <label>IMDB Rating: </label>
                <input
                    type="text"
                    name="IMDBRating"
                    value={IMDBRating}
                    onChange={handleRatingInput}
                />

                <label>Won Oscars: </label>
                <input
                    type="checkbox"
                    name="hasOscars "
                    value={hasOscars}
                    onChange={handleOscarsInput}
                />

                <button type="submit">Add a Movie</button>

            </form>



        </div>
    );
}

export default AddMovie;