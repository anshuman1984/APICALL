
import { useState } from 'react';
import './App.css';
import API from './API';

function App() {
  const [data,setData]=useState(0);
  const [item,setItem]=useState(1);
  const multi=()=>{
    console.log("test");
    return setItem(item*10);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>hello</h1>
        <h1>{data}</h1>
        <h1>{item}</h1>
        <button onClick={()=>setData(data+1)}>increase</button>
        <button onClick={multi}>increase</button> */}
        <API />
      </header>
    </div>
  );
}

export default App;
