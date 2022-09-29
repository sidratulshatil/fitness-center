import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Catagory from './Components/Catagory/Catagory';
import { useState } from 'react';
import Activity from './Components/Activity/Activity';

function App(props) {
  return (
    <div className='main'>
      <div className='left-part'>
        <Header></Header>
        <Catagory></Catagory>
      </div>

    </div>
  );
}

export default App;
