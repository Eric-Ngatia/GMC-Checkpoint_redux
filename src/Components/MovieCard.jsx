import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


function MovieCard(props) {
    let films = useSelector(state => state.films)

    return (
        <div>
            <iframe 
                width="642" 
                height="361" 
                src= {props.films.vidLink}
                title= {props.films.title}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen />
            <iframe/>
        </div>
    )
}

export default MovieCard;
