# this is my first project with hook {useState}
import { useState } from 'react';
let [count, setCount] = useState(0); {{{{{{{{{//using useState in a variable //let [variablename,methodname/function name]=useState(initialValue);}}}}}}
{{{//Using button for using function}}}
<button onClick={() => setCount(count + 1)}>
        up
      </button>
{{{{{{{{{{{or}}}}}}}}}}}
var addval=()=>{
    setCount(count+=1)
  }
var decval=()=>{
    setCount(count-=1)
  }

  {{{{can be used as }}}}
  <p>here its {count}</p>
