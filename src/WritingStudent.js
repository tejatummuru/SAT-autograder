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
            master_answers_wrs.push(document.getElementById('box' + (i + 207)).value);
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
    <input type="text" id="box207"/>
    <p>#2</p>
    <input type="text" id="box208"/>
    <p>#3</p>
    <input type="text" id="box209" />
    <p>#4</p>
    <input type="text" id="box210"/>
    <p>#5</p>
    <input type="text" id="box211"/>
    <p>#6</p>
    <input type="text" id="box212"/>
    <p>#7</p>
    <input type="text" id="box213"/>
    <p>#8</p>
    <input type="text" id="box214"/>
    <p>#9</p>
    <input type="text" id="box215"/>
    <p>#10</p>
    <input type="text" id="box216"/>
    <p>#11</p>
    <input type="text" id="box217"/>
    <p>#12</p>
    <input type="text" id="box218"/>
    <p>#13</p>
    <input type="text" id="box219"/>
    <p>#14</p>
    <input type="text" id="box220"/>
    <p>#15</p>
    <input type="text" id="box221"/>
    <p>#16</p>
    <input type="text" id="box222"/>
    <p>#17</p>
    <input type="text" id="box223"/>
    <p>#18</p>
    <input type="text" id="box224"/>
    <p>#19</p>
    <input type="text" id="box225"/>
    <p>#20</p>
    <input type="text" id="box226"/>
    <p>#21</p>
    <input type="text" id="box226"/>
    <p>#22</p>
    <input type="text" id="box227"/>
    <p>#23</p>
    <input type="text" id="box228"/>
    <p>#24</p>
    <input type="text" id="box229"/>
    <p>#25</p>
    <input type="text" id="box230"/>
    <p>#26</p>
    <input type="text" id="box231"/>
    <p>#27</p>
    <input type="text" id="box232"/>
    <p>#28</p>
    <input type="text" id="box233"/>
    <p>#29</p>
    <input type="text" id="box234"/>
    <p>#30</p>
    <input type="text" id="box235"/>
    <p>#31</p>
    <input type="text" id="box236"/>
    <p>#32</p>
    <input type="text" id="box237"/>
    <p>#33</p>
    <input type="text" id="box238"/>
    <p>#34</p>
    <input type="text" id="box239"/>
    <p>#35</p>
    <input type="text" id="box240"/>
    <p>#36</p>
    <input type="text" id="box241"/>
    <p>#37</p>
    <input type="text" id="box242"/>
    <p>#38</p>
    <input type="text" id="box243"/>
    <p>#39</p>
    <input type="text" id="box244"/>
    <p>#40</p>
    <input type="text" id="box245"/>
    <p>#41</p>
    <input type="text" id="box246"/>
    <p>#42</p>
    <input type="text" id="box247"/>
    <p>#43</p>
    <input type="text" id="box248"/>
    <p>#44</p>
    <input type="text" id="box249"/>
    <input type="submit" value="Submit"/>
</form>
)
  
}

export {WritingStudent, raw_score_writing};