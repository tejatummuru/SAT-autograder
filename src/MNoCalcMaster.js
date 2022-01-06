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
            master_answers_mnc.push(document.getElementById('box' + (i + 96)).value);
            console.log(document.getElementById('box' + (i + 96)).value);
        }
        console.log("performed action");
        console.log(master_answers_mnc);
    }
return(
<form name="reading" onSubmit={formAction}>
    <p>#1</p>
    <input type="text" id="box96"/>
    <p>#2</p>
    <input type="text" id="box97"/>
    <p>#3</p>
    <input type="text" id="box98" />
    <p>#4</p>
    <input type="text" id="box99"/>
    <p>#5</p>
    <input type="text" id="box100"/>
    <p>#6</p>
    <input type="text" id="box101"/>
    <p>#7</p>
    <input type="text" id="box102"/>
    <p>#8</p>
    <input type="text" id="box103"/>
    <p>#9</p>
    <input type="text" id="box104"/>
    <p>#10</p>
    <input type="text" id="box105"/>
    <p>#11</p>
    <input type="text" id="box106"/>
    <p>#12</p>
    <input type="text" id="box107"/>
    <p>#13</p>
    <input type="text" id="box108"/>
    <p>#14</p>
    <input type="text" id="box109"/>
    <p>#15</p>
    <input type="text" id="box110"/>
    <p>#16</p>
    <input type="text" id="box111"/>
    <p>#17</p>
    <input type="text" id="box112"/>
    <p>#18</p>
    <input type="text" id="box113"/>
    <p>#19</p>
    <input type="text" id="box114"/>
    <p>#20</p>
    <input type="text" id="box115"/>
    <input type="submit" value="Submit"/>
</form>
)
  
}

export {MNoCalcMaster, master_answers_mnc};