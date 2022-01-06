// import React from "react";
import * as React from 'react';

//things to fix stylistically: display them next to each other, make answer box smaller, front end stuff
//for multiple answers, we will add in a comma and if its in a range of solutions we add in a '-' key or something
var master_answers_wrm = [];


function WritingMaster(){  
    function formAction(event){
        event.preventDefault();
        master_answers_wrm.splice(0, master_answers_wrm.length);
        
        for(let i = 0; i < 44; i++){
            master_answers_wrm.push(document.getElementById('box' + (i + 52)).value);
        }
        console.log("performed action");
        console.log(master_answers_wrm);
    }
return(
<form name="reading" onSubmit={formAction}>
    <p>#1</p>
    <input type="text" id="box52"/>
    <p>#2</p>
    <input type="text" id="box53"/>
    <p>#3</p>
    <input type="text" id="box54" />
    <p>#4</p>
    <input type="text" id="box55"/>
    <p>#5</p>
    <input type="text" id="box56"/>
    <p>#6</p>
    <input type="text" id="box57"/>
    <p>#7</p>
    <input type="text" id="box58"/>
    <p>#8</p>
    <input type="text" id="box59"/>
    <p>#9</p>
    <input type="text" id="box60"/>
    <p>#10</p>
    <input type="text" id="box61"/>
    <p>#11</p>
    <input type="text" id="box62"/>
    <p>#12</p>
    <input type="text" id="box63"/>
    <p>#13</p>
    <input type="text" id="box64"/>
    <p>#14</p>
    <input type="text" id="box65"/>
    <p>#15</p>
    <input type="text" id="box66"/>
    <p>#16</p>
    <input type="text" id="box67"/>
    <p>#17</p>
    <input type="text" id="box68"/>
    <p>#18</p>
    <input type="text" id="box69"/>
    <p>#19</p>
    <input type="text" id="box70"/>
    <p>#20</p>
    <input type="text" id="box71"/>
    <p>#21</p>
    <input type="text" id="box72"/>
    <p>#22</p>
    <input type="text" id="box73"/>
    <p>#23</p>
    <input type="text" id="box74"/>
    <p>#24</p>
    <input type="text" id="box75"/>
    <p>#25</p>
    <input type="text" id="box76"/>
    <p>#26</p>
    <input type="text" id="box77"/>
    <p>#27</p>
    <input type="text" id="box78"/>
    <p>#28</p>
    <input type="text" id="box79"/>
    <p>#29</p>
    <input type="text" id="box80"/>
    <p>#30</p>
    <input type="text" id="box81"/>
    <p>#31</p>
    <input type="text" id="box82"/>
    <p>#32</p>
    <input type="text" id="box83"/>
    <p>#33</p>
    <input type="text" id="box84"/>
    <p>#34</p>
    <input type="text" id="box85"/>
    <p>#35</p>
    <input type="text" id="box86"/>
    <p>#36</p>
    <input type="text" id="box87"/>
    <p>#37</p>
    <input type="text" id="box88"/>
    <p>#38</p>
    <input type="text" id="box89"/>
    <p>#39</p>
    <input type="text" id="box90"/>
    <p>#40</p>
    <input type="text" id="box91"/>
    <p>#41</p>
    <input type="text" id="box92"/>
    <p>#42</p>
    <input type="text" id="box93"/>
    <p>#43</p>
    <input type="text" id="box94"/>
    <p>#44</p>
    <input type="text" id="box95"/>
    <input type="submit" value="Submit"/>
</form>
)
  
}

export {WritingMaster, master_answers_wrm};