import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import { Modal } from './components/Modal/Modal';
import {Quiz} from "./components/Quiz/Quiz";



function App() {

  return (
   <div className="App">
    {/*<Counter/>*/}
    {/*   <Modal/>*/}
       <Quiz/>
    </div>
  );
}

export default App;
