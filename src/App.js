import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Meals from './Components/Meals/Meals';
import RestCountries from './Components/RestCountry/RestCountries';
import NotFound from './Components/NotFound/NotFound';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
    <div>
      <Home></Home>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mealdb' element={<Meals/>}></Route>
        <Route path='/rest-countries' element={<RestCountries/>}></Route>
        <Route path='/country/:country-name' element={<CountryDetail/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
