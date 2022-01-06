// import React from "react";
import * as React from 'react';

//things to fix stylistically: display them next to each other, make answer box smaller, front end stuff
//for multiple answers, we will add in a comma and if its in a range of solutions we add in a '-' key or something, we will look for this when checking answers
var master_answers_mcm = [];


function MCalcMaster(){  
    function formAction(event){
        event.preventDefault();
        master_answers_mcm.splice(0, master_answers_mcm.length);
        for(let i = 0; i < 38; i++){
            master_answers_mcm.push(document.getElementById('box' + (i + 117)).value);
        }
        console.log("performed action");
        console.log(master_answers_mcm);
    }
return(
<form name="reading" onSubmit={formAction}>
    <p>#1</p>
    <input type="text" id="box117"/>
    <p>#2</p>
    <input type="text" id="box118"/>
    <p>#3</p>
    <input type="text" id="box119" />
    <p>#4</p>
    <input type="text" id="box120"/>
    <p>#5</p>
    <input type="text" id="box121"/>
    <p>#6</p>
    <input type="text" id="box122"/>
    <p>#7</p>
    <input type="text" id="box123"/>
    <p>#8</p>
    <input type="text" id="box124"/>
    <p>#9</p>
    <input type="text" id="box125"/>
    <p>#10</p>
    <input type="text" id="box126"/>
    <p>#11</p>
    <input type="text" id="box127"/>
    <p>#12</p>
    <input type="text" id="box128"/>
    <p>#13</p>
    <input type="text" id="box129"/>
    <p>#14</p>
    <input type="text" id="box130"/>
    <p>#15</p>
    <input type="text" id="box131"/>
    <p>#16</p>
    <input type="text" id="box132"/>
    <p>#17</p>
    <input type="text" id="box133"/>
    <p>#18</p>
    <input type="text" id="box134"/>
    <p>#19</p>
    <input type="text" id="box135"/>
    <p>#20</p>
    <input type="text" id="box136"/>
    <p>#21</p>
    <input type="text" id="box137"/>
    <p>#22</p>
    <input type="text" id="box138"/>
    <p>#23</p>
    <input type="text" id="box139"/>
    <p>#24</p>
    <input type="text" id="box140"/>
    <p>#25</p>
    <input type="text" id="box141"/>
    <p>#26</p>
    <input type="text" id="box142"/>
    <p>#27</p>
    <input type="text" id="box143"/>
    <p>#28</p>
    <input type="text" id="box144"/>
    <p>#29</p>
    <input type="text" id="box145"/>
    <p>#30</p>
    <input type="text" id="box146"/>
    <p>#31</p>
    <input type="text" id="box147"/>
    <p>#32</p>
    <input type="text" id="box148"/>
    <p>#33</p>
    <input type="text" id="box149"/>
    <p>#34</p>
    <input type="text" id="box150"/>
    <p>#35</p>
    <input type="text" id="box151"/>
    <p>#36</p>
    <input type="text" id="box152"/>
    <p>#37</p>
    <input type="text" id="box153"/>
    <p>#38</p>
    <input type="text" id="box154"/>
    <input type="submit" value="Submit"/>
</form>
)
  
}

export  {MCalcMaster, master_answers_mcm};