// import React from "react";
import * as React from 'react';
import {master_answers_mcm} from './MCalcMaster';
import {scale_m} from './ScaleM';
import {correct} from './MNoCalcStudent';
//things to fix stylistically: display them next to each other, make answer box smaller, front end stuff
//for multiple answers, we will add in a comma and if its in a range of solutions we add in a '-' key or something, add new student button to refresh page
//ad get rid of previous answers
var master_answers_mcs = [];
var incorrect = 0;
var correct_mc = 0;
var raw_score_math = 0;
//|| master_answers_mnc[i].includes("-")
function MCalcStudent(){  
    function formAction(event){
        event.preventDefault();
        master_answers_mcs.splice(0, master_answers_mcs.length);
        for(let i = 0; i < 38; i++){
            master_answers_mcs.push(document.getElementById('box' + (i + 270)).value);
            if(master_answers_mcs[i].includes(',')){
                var arr = master_answers_mcs[i].split(',');
                var found = false;
                var length = 0;
                while(!found && length < arr.length){
                    if(arr[i] == master_answers_mcs[i]){
                        found = true;
                    }
                    length++;
                    i++;
                }
                if(!found){
                    incorrect++;
                }
            }else if(master_answers_mcm[i].includes("-")){
                arr = master_answers_mcm[i].split('-');
                if(Number(master_answers_mcs[i]) < Number(arr[0]) || Number(master_answers_mcs[i]) > Number(arr[1])){
                    incorrect++;
                }
            }else if(master_answers_mcm[i] != master_answers_mcs[i]){
                incorrect++;
            }
        }
        //once we have the correct answers, we should have another file to pull the raw score and multiply by 10 and
        //return a final score for the reading subsection, so now i will build that file
        console.log(master_answers_mcs);
        correct_mc = 38 - incorrect;
        var total = correct_mc + correct;
        raw_score_math = scale_m[total - 1];
        return raw_score_math; //do i need to do this in js?
    }
return(
<form name="math calc" onSubmit={formAction}>
    <p>#1</p>
    <input type="text" id="box270"/>
    <p>#2</p>
    <input type="text" id="box271"/>
    <p>#3</p>
    <input type="text" id="box272" />
    <p>#4</p>
    <input type="text" id="box273"/>
    <p>#5</p>
    <input type="text" id="box274"/>
    <p>#6</p>
    <input type="text" id="box275"/>
    <p>#7</p>
    <input type="text" id="box276"/>
    <p>#8</p>
    <input type="text" id="box277"/>
    <p>#9</p>
    <input type="text" id="box278"/>
    <p>#10</p>
    <input type="text" id="box279"/>
    <p>#11</p>
    <input type="text" id="box280"/>
    <p>#12</p>
    <input type="text" id="box281"/>
    <p>#13</p>
    <input type="text" id="box282"/>
    <p>#14</p>
    <input type="text" id="box283"/>
    <p>#15</p>
    <input type="text" id="box284"/>
    <p>#16</p>
    <input type="text" id="box285"/>
    <p>#17</p>
    <input type="text" id="box286"/>
    <p>#18</p>
    <input type="text" id="box287"/>
    <p>#19</p>
    <input type="text" id="box288"/>
    <p>#20</p>
    <input type="text" id="box289"/>
    <p>#21</p>
    <input type="text" id="box290"/>
    <p>#22</p>
    <input type="text" id="box291"/>
    <p>#23</p>
    <input type="text" id="box292"/>
    <p>#24</p>
    <input type="text" id="box293"/>
    <p>#25</p>
    <input type="text" id="box294"/>
    <p>#26</p>
    <input type="text" id="box295"/>
    <p>#27</p>
    <input type="text" id="box296"/>
    <p>#28</p>
    <input type="text" id="box297"/>
    <p>#29</p>
    <input type="text" id="box298"/>
    <p>#30</p>
    <input type="text" id="box299"/>
    <p>#31</p>
    <input type="text" id="box300"/>
    <p>#32</p>
    <input type="text" id="box301"/>
    <p>#33</p>
    <input type="text" id="box302"/>
    <p>#34</p>
    <input type="text" id="box303"/>
    <p>#35</p>
    <input type="text" id="box304"/>
    <p>#36</p>
    <input type="text" id="box305"/>
    <p>#37</p>
    <input type="text" id="box306"/>
    <p>#38</p>
    <input type="text" id="box307"/>
    <input type="submit" value="Submit"/>
</form>
)
  
}

export  {MCalcStudent, raw_score_math};