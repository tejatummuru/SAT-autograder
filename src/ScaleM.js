import * as React from 'react';

// const score_scale = [{
//     raw_score: 0,
//     math_section: 0,
//     reading_section: 0,
//     writing_section: 0
// }];

var scale_m = [];

function ScaleM(){  
    function formActionM(event){
        event.preventDefault();
        scale_m.splice(0, scale_m.length);
        for(let i = 0; i < 58; i++){
            scale_m.push(document.getElementById('box' + i).value);
        }

        console.log("performed action");
        console.log(scale_m);
    }
return(
<form name="math" onSubmit={formActionM}>
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
    <p>#45</p>
    <input type="text" id="box44"/>
    <p>#46</p>
    <input type="text" id="box45"/>
    <p>#47</p>
    <input type="text" id="box46"/>
    <p>#48</p>
    <input type="text" id="box47"/>
    <p>#49</p>
    <input type="text" id="box48"/>
    <p>#50</p>
    <input type="text" id="box49"/>
    <p>#51</p>
    <input type="text" id="box50"/>
    <p>#52</p>
    <input type="text" id="box51"/>
    <p>#53</p>
    <input type="text" id="box52"/>
    <p>#54</p>
    <input type="text" id="box53"/>
    <p>#55</p>
    <input type="text" id="box54"/>
    <p>#56</p>
    <input type="text" id="box55"/>
    <p>#57</p>
    <input type="text" id="box56"/>
    <p>#58</p>
    <input type="text" id="box57"/>
    <input type="submit" value="Submit"/>
</form>
)
}

export {ScaleM, scale_m};