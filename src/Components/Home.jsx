import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './Home.css';
import Movie from './Movie';



function Home(props) {

    let id = useParams().id;

    let films = useSelector(state => state.films)
    let film = useSelector(state => state.film)

    const [title, setTitle] = useState ("");

    const handleChange = (e) => {
        setTitle (e.target.value);
    }


    return (
        <div className='container'>
            <div className='Navigation'>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <form class="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

            
                <div className="row-9">
                        {films.filter((film) => film.title.toLowerCase().includes(title.toLocaleLowerCase()) ).map (films => (
                            <div className="col-md" key={id}>
                                <Movie film = {films} />
                            </div>)
                        )
                    }
                </div>
            
        </div>
    )
}

export default Home;
