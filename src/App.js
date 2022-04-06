import { useSelector } from 'react-redux';
import { Route, Routes, useParams } from 'react-router';
import './App.css';
import Home from './Components/Home';
import MovieCard from './Components/MovieCard';



function App() {
  let films = useSelector(state => state.films)
  let film = useSelector(state => state.film)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}  />
        <Route path='/detail/:id' element= {<MovieCard film = {film} />}/>
      </Routes>
    </div>
  );
}

export default App;
