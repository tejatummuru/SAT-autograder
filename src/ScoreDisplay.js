import {raw_score_reading} from './ReadingStudent';
import {raw_score_writing} from './WritingStudent';
import {raw_score_math} from './MCalcStudent';
import CalculateIcon from '@mui/icons-material/Calculate';
import { IconButton } from '@material-ui/core';

import React, { Component } from 'react';
var reading_writing = Number(raw_score_reading + raw_score_writing * 10);
console.log(reading_writing);

var score = Number(raw_score_reading + raw_score_writing * 10) + raw_score_math;
console.log(score);
// const Button = styled.button`
//   background-color: black;
//   color: white;
//   font-size: 20px;
//   padding: 10px 60px;
//   border-radius: 5px;
//   margin: 10px 0px;
//   cursor: pointer;
// `; 
function ScoreDisplay(){
    function formAction(event){
        event.preventDefault();
        var reading_writing = raw_score_reading + raw_score_writing * 10;
        var score = reading_writing + raw_score_math;
        console.log(raw_score_reading);
        console.log(raw_score_writing);
        console.log(score);
    }
    
    return(<h2>Reading Score</h2>,reading_writing, <h2>Math Score</h2>, raw_score_math, <h1>Final Score</h1>, score, 
        // <button onClick={formAction}>
        //     Disabled Button
        // </button>
        <div>
            <CalculateIcon className="header_icon" fontSize='large' onClick={formAction} />
        </div>
        );
}

export {reading_writing, raw_score_math, ScoreDisplay, score};