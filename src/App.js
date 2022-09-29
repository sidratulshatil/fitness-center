import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Catagory from './Components/Catagory/Catagory';
import { useState } from 'react';
import Activity from './Components/Activity/Activity';
import Faq from './Components/Faq/Faq';

function App(props) {
  return (
    <div className='main'>
      <div className='left-part'>
        <Header></Header>
        <Catagory></Catagory>
      </div>
      <div><Faq></Faq></div>
    </div>
  );
}

export default App;
