

function fetchAllFilmsData(films) {

    return{
        type: 'fetch-all-films' ,
        payload: films,
    }
}
export default fetchAllFilmsData;


export function getSingleFilm(film) {

    return{
        type: 'get-single-film',
        payload: film,
    }
}


export function findFilm(id) {

    return {
        type : '',
        payload: id,
    }
}