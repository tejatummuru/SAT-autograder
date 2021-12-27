import React from 'react';
import {ReadingMaster} from './ReadingMaster';
import './App.css';
import {WritingMaster} from './WritingMaster';
import {MNoCalcMaster} from './MNoCalcMaster';
import {MCalcMaster} from './MCalcMaster';
import {ScaleM} from './ScaleM';
import {ScaleWr} from './ScaleWr';
import {ScaleR} from './ScaleR';
import {score} from './ScoreDisplay';
import { Routes, Route, Link } from "react-router-dom";
//establish react routes and make sure the display for the scores and score calculation for math stuff and reading stuff
//is working how its supposed to and figure out the css stuff
function App() {
  return (
    <div className="App">
      <h1>SAT Autograder</h1>
      <h2 className='heading'>Reading Section Master</h2>
      <ReadingMaster/>
      <h2 className='heading'>  Writing Section Master</h2>
      <WritingMaster></WritingMaster>
      <h2 className='heading'> Math No Calculator</h2>
      <p>seperate multiple correct answers with a comma and a range with "-" (quotes not included)</p>
      <MNoCalcMaster></MNoCalcMaster>
      <h2 className='heading'> Math Calculator</h2>
      <p>seperate multiple correct answers with a comma and a range with "-" (quotes not included)</p>
      <MCalcMaster></MCalcMaster>
      <h2 className='heading'> Scale Math </h2>
      <ScaleM></ScaleM>
      <h2 className='heading'> Scale Reading </h2>
      <ScaleR></ScaleR>
      <h2 className='heading'> Scale Writing and Language </h2>
      <ScaleWr></ScaleWr>
    </div>
  );
}

export default App;
