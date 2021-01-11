import React from 'react'


const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}


function Movie({id, title, poster_path, overview, vote_average}) {
    const IMG_API = `https://image.tmdb.org/t/p/w1280`;
    //`https://api.themoviedb.org/3/movie/popular?api_key=8226a08b470ebbe92062c043cd6759cf&language=en-US&page=1`
    return (
        <div className="movie">
            <img src={
                    poster_path ? 
                    (IMG_API + poster_path) : 
                    "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                    } 
                    alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>OverView:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie
