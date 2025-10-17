// Movies.jsx
//let have a list of movies with scary themes!
import React, { useEffect, useState } from 'react';
const API = 'https://www.omdbapi.com/';
const KEY = '7eced16a';
const animeList = [ 
    { title: "Attack on Titan", year: 2013 , rating: 9.5, img: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "In a world where giant humanoid Titans prey on humans, Eren Yeager joins the Scout Regiment to fight back and uncover the truth behind their existence." }, 
    { title: "Death Note", year: 2006, rating: 9.0, img: "https://m.media-amazon.com/images/I/716ASj7z2GL._UF894,1000_QL80_.jpg", description: "A high school student discovers a notebook that allows him to kill anyone by writing their name in it. He embarks on a mission to rid the world of criminals, attracting the attention of a genius detective." },
    { title: "No Game No Life", year: 2014, rating: 8.5, img: "https://m.media-amazon.com/images/M/MV5BOTk5ZDZhNGUtMDM2OS00Y2RkLWEwMmQtODg4ZTZiMGY1ZjFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Sora and Shiro, two brilliant gamers, are transported to a fantasy world where all conflicts are resolved through high-stakes games. They aim to conquer this new world and challenge its god." },
    { title: "Sword Art Online", year: 2012, rating: 8.0, img: "https://m.media-amazon.com/images/M/MV5BN2NhYzU2NDEtYzI1NS00MjgzLThjZGUtOTYxNGJkZjZmNDdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Players of a virtual reality MMORPG find themselves trapped in the game, where dying in the game means dying in real life. Kirito, a skilled player, must navigate this dangerous world to survive." },
]
export function Movies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('family guy'); // Default search term

    const fetchMovies = async (query = search) => {
        const MAX_PAGES = 1;
        const all = [];
        
        for (let page = 1; page <= MAX_PAGES; page++) {
            const url = `${API}?s=${encodeURIComponent(query)}&apikey=${KEY}&page=${page}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === 'True' && data.Search) {
                all.push(...data.Search);
                console.log(data.Search);
            } else {
                break;
            }
        }
        setMovies(all);
    };
    /* When there is a change in search, fetch new movies */
    useEffect(() => {
        fetchMovies(search);
    }, []);

    const handleSearch = () => {
        fetchMovies(search);
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const getRandomRating = () => {
        const num = Math.floor(Math.random() * 5) + 1;
        const star = '⭐'.repeat(num);
        return star;
    };
    const handleTitle = (title) => {
        if (title.length > 50) {
            return (
                <p>{title.slice(0, 50) + '...'}</p>
                
            );
        } else if (title.length <= 40) {
            return (<p>{title} 
                <br/> 
                </p>);
        } else {
            return <p>{title}</p>;
        }
    };
    

    return (
        <div>
            <h1> My Top 10 Animes</h1>
            <div className="anime-list container d-flex flex-wrap justify-content-around">
                {animeList.map((anime, index) => (
                    <div key={index} className="anime-card row d-flex col-sm-1 col-md-6 col-lg-4 align-items-center justify-content-center">
                        <h1 style={{ fontSize: 'clamp(1.5rem, 1vw, 2.5rem)', fontWeight: 'bold' }} className='d-flex justify-content-center'>{handleTitle(anime.title)}</h1>
                        <img src={anime.img} alt={`${anime.title} Poster`} style={{ width: 'clamp(200px, 20vw, 300px)', height: 'auto' }} />
                        <p className='d-flex justify-content-center'>Year: {anime.year}</p>
                        <p className='d-flex justify-content-center'>Rating: {`${'⭐'.repeat(anime.rating / 2)}`}</p>
                        <p className='d-flex justify-content-center'>Desciption: {anime.description}</p>
                    </div>
                ))}
            </div>

            <div className='movie-search container'>
            <h1 className='drop-down'>Movies List</h1>
                <input
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    placeholder="Search movies..."
                    className="form-control mb-2"
                />
                <button className='btn btn-primary mb-2' onClick={handleSearch}>Search</button>
                <div className='movie-container d-flex flex-wrap justify-content-around'>
                {movies.map((movie) => (
                    <div className='movie-card row d-flexcol-sm-1 col-md-6 col-lg-4 align-items-center justify-content-center'>
                            <h1 style={{ fontSize: 'clamp(1.5rem, 1vw, 2.5rem)', fontWeight: 'bold' }} className='d-flex justify-content-center'>{handleTitle(movie.Title)}</h1>
                            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwSWqBlDZsYbr2OX-RiRqX6N19D3-TLAjgw&s'} 
                            alt={`${movie.Title} Poster`}
                            style={{ width: 'clamp(200px, 20vw, 300px)', height: 'auto' }} />
                            <p className='d-flex justify-content-center'>Year: {movie.Year}</p>
                            <p className='d-flex justify-content-center'>Rating: {`${getRandomRating()}`} </p>
                        </div>
                ))}
                </div>
            </div>
        </div>

    );
}

