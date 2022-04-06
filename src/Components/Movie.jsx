import React from 'react';
import './Movie.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-regular-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function Movie(props) {
    let films = (state => state.films);
    let id = useParams().id;

    return (
        <div className='Movie__container'>
            <div className="card" style={{width: "18rem"}}>
                <Link to={`detail /${films.id}`}>
                    <img height={380} src= {props.film.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{props.film.title}</h4>
                        
                        <FontAwesomeIcon icon={faCirclePlay} className='icon' />
                        
                    </div>
                </Link>
                <FontAwesomeIcon icon={faCirclePlus} />
            </div>
        </div>
    )
}

export default Movie;