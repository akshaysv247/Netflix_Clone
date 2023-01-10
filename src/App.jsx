import React from 'react';
import Banner from './components/Banner/Banner';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import RowPost from './components/RowPost/RowPost';
import {Originals, Action, Comedy, Horror, Romance, Documentaries,Trending } from "./urls";

const App=() => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={Originals} title="Netflix Originals" />
      <RowPost url={Trending} title="Trending" isSmall />
      <RowPost url={Action} title="Action" isSmall />
      <RowPost url={Comedy} title="Comedy" isSmall />
      <RowPost url={Romance} title="Romance" isSmall />
      <RowPost url={Horror} title="Horror" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
