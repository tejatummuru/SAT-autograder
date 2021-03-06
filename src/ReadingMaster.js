// import React from "react";
import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));
  function GridItem({ classes }) {
    return (
      // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
      // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
      // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    );
  }
//things to fix stylistically: display them next to each other, make answer box smaller, front end stuff
//for multiple answers, we will add in a comma and if its in a range of solutions we add in a '-' key or something
var master_answers_rwm = [];


function ReadingMaster(){  
    function formAction(event){
        event.preventDefault();
        master_answers_rwm.splice(0, master_answers_rwm.length);
        for(let i = 0; i < 52; i++){
            master_answers_rwm.push(document.getElementById('box' + i).value);
        }

        console.log("performed action");
        console.log(master_answers_rwm);
    }
    const classes = useStyles();
return(
    // <Grid container spacing={1}>
    //     <GridItem classes={col} />
    // </Grid>
    <div class="flex-grid">
    <form name="reading" onSubmit={formAction}>
    <p>#1</p>
    <input type="text" className='col' id="box0"/>
    <p>#2</p>
    <input type="text" className='col' id="box1"/>
    <p>#3</p>
    <input type="text" className='col' id="box2" />
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
    <input type="submit" value="Submit"/>
</form>
    </div>

)
  
}

export {ReadingMaster, master_answers_rwm};