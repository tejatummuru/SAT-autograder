import React from 'react';
import {ReadingMaster} from './ReadingMaster';
import './App.css';
import {WritingMaster} from './WritingMaster';
import {MNoCalcMaster} from './MNoCalcMaster';
import {MCalcMaster} from './MCalcMaster';
import {ScaleM} from './ScaleM';
import {ScaleWr} from './ScaleWr';
import {ScaleR} from './ScaleR';
import {reading_writing, raw_score_math, score} from './ScoreDisplay';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ReadingStudent } from './ReadingStudent';
import { WritingStudent } from './WritingStudent';
import { MNoCalcStudent } from './MNoCalcStudent';
import { MCalcStudent } from './MCalcStudent';
import Header from './Header';
//establish react routes and make sure the display for the scores and score calculation for math stuff and reading stuff
//is working how its supposed to and figure out the css stuff
function App() {
  return (
     
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<h1>SAT Autograder</h1>}/>
          <Route path="/master" element={[<h2 className='heading'>Reading Section Master</h2>,<ReadingMaster/>, <h2>Writing Section Master</h2>, <WritingMaster/>, <h2 className='heading'> Math No Calculator Master</h2>, <p>seperate multiple correct answers with a comma and a range with "-" (quotes not included)</p>, <MNoCalcMaster/>, <h2 className='heading'> Math Calculator Master</h2>, <p>seperate multiple correct answers with a comma and a range with "-" (quotes not included)</p>, <MCalcMaster/> ]}/>
          <Route path="/student" element={[<h2 className='heading'>Reading Section Student</h2>, <ReadingStudent/>, <h2>Writing Section Student</h2>,  <WritingStudent/>, <h2 className='heading'> Math No Calculator Student</h2>, <p>seperate multiple correct answers with a comma and a range with "-" (quotes not included)</p>, <MNoCalcStudent/>, <h2 className='heading'> Math Calculator Student</h2>, <p>seperate multiple correct answers with a comma and a range with "-" (quotes not included)</p>, <MCalcStudent/>]}/>
          <Route path="/scale" element={[<h2 className='heading'> Scale Math </h2>, <ScaleM/>,<h2 className='heading'> Scale Reading </h2>, <ScaleR/>, <h2 className='heading'> Scale Writing and Language </h2>, <ScaleWr/>]}/>
          <Route path="/score" element={[<h2>Reading Score</h2>,reading_writing, <h2>Math Score</h2>, raw_score_math, <h1>Final Score</h1>, score]}/>
        </Routes>
      </BrowserRouter>
      
      {/* <Header/>
       <h2 className='heading'>Reading Section Master</h2>
       <h3>only put in capital letters "A, B, C, D, E" </h3>
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
      <ScaleWr></ScaleWr>  */}
    </div>
  );
}

export default App;
