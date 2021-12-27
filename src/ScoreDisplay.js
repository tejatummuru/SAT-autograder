import {raw_score_reading} from './ReadingStudent';
import {raw_score_writing} from './WritingStudent';
import {raw_score_math} from './MCalcStudent';

var reading_writing = raw_score_reading + raw_score_writing * 10;
var score = reading_writing + raw_score_math
function ScoreDisplay(){
    return(score);
}

export default ScoreDisplay;