// import React from "react";
import * as React from 'react';
import {master_answers_rwm} from './ReadingMaster';
import {scale_rw} from './ScaleR';
//things to fix stylistically: display them next to each other, make answer box smaller, front end stuff
//for multiple answers, we will add in a comma and if its in a range of solutions we add in a '-' key or something, add new student button to refresh page
//ad get rid of previous answers
var master_answers_rws = [];
var incorrect = 0;
var raw_score_reading = 0;
//the problem for displaying the score is that it does the calculations before anything is added and then never again, must change
//what triggers the score display
function ReadingStudent(){  
    function formAction(event){
        event.preventDefault();
        master_answers_rws.splice(0, master_answers_rws.length);
        for(let i = 0; i < 52; i++){
            master_answers_rws.push(document.getElementById('box' + (i + 155)).value);
            if(master_answers_rwm[i] != master_answers_rws[i]){
                incorrect++;
            }
        }
        //once we have the correct answers, we should have another file to pull the raw score and multiply by 10 and
        //return a final score for the reading subsection, so now i will build that file
        console.log(master_answers_rws);
        console.log(master_answers_rwm);
        console.log(52 - incorrect);
        raw_score_reading = scale_rw[52 - incorrect - 1];
        console.log(raw_score_reading);
        return raw_score_reading; //do i need to do this in js?
    }
return(
<form name="reading" onSubmit={formAction}>
    <p>#1</p>
    <input type="text" id="box155"/>
    <p>#2</p>
    <input type="text" id="box156"/>
    <p>#3</p>
    <input type="text" id="box157" />
    <p>#4</p>
    <input type="text" id="box158"/>
    <p>#5</p>
    <input type="text" id="box159"/>
    <p>#6</p>
    <input type="text" id="box160"/>
    <p>#7</p>
    <input type="text" id="box161"/>
    <p>#8</p>
    <input type="text" id="box162"/>
    <p>#9</p>
    <input type="text" id="box163"/>
    <p>#10</p>
    <input type="text" id="box164"/>
    <p>#11</p>
    <input type="text" id="box165"/>
    <p>#12</p>
    <input type="text" id="box166"/>
    <p>#13</p>
    <input type="text" id="box167"/>
    <p>#14</p>
    <input type="text" id="box168"/>
    <p>#15</p>
    <input type="text" id="box169"/>
    <p>#16</p>
    <input type="text" id="box170"/>
    <p>#17</p>
    <input type="text" id="box171"/>
    <p>#18</p>
    <input type="text" id="box172"/>
    <p>#19</p>
    <input type="text" id="box173"/>
    <p>#20</p>
    <input type="text" id="box174"/>
    <p>#21</p>
    <input type="text" id="box175"/>
    <p>#22</p>
    <input type="text" id="box176"/>
    <p>#23</p>
    <input type="text" id="box177"/>
    <p>#24</p>
    <input type="text" id="box178"/>
    <p>#25</p>
    <input type="text" id="box179"/>
    <p>#26</p>
    <input type="text" id="box180"/>
    <p>#27</p>
    <input type="text" id="box181"/>
    <p>#28</p>
    <input type="text" id="box182"/>
    <p>#29</p>
    <input type="text" id="box183"/>
    <p>#30</p>
    <input type="text" id="box184"/>
    <p>#31</p>
    <input type="text" id="box185"/>
    <p>#32</p>
    <input type="text" id="box186"/>
    <p>#33</p>
    <input type="text" id="box187"/>
    <p>#34</p>
    <input type="text" id="box188"/>
    <p>#35</p>
    <input type="text" id="box189"/>
    <p>#36</p>
    <input type="text" id="box190"/>
    <p>#37</p>
    <input type="text" id="box191"/>
    <p>#38</p>
    <input type="text" id="box192"/>
    <p>#39</p>
    <input type="text" id="box193"/>
    <p>#40</p>
    <input type="text" id="box194"/>
    <p>#41</p>
    <input type="text" id="box195"/>
    <p>#42</p>
    <input type="text" id="box196"/>
    <p>#43</p>
    <input type="text" id="box197"/>
    <p>#44</p>
    <input type="text" id="box198"/>
    <p>#45</p>
    <input type="text" id="box199"/>
    <p>#46</p>
    <input type="text" id="box200"/>
    <p>#47</p>
    <input type="text" id="box201"/>
    <p>#48</p>
    <input type="text" id="box202"/>
    <p>#49</p>
    <input type="text" id="box203"/>
    <p>#50</p>
    <input type="text" id="box204"/>
    <p>#51</p>
    <input type="text" id="box205"/>
    <p>#52</p>
    <input type="text" id="box206"/>
    <input type="submit" value="Submit"/>
</form>
);
  
}

export {ReadingStudent, raw_score_reading};