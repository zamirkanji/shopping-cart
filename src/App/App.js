import './App.css';
import { useEffect } from 'react';
import {useNavigate, BrowserRouter, Routes, Route} from 'react-router-dom';
import ShoppingPage from '../components/ShoppingPage/ShoppingPage';
import HomePage from '../components/HomePage/HomePage';

function App () {
  useEffect(() => {
    console.log('render');
    
    const getData = async () => {
      let data = await fetch('https://na.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-5b11e381-3463-4ade-97ef-d9eab1723c4d');
          data = await data.json();    
          console.log(data);
    }
    getData();
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/shoppingCart' element={<ShoppingPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
