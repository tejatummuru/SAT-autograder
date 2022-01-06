import * as React from 'react';

// const score_scale = [{
//     raw_score: 0,
//     math_section: 0,
//     reading_section: 0,
//     writing_section: 0
// }];

var scale_rw = [];

function ScaleR(){  
    function formActionR(event){
        event.preventDefault();
        scale_rw.splice(0, scale_rw.length);
        for(let i = 0; i < 52; i++){
            scale_rw.push(document.getElementById('box' + (i + 366)).value);
        }

        console.log("performed action");
        console.log(scale_rw);
    }
return(
<form name="reading" onSubmit={formActionR}>
    <p>#1</p>
    <input type="text" id="box366"/>
    <p>#2</p>
    <input type="text" id="box367"/>
    <p>#3</p>
    <input type="text" id="box368" />
    <p>#4</p>
    <input type="text" id="box369"/>
    <p>#5</p>
    <input type="text" id="box370"/>
    <p>#6</p>
    <input type="text" id="box371"/>
    <p>#7</p>
    <input type="text" id="box372"/>
    <p>#8</p>
    <input type="text" id="box373"/>
    <p>#9</p>
    <input type="text" id="box374"/>
    <p>#10</p>
    <input type="text" id="box375"/>
    <p>#11</p>
    <input type="text" id="box376"/>
    <p>#12</p>
    <input type="text" id="box377"/>
    <p>#13</p>
    <input type="text" id="box378"/>
    <p>#14</p>
    <input type="text" id="box379"/>
    <p>#15</p>
    <input type="text" id="box380"/>
    <p>#16</p>
    <input type="text" id="box381"/>
    <p>#17</p>
    <input type="text" id="box382"/>
    <p>#18</p>
    <input type="text" id="box383"/>
    <p>#19</p>
    <input type="text" id="box384"/>
    <p>#20</p>
    <input type="text" id="box385"/>
    <p>#21</p>
    <input type="text" id="box386"/>
    <p>#22</p>
    <input type="text" id="box387"/>
    <p>#23</p>
    <input type="text" id="box388"/>
    <p>#24</p>
    <input type="text" id="box389"/>
    <p>#25</p>
    <input type="text" id="box390"/>
    <p>#26</p>
    <input type="text" id="box391"/>
    <p>#27</p>
    <input type="text" id="box392"/>
    <p>#28</p>
    <input type="text" id="box393"/>
    <p>#29</p>
    <input type="text" id="box394"/>
    <p>#30</p>
    <input type="text" id="box395"/>
    <p>#31</p>
    <input type="text" id="box396"/>
    <p>#32</p>
    <input type="text" id="box397"/>
    <p>#33</p>
    <input type="text" id="box398"/>
    <p>#34</p>
    <input type="text" id="box399"/>
    <p>#35</p>
    <input type="text" id="box400"/>
    <p>#36</p>
    <input type="text" id="box401"/>
    <p>#37</p>
    <input type="text" id="box402"/>
    <p>#38</p>
    <input type="text" id="box403"/>
    <p>#39</p>
    <input type="text" id="box404"/>
    <p>#40</p>
    <input type="text" id="box405"/>
    <p>#41</p>
    <input type="text" id="box406"/>
    <p>#42</p>
    <input type="text" id="box407"/>
    <p>#43</p>
    <input type="text" id="box408"/>
    <p>#44</p>
    <input type="text" id="box409"/>
    <p>#45</p>
    <input type="text" id="box410"/>
    <p>#46</p>
    <input type="text" id="box411"/>
    <p>#47</p>
    <input type="text" id="box412"/>
    <p>#48</p>
    <input type="text" id="box413"/>
    <p>#49</p>
    <input type="text" id="box414"/>
    <p>#50</p>
    <input type="text" id="box415"/>
    <p>#51</p>
    <input type="text" id="box416"/>
    <p>#52</p>
    <input type="text" id="box417"/>
    <input type="submit" value="Submit"/>
</form>
)
}

export {ScaleR, scale_rw};