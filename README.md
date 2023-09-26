# this is my first project with hook {useState}
import { useState } from 'react';
<br>
let [count, setCount] = useState(0); {{{{{{{{{//using useState in a variable //let [variablename,methodname/function name]=useState(initialValue);}}}}}}
<br>
{{{//Using button for using function}}}
<br>
<button onClick={() => setCount(count + 1)}>
        up
      </button>
      <br>
{{{{{{{{{{{or}}}}}}}}}}}
<br>
var addval=()=>{
    setCount(count+=1)
  }
  <br>
var decval=()=>{
    setCount(count-=1)
  }
  <br>

  {{{{can be used as }}}}
  <br>
  <p>here its {count}</p>
