import React, {useState} from 'react';
import './App.css';
import Header from "./companents/header/header";
import {Route, Routes} from "react-router-dom";
import Popular from "./companents/pages/Popular";
import Rated from "./companents/pages/Rated";
import Film from "./companents/pages/Film";
import DetailPage from "./companents/pages/detailPaage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailActors from "./companents/pages/Actors/detailActors/detailActors";
import Search from "./search";
import Basket from "./companents/pages/Basket";
import Favorite from "./companents/pages/Favorite";

function App() {
    const [handle, setHandle]: any = useState(false)

    const handleColor = () => {
        setHandle(!handle)
    }
  return (
    <div className={handle ? "black" : "gray"}>
      <Header handleColor={handleColor} handle={handle}/>
        <Routes>
            <Route path={'/'} element={<Popular/>}/>
            <Route path={'/Rated'} element={<Rated/>}/>
            <Route path={'/Popular'} element={<Popular/>}/>
            <Route path={'/Film'} element={<Film/>}/>
            <Route path={'/detail-page/:movieId'} element={<DetailPage/>}/>
            <Route path={'/detail-actors/:castId'} element={<DetailActors/>}/>
            <Route path={'/search-result/:movieName'} element={<Search/>}/>
            <Route path={'/Basket'} element={<Basket/>}/>
            <Route path={'/Favorite'} element={<Favorite/>}/>
        </Routes>
    </div>
  );
}

export default App;
