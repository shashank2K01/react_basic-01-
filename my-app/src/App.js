
import './App.css';
import React, {useState} from 'react';

function App() {

let[value,setValue] = useState(0);


  return (
    <>
    <h1>SIMPLE COUNTER</h1>
    <h1>{value}</h1>
    <button class = 'btn' onClick ={()=>setValue(++value)}>increase</button>
    <button class = 'btn' onClick = {()=>setValue(0)}>reset</button>
    <button class ='btn' onClick= {()=>setValue(--value)}>decrease</button>

    </>

  
  );
}

export default App;
