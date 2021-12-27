// import React from "react";
import * as React from 'react';
import {master_answers_wrm} from './WritingMaster';
import {scale_wr} from './ScaleWr';
//things to fix stylistically: display them next to each other, make answer box smaller, front end stuff
//for multiple answers, we will add in a comma and if its in a range of solutions we add in a '-' key or something, add new student button to refresh page
//ad get rid of previous answers
var master_answers_wrs = [];
var incorrect = 0;
var raw_score_writing = 0;

function WritingStudent(){  
    function formAction(event){
        event.preventDefault();
        master_answers_wrs.splice(0, master_answers_wrs.length);
        for(let i = 0; i < 44; i++){
            master_answers_wrs.push(document.getElementById('box' + i).value);
            if(master_answers_wrm[i] != master_answers_wrs[i]){
                incorrect++;
            }
        }
        //once we have the correct answers, we should have another file to pull the raw score and multiply by 10 and
        //return a final score for the reading subsection, so now i will build that file
        console.log(44 - incorrect);
        raw_score_writing = scale_wr[44 - incorrect - 1];
        return raw_score_writing; //do i need to do this in js?
    }
return(
<form name="writing" onSubmit={formAction}>
    <p>#1</p>
    <input type="text" id="box0"/>
    <p>#2</p>
    <input type="text" id="box1"/>
    <p>#3</p>
    <input type="text" id="box2" />
    <p>#4</p>
    <input type="text" id="box3"/>
    <p>#5</p>
    <input type="text" id="box4"/>
    <p>#6</p>
    <input type="text" id="box5"/>
    <p>#7</p>
    <input type="text" id="box6"/>
    <p>#8</p>
    <input type="text" id="box7"/>
    <p>#9</p>
    <input type="text" id="box8"/>
    <p>#10</p>
    <input type="text" id="box9"/>
    <p>#11</p>
    <input type="text" id="box10"/>
    <p>#12</p>
    <input type="text" id="box11"/>
    <p>#13</p>
    <input type="text" id="box12"/>
    <p>#14</p>
    <input type="text" id="box13"/>
    <p>#15</p>
    <input type="text" id="box14"/>
    <p>#16</p>
    <input type="text" id="box15"/>
    <p>#17</p>
    <input type="text" id="box16"/>
    <p>#18</p>
    <input type="text" id="box17"/>
    <p>#19</p>
    <input type="text" id="box18"/>
    <p>#20</p>
    <input type="text" id="box19"/>
    <p>#21</p>
    <input type="text" id="box20"/>
    <p>#22</p>
    <input type="text" id="box21"/>
    <p>#23</p>
    <input type="text" id="box22"/>
    <p>#24</p>
    <input type="text" id="box23"/>
    <p>#25</p>
    <input type="text" id="box24"/>
    <p>#26</p>
    <input type="text" id="box25"/>
    <p>#27</p>
    <input type="text" id="box26"/>
    <p>#28</p>
    <input type="text" id="box27"/>
    <p>#29</p>
    <input type="text" id="box28"/>
    <p>#30</p>
    <input type="text" id="box29"/>
    <p>#31</p>
    <input type="text" id="box30"/>
    <p>#32</p>
    <input type="text" id="box31"/>
    <p>#33</p>
    <input type="text" id="box32"/>
    <p>#34</p>
    <input type="text" id="box33"/>
    <p>#35</p>
    <input type="text" id="box34"/>
    <p>#36</p>
    <input type="text" id="box35"/>
    <p>#37</p>
    <input type="text" id="box36"/>
    <p>#38</p>
    <input type="text" id="box37"/>
    <p>#39</p>
    <input type="text" id="box38"/>
    <p>#40</p>
    <input type="text" id="box39"/>
    <p>#41</p>
    <input type="text" id="box40"/>
    <p>#42</p>
    <input type="text" id="box41"/>
    <p>#43</p>
    <input type="text" id="box42"/>
    <p>#44</p>
    <input type="text" id="box43"/>
    <input type="submit" value="Submit"/>
</form>
)
  
}

export {WritingStudent, raw_score_writing};