// import React from "react";
import * as React from 'react';
import {master_answers_mnc} from './MNoCalcMaster';
//things to fix stylistically: display them next to each other, make answer box smaller, front end stuff
//for multiple answers, we will add in a comma and if its in a range of solutions we add in a '-' key or something, add new student button to refresh page
//ad get rid of previous answers
var master_answers_mncs = [];
var incorrect = 0;
var correct = 0;
//|| master_answers_mnc[i].includes("-")
function MNoCalcStudent(){  
    function formAction(event){
        event.preventDefault();
        master_answers_mncs.splice(0, master_answers_mncs.length);
        for(let i = 0; i < 20; i++){
            master_answers_mncs.push(document.getElementById('box' + (i + 250)).value);
            if(master_answers_mnc[i].includes(',')){
                console.log("entered");
                var arr = master_answers_mnc[i].split(',');
                console.log(arr);
                var found = false;
                var length = 0;
                while(!found && length < arr.length){
                    if(arr[i] == master_answers_mncs[i]){
                        found = true;
                    }
                    i++;
                    length++;
                }
                console.log(found);
                if(found == false){
                    incorrect++;
                }
                console.log("incorrect: " + incorrect);
            }else if(master_answers_mnc[i].includes("-")){
                arr = master_answers_mnc[i].split('-');
                if(Number(master_answers_mncs[i]) < Number(arr[0]) || Number(master_answers_mncs[i]) > Number(arr[1])){
                    incorrect++;
                }
            }else if(master_answers_mnc[i] != master_answers_mncs[i]){
                incorrect++;
            }
        }
        //once we have the correct answers, we should have another file to pull the raw score and multiply by 10 and
        //return a final score for the reading subsection, so now i will build that file
        console.log(master_answers_mncs);
        console.log(20 - incorrect);
        correct = 20 - incorrect;
        return correct; //do i need to do this in js?
    }
return(
<form name="math no calc" onSubmit={formAction}>
    <p>#1</p>
    <input type="text" id="box250"/>
    <p>#2</p>
    <input type="text" id="box251"/>
    <p>#3</p>
    <input type="text" id="box252" />
    <p>#4</p>
    <input type="text" id="box253"/>
    <p>#5</p>
    <input type="text" id="box254"/>
    <p>#6</p>
    <input type="text" id="box255"/>
    <p>#7</p>
    <input type="text" id="box256"/>
    <p>#8</p>
    <input type="text" id="box257"/>
    <p>#9</p>
    <input type="text" id="box258"/>
    <p>#10</p>
    <input type="text" id="box259"/>
    <p>#11</p>
    <input type="text" id="box260"/>
    <p>#12</p>
    <input type="text" id="box261"/>
    <p>#13</p>
    <input type="text" id="box262"/>
    <p>#14</p>
    <input type="text" id="box263"/>
    <p>#15</p>
    <input type="text" id="box264"/>
    <p>#16</p>
    <input type="text" id="box265"/>
    <p>#17</p>
    <input type="text" id="box266"/>
    <p>#18</p>
    <input type="text" id="box267"/>
    <p>#19</p>
    <input type="text" id="box268"/>
    <p>#20</p>
    <input type="text" id="box269"/>
    <input type="submit" value="Submit"/>
</form>
)
  
}

export {MNoCalcStudent, correct};