// import React from "react";
import * as React from 'react';

//things to fix stylistically: display them next to each other, make answer box smaller, front end stuff
//for multiple answers, we will add in a comma and if its in a range of solutions we add in a '-' key or something
var master_answers_mnc = [];


function MNoCalcMaster(){  
    function formAction(event){
        event.preventDefault();
        master_answers_mnc.splice(0, master_answers_mnc.length);
        for(let i = 0; i < 20; i++){
            master_answers_mnc.push(document.getElementById('box' + i).value);
        }
        console.log("performed action");
        console.log(master_answers_mnc);
    }
return(
<form name="reading" onSubmit={formAction}>
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
    <input type="submit" value="Submit"/>
</form>
)
  
}

export {MNoCalcMaster, master_answers_mnc};