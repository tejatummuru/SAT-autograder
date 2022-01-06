import * as React from 'react';

// const score_scale = [{
//     raw_score: 0,
//     math_section: 0,
//     reading_section: 0,
//     writing_section: 0
// }];

var scale_wr = [];

function ScaleWr(){  
    function formActionW(event){
        event.preventDefault();
        scale_wr.splice(0, scale_wr.length);
        for(let i = 0; i < 44; i++){
            scale_wr.push(document.getElementById('box' + (i + 418)).value);
        }
        console.log("performed action");
        console.log(scale_wr);
    }
return(
<form name="writing" onSubmit={formActionW}>
    <p>#1</p>
    <input type="text" id="box418"/>
    <p>#2</p>
    <input type="text" id="box419"/>
    <p>#3</p>
    <input type="text" id="box420" />
    <p>#4</p>
    <input type="text" id="box421"/>
    <p>#5</p>
    <input type="text" id="box422"/>
    <p>#6</p>
    <input type="text" id="box423"/>
    <p>#7</p>
    <input type="text" id="box424"/>
    <p>#8</p>
    <input type="text" id="box425"/>
    <p>#9</p>
    <input type="text" id="box426"/>
    <p>#10</p>
    <input type="text" id="box427"/>
    <p>#11</p>
    <input type="text" id="box428"/>
    <p>#12</p>
    <input type="text" id="box429"/>
    <p>#13</p>
    <input type="text" id="box430"/>
    <p>#14</p>
    <input type="text" id="box431"/>
    <p>#15</p>
    <input type="text" id="box432"/>
    <p>#16</p>
    <input type="text" id="box433"/>
    <p>#17</p>
    <input type="text" id="box434"/>
    <p>#18</p>
    <input type="text" id="box435"/>
    <p>#19</p>
    <input type="text" id="box436"/>
    <p>#20</p>
    <input type="text" id="box437"/>
    <p>#21</p>
    <input type="text" id="box438"/>
    <p>#22</p>
    <input type="text" id="box439"/>
    <p>#23</p>
    <input type="text" id="box440"/>
    <p>#24</p>
    <input type="text" id="box441"/>
    <p>#25</p>
    <input type="text" id="box442"/>
    <p>#26</p>
    <input type="text" id="box443"/>
    <p>#27</p>
    <input type="text" id="box444"/>
    <p>#28</p>
    <input type="text" id="box445"/>
    <p>#29</p>
    <input type="text" id="box446"/>
    <p>#30</p>
    <input type="text" id="box447"/>
    <p>#31</p>
    <input type="text" id="box448"/>
    <p>#32</p>
    <input type="text" id="box449"/>
    <p>#33</p>
    <input type="text" id="box450"/>
    <p>#34</p>
    <input type="text" id="box451"/>
    <p>#35</p>
    <input type="text" id="box452"/>
    <p>#36</p>
    <input type="text" id="box453"/>
    <p>#37</p>
    <input type="text" id="box454"/>
    <p>#38</p>
    <input type="text" id="box455"/>
    <p>#39</p>
    <input type="text" id="box456"/>
    <p>#40</p>
    <input type="text" id="box457"/>
    <p>#41</p>
    <input type="text" id="box458"/>
    <p>#42</p>
    <input type="text" id="box459"/>
    <p>#43</p>
    <input type="text" id="box460"/>
    <p>#44</p>
    <input type="text" id="box461"/>
    <input type="submit" value="Submit"/>
</form>
)
}

export {ScaleWr, scale_wr};