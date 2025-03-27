import React, { useState } from 'react';
import './App.css';

function App() {
 const [count,setCount]=useState(0);

 const increment = () => {
  setCount(count+1);
 };
 
 const decrement = () => {
  setCount(count-1);
 };

 const reset = () => {
  setCount(0);
 }

 return(
   <div className= "zenntai">
    <h1 className="mozi">カウンターアプリ</h1>
     <p className= "count">{count}</p>
      <div>
       <button onClick={increment} className="age">↑</button>
       <button onClick={decrement} className="sage">↓</button>
      </div>
    <div>
     <button onClick={reset} className="reset">リセット</button>
    </div>
   </div>
 );
}

export default App;
