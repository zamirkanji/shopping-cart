import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingPage from '../components/ShoppingPage/ShoppingPage';
import HomePage from '../components/HomePage/HomePage';
import ErrorPage from '../components/Error/ErrorPage';
import skins from '../data/skinData';
import Header from '../components/Global/Header/Header';
import Footer from '../components/Global/Footer/Footer';

function App () {
  useEffect(() => {
    console.log(skins);
    
    // const getData = async () => {
    //   let data = await fetch('https://na.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-5b11e381-3463-4ade-97ef-d9eab1723c4d');
    //       data = await data.json();    
    //       console.log(data);
    // }
    // getData();

  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        {/* <h1>hello</h1> */}
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}>
            {/* <Route path='/shoppingPage' element={<ShoppingPage />}/> */}
            <Route path='*' element={<ErrorPage />}/>
            <Route
              index
              element={<div>Default Page Content</div>}
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
