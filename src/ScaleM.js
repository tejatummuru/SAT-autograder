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
            scale_m.push(document.getElementById('box' + (i + 308)).value);
        }

        console.log("performed action");
        console.log(scale_m);
    }
return(
<form name="math" onSubmit={formActionM}>
    <p>#1</p>
    <input type="text" id="box308"/>
    <p>#2</p>
    <input type="text" id="box309"/>
    <p>#3</p>
    <input type="text" id="box310" />
    <p>#4</p>
    <input type="text" id="box311"/>
    <p>#5</p>
    <input type="text" id="box312"/>
    <p>#6</p>
    <input type="text" id="box313"/>
    <p>#7</p>
    <input type="text" id="box314"/>
    <p>#8</p>
    <input type="text" id="box315"/>
    <p>#9</p>
    <input type="text" id="box316"/>
    <p>#10</p>
    <input type="text" id="box317"/>
    <p>#11</p>
    <input type="text" id="box318"/>
    <p>#12</p>
    <input type="text" id="box319"/>
    <p>#13</p>
    <input type="text" id="box320"/>
    <p>#14</p>
    <input type="text" id="box321"/>
    <p>#15</p>
    <input type="text" id="box322"/>
    <p>#16</p>
    <input type="text" id="box323"/>
    <p>#17</p>
    <input type="text" id="box324"/>
    <p>#18</p>
    <input type="text" id="box325"/>
    <p>#19</p>
    <input type="text" id="box326"/>
    <p>#20</p>
    <input type="text" id="box327"/>
    <p>#21</p>
    <input type="text" id="box328"/>
    <p>#22</p>
    <input type="text" id="box329"/>
    <p>#23</p>
    <input type="text" id="box330"/>
    <p>#24</p>
    <input type="text" id="box331"/>
    <p>#25</p>
    <input type="text" id="box332"/>
    <p>#26</p>
    <input type="text" id="box333"/>
    <p>#27</p>
    <input type="text" id="box334"/>
    <p>#28</p>
    <input type="text" id="box335"/>
    <p>#29</p>
    <input type="text" id="box336"/>
    <p>#30</p>
    <input type="text" id="box337"/>
    <p>#31</p>
    <input type="text" id="box338"/>
    <p>#32</p>
    <input type="text" id="box339"/>
    <p>#33</p>
    <input type="text" id="box340"/>
    <p>#34</p>
    <input type="text" id="box341"/>
    <p>#35</p>
    <input type="text" id="box342"/>
    <p>#36</p>
    <input type="text" id="box343"/>
    <p>#37</p>
    <input type="text" id="box344"/>
    <p>#38</p>
    <input type="text" id="box345"/>
    <p>#39</p>
    <input type="text" id="box346"/>
    <p>#40</p>
    <input type="text" id="box347"/>
    <p>#41</p>
    <input type="text" id="box348"/>
    <p>#42</p>
    <input type="text" id="box349"/>
    <p>#43</p>
    <input type="text" id="box350"/>
    <p>#44</p>
    <input type="text" id="box351"/>
    <p>#45</p>
    <input type="text" id="box352"/>
    <p>#46</p>
    <input type="text" id="box353"/>
    <p>#47</p>
    <input type="text" id="box354"/>
    <p>#48</p>
    <input type="text" id="box355"/>
    <p>#49</p>
    <input type="text" id="box356"/>
    <p>#50</p>
    <input type="text" id="box357"/>
    <p>#51</p>
    <input type="text" id="box358"/>
    <p>#52</p>
    <input type="text" id="box359"/>
    <p>#53</p>
    <input type="text" id="box360"/>
    <p>#54</p>
    <input type="text" id="box361"/>
    <p>#55</p>
    <input type="text" id="box362"/>
    <p>#56</p>
    <input type="text" id="box363"/>
    <p>#57</p>
    <input type="text" id="box364"/>
    <p>#58</p>
    <input type="text" id="box365"/>
    <input type="submit" value="Submit"/>
</form>
)
}

export {ScaleM, scale_m};